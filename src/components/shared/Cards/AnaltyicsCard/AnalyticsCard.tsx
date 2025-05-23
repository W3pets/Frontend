import React from 'react';

type Props = {
  title: {
    title?: string;
    icon?: React.ReactNode;
  };
  actions?: {
    title?: string;
    icon?: React.ReactNode;
  };
  description?: {
    title: string;
    value: string;
  };
  metric?: {
    title: string;
    value: string;
    unit: string;
  };
};

function AnalyticsCard() {
  return <div>AnalyticsCard</div>;
}

export default AnalyticsCard;
