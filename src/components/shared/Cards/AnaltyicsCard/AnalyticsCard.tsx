import Link from 'next/link';
import styles from './styles.module.scss';
import Card from '../Card';

type Props = {
  title: {
    title?: string;
    icon?: React.ReactNode;
  };
  color?: 'primary' | 'info' | 'warning' | 'error' | 'normal';
  action?: {
    title?: string;
    icon?: React.ReactNode;
    link?: string;
    onClick?: () => void;
  };
  description?: {
    title: string;
    value: string;
  };
  metric?: {
    title: string;
    value: string;
    unit?: string;
  };
};

function AnalyticsCard({
  title,
  action,
  description,
  metric,
  color = 'normal',
}: Props) {
  return (
    <Card className={styles.card}>
      <div className={`${styles.header} ${styles[color]}`}>
        <div className={styles.title}>
          {title?.icon}
          {title?.title}
        </div>
        {action ? (
          action?.link ? (
            <Link className={styles.action} href={action.link}>
              {' '}
              {action?.icon}
              {action?.title}
            </Link>
          ) : (
            <div className={styles.action} onClick={action?.onClick}>
              {action?.icon}
              {action?.title}
            </div>
          )
        ) : null}
      </div>
      {metric && (
        <div className={styles.metric}>
          <span className={styles.title}>{metric?.title}</span>
          <div className={styles.value}>
            <span>{metric?.value}</span>
            <span>{metric?.unit}</span>
          </div>
        </div>
      )}
    </Card>
  );
}

export default AnalyticsCard;
