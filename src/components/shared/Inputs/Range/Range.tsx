import { useRef, useState } from 'react';
import styles from './styles.module.scss';
import { BsDashLg } from 'react-icons/bs';
import helpers from '@/helpers';

type Props = {
  min: number;
  max: number;
  selectedMin: number;
  selectedMax: number;
};
function Range({ min, max, selectedMin, selectedMax }: Props) {
  const [range, setRange] = useState({ min, max });

  const rangeWidth = range.max - range.min;

  const [selectedRange, setSelectedRange] = useState({
    min: (selectedMin - range.min) / rangeWidth,
    max: (selectedMax - range.min) / rangeWidth,
  });

  const getRangeWidth = (num: number, comp = rangeWidth) => {
    return num * comp + range.min;
  };

  const onRangeChange = (
    value: number,
    func: (
      value: React.SetStateAction<{
        min: number;
        max: number;
      }>
    ) => void,
    isSelectedRange = true,
    isMin = true
  ) => {
    const comp = isSelectedRange ? rangeWidth : 1;
    const min = isSelectedRange ? range.min : 0;
    const limit = (isSelectedRange ? 0.085 : 0.05) * rangeWidth;
    if (isMin) {
      func((prev) => ({
        ...prev,
        min:
          getRangeWidth(prev.max, comp) - value <= limit || value < 0
            ? prev.min
            : (value - min) / comp,
      }));
    } else {
      func((prev) => ({
        ...prev,
        max:
          value - getRangeWidth(prev.min, comp) <= limit || value > 100000000
            ? prev.max
            : (value - min) / comp,
      }));
    }
  };

  return (
    <div className={styles.range}>
      <div className={styles.slider_and_input}>
        <div className={styles.slider}>
          <span
            style={{
              left: `${selectedRange.min * 100}%`,
              width: `${(selectedRange.max - selectedRange.min) * 100}%`,
            }}
            className={styles.selected}
          />
          <span
            className={styles.value}
            style={{ left: `${selectedRange.min * 100}%` }}
          >
            {helpers.reduceNumLength(getRangeWidth(selectedRange.min))}
          </span>
          <span
            className={styles.value}
            style={{ right: `${100 - selectedRange.max * 100}%` }}
          >
            {helpers.reduceNumLength(getRangeWidth(selectedRange.max))}
          </span>
        </div>
        <div className={styles.input}>
          <input
            type="range"
            min={range.min}
            max={range.max}
            value={getRangeWidth(selectedRange.min)}
            onChange={async ({ target: { value } }) => {
              onRangeChange(Number(value), setSelectedRange);
            }}
          />
          <input
            type="range"
            min={range.min}
            max={range.max}
            value={getRangeWidth(selectedRange.max)}
            onChange={async ({ target: { value } }) => {
              onRangeChange(Number(value), setSelectedRange, true, false);
            }}
          />
        </div>
      </div>
      <div className={styles.setters}>
        <div className={styles.input}>{`₦${range.min}`}</div>
        <BsDashLg />
        <div className={styles.input}>{`₦${range.max}`}</div>
      </div>
    </div>
  );
}

export default Range;
