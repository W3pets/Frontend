import {
  useState,
  useRef,
  useEffect,
  CSSProperties,
  useMemo,
  useLayoutEffect,
  ReactNode,
  ComponentType,
} from 'react';
import styles from './styles.module.scss';
import { HiBars3BottomLeft as SideBarIcon } from 'react-icons/hi2';
import uniqid from 'uniqid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type Child = {
  icon?: ComponentType;
  text: string;
  tagline?: string;
  link?: string;
  onclick?: () => void;
  isLast?: boolean;
  action?: {
    icon: ComponentType;
    label: string;
    link: string;
  };
  unreadBadge?: boolean;
};

type BarProps = {
  className?: string;
  children: Child[];
  pathsIds?: string[];
  header?: Child;
  iconPos?: {
    left: number;
    top: number;
  };
  isFullWidth?: boolean;
  minDestopWidth?: number;
  unreadCount?: number;
};

function Sidebar({
  className = '',
  minDestopWidth = 0,
  children,
  header,
  pathsIds = [],
  isFullWidth,
  iconPos = { left: 20, top: 30 },
  unreadCount = 0,
}: BarProps) {
  const id = uniqid();
  const pathname = usePathname();
  const [showBar, setShowBar] = useState(false);
  const [style, setStyle] = useState<CSSProperties>({});
  const [wrapperStyle, setWrapperStyle] = useState<CSSProperties>({});
  const [isMobile, setIsMobile] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const resetStates = () => {
    setShowBar(() => true);
    setWrapperStyle(() => ({}));
    setStyle(() => ({}));
  };

  const hideBar = () => {
    setShowBar(() => false);
    setWrapperStyle({ backgroundColor: 'transparent', left: 0 });
    setStyle(() => ({ left: '-100%' }));
    setTimeout(() => {
      setWrapperStyle({ left: '-100%' });
    }, 200);
  };

  const handleToggle = (e: MouseEvent) => {
    if (showBar) {
      const paths = e.composedPath();
      const show = paths.findIndex((el) => (el as any).id === id) !== -1;
      if (!show) hideBar();
    }
  };

  const handleResize = () => {
    const pageWidth = document.body.clientWidth;
    if (pageWidth < minDestopWidth && !isMobile) {
      setIsMobile(() => true);
    }

    if (pageWidth >= minDestopWidth && isMobile) {
      setIsMobile(() => false);
      resetStates();
    }
  };

  const handleBarAction = () => {
    setWrapperStyle({ left: 0 });
    setStyle({ left: 0 });
    setShowBar(true);
  };

  useEffect(() => {
    return () => {
      setWrapperStyle({});
      setShowBar(false);
      setStyle(() => ({}));
    };
  }, []);

  useEffect(() => {
    return () => {
      if (showBar) {
        hideBar();
      }
    };
  }, []);

  const selectedIndex = useMemo(() => {
    const index = pathsIds.findIndex((path) => pathname.includes(path));
    return index !== -1 ? index : 0;
  }, [pathname, pathsIds]);

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    if (wrapperRef.current && isMobile) {
      wrapperRef.current.addEventListener('click', handleToggle);
    }
    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('click', handleToggle);
      }
    };
  }, [wrapperRef.current, isMobile, style]);

  const headerJSX = useMemo(() => {
    const IconComponent = header?.icon;
    const ActionIcon = header?.action?.icon;
    const child = header && (
      <>
        {IconComponent && <IconComponent />}
        <div className={styles.info}>
          <div className={styles.text}>{header?.text}</div>
          {header?.tagline && (
            <div className={styles.tag_line}>{header?.tagline}</div>
          )}
        </div>
      </>
    );

    return header?.link ? (
      <Link className={styles.header} href={header.link}>
        {child}
      </Link>
    ) : (
      <div className={`${styles.header} ${styles.has_action}`}>
        {child}
        {ActionIcon && (
          <Link href={header?.action?.link || '#'} className={styles.header_action}>
            <ActionIcon />
          </Link>
        )}
      </div>
    );
  }, [header]);

  const childrenJSX = useMemo(() => {
    return children.map((child, i) => {
      const IconComponent = child.icon;
      const isLast = typeof child.isLast === 'boolean' && child.isLast;
      
      const childJSX = (
        <div
          key={i}
          className={` ${styles.child} ${selectedIndex === i ? styles.selected : ''} ${isLast ? styles.flex_end : ''}`}
        >
          {IconComponent && <IconComponent />}
          <div className={styles.info}>
            <div className={styles.text}>{child.text}</div>
            {child?.tagline && (
              <div className={styles.tag_line}>{child?.tagline}</div>
            )}
          </div>
          {child.unreadBadge && unreadCount > 0 && (
            <span className={styles.badge}>{unreadCount}</span>
          )}
        </div>
      );

      return child?.link || (!!pathsIds.length && !child?.onclick) ? (
        <Link
          key={i}
          href={child?.link || pathsIds[i]}
          className={`${styles.child_link} ${isLast ? styles.flex_end : ''}`}
        >
          {childJSX}
        </Link>
      ) : (
        childJSX
      );
    });
  }, [children, selectedIndex, unreadCount]);

  return (
    <div className={`${styles.bar_wrapper} ${className}`}>
      {isMobile && (
        <SideBarIcon
          style={{ ...iconPos }}
          className={styles.icon}
          onClick={handleBarAction}
        />
      )}

      <div
        className={`${styles.content} ${isMobile ? styles.is_mobile : ''}`}
        style={wrapperStyle}
        ref={wrapperRef}
      >
        <div
          className={`${styles.bar} ${isMobile ? styles.is_mobile : ''} ${isFullWidth ? styles.full_width : ''}`}
          style={style}
          id={id}
        >
          <div className={styles.children}>
            {headerJSX}
            {childrenJSX}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
