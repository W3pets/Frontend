import { Typography, Space } from 'antd';
import Button from '../../Button/Button';
import CheckedList from '../../CheckedList/CheckedList';
import styles from './styles.module.scss';
import Card from '../Card';

const { Title, Text } = Typography;

type PriceCardProps = {
  title: string;
  price: string;
  pricePeriod: string;
  features: string[];
  buttonText: string;
  isRecommended?: boolean; // Optional prop for the "Recommended" tag
};

function PlanCard({
  title,
  price,
  pricePeriod,
  features,
  buttonText,
  isRecommended = false,
}: PriceCardProps) {
  return (
    <Card className={styles.card}>
      {isRecommended && <div className={styles.recommend}>Recommended</div>}

      <div className={styles.title}>{title}</div>
      <div className={styles.price}> {price}</div>
      <div className={styles.period}> {pricePeriod}</div>

      <CheckedList items={features} />

      <Button className={styles.btn} isOutline={!isRecommended}>
        {buttonText}
      </Button>
    </Card>
  );
}

export default PlanCard;
