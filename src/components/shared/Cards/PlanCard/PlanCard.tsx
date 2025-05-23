import React from 'react';

type Props = {
  isRecommended?: boolean;
  title: string;
  description: string;
  link?: string;
  onClick?: () => void;
  price: string;
  features: string[];
};

function PlanCard({}: Props) {
  return <div>PlanCard</div>;
}

export default PlanCard;
