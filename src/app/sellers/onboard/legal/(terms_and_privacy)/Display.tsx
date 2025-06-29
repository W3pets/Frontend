import React, { useMemo } from 'react';
import { terms } from './terms_of_service/data';
import { privacy_polices } from './privacy_policy/data';
import { Paragraph } from '@/model/types/global';
import styles from '@/components/pages/sellers/terms_conditions/styles.module.scss';

export default function Display({ isTerms }: { isTerms: boolean }) {
  const data = isTerms ? terms : privacy_polices;

  const res = useMemo(() => {
    const tree = (
      paragraphs: (Paragraph | string)[],
      fontSize = 1.2,
      gap = 1.2
    ) => {
      return paragraphs.map((paragraph) => {
        const isString = typeof paragraph === 'string';
        const isSpan = !isString && paragraph.h.startsWith('•');
        return (
          <div className={styles.section} style={{ rowGap: `${gap}rem` }}>
            {!isSpan && (
              <>
                {!isString && (
                  <div
                    className={styles.title}
                    style={{ fontSize: `${fontSize}rem` }}
                  >
                    {paragraph.h}
                  </div>
                )}
                {isString && <div className={styles.text}>{paragraph}</div>}
                {!isString &&
                  tree(paragraph.paragraphs, fontSize - 0.05, gap - 0.1)}
              </>
            )}

            {isSpan && (
              <div className={styles.text} style={{ paddingLeft: '0.4rem' }}>
                <b style={{ fontSize: `${fontSize}rem` }}>{paragraph.h}</b>
                <span>{paragraph.paragraphs[0] as string}</span>
              </div>
            )}
          </div>
        );
      });
    };
    return tree(data);
  }, []);

  return <div className={styles.wrapper}>{res}</div>;
}
