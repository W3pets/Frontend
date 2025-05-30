// Configuration for Revenue Overview Chart

import { Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
const { Text } = Typography;

const revenueData = [
  { label: 'Week 1', value: 350000 },
  { label: 'Week 2', value: 380000 },
  { label: 'Week 3', value: 400000 },
  { label: 'Week 4', value: 450000 },
];

// Data for Views Analytics
const viewsData = [
  { label: 'Mon', value: 900 },
  { label: 'Tue', value: 950 },
  { label: 'Wed', value: 980 },
  { label: 'Thu', value: 1020 },
  { label: 'Fri', value: 1050 },
];

export const revenueConfig = {
  data: revenueData,
  xField: 'label',
  yField: 'value',
  point: {
    size: 5,
    shape: 'circle',
  },
  tooltip: {
    formatter: (datum: any) => {
      return { name: 'Revenue', value: `₦${(datum.value / 1000).toFixed(0)}k` };
    },
  },
  yAxis: {
    label: {
      formatter: (v: string) => `₦${(Number(v) / 1000).toFixed(0)}k`,
    },
    grid: {
      line: {
        style: {
          stroke: '#eee',
          lineDash: [2, 2],
        },
      },
    },
  },
  xAxis: {
    grid: {
      line: {
        style: {
          stroke: '#eee',
          lineDash: [2, 2],
        },
      },
    },
  },
  smooth: true, // Makes the line smooth
  color: '#52c41a', // Green color
  // Add min/max for Y axis if needed to match the scale in the image
  // yAxis: { min: 0, max: 600000 },
};

// Configuration for Views Analytics Chart
export const viewsConfig = {
  data: viewsData,
  xField: 'label',
  yField: 'value',
  point: {
    size: 5,
    shape: 'circle',
  },
  tooltip: {
    formatter: (datum: any) => {
      return { name: 'Views', value: datum.value };
    },
  },
  yAxis: {
    label: {
      formatter: (v: string) => `${Number(v)}`,
    },
    grid: {
      line: {
        style: {
          stroke: '#eee',
          lineDash: [4, 4],
        },
      },
    },
  },
  xAxis: {
    grid: {
      line: {
        style: {
          stroke: '#eee',
          lineDash: [4, 4],
        },
      },
    },
  },
  smooth: true, // Makes the line smooth
  color: '#52c41a', // Green color
  // Add min/max for Y axis if needed to match the scale in the image
  // yAxis: { min: 0, max: 1400 },
};

export interface DataType {
  key: string; // Unique key for each row
  item: string;
  price: number; // Store as number for sorting/formatting
  date: string;
  buyer: string;
}

// Sample data for the table
export const table_data: DataType[] = [
  {
    key: '1',
    item: 'Persian Cat',
    price: 80000,
    date: '2023-11-29',
    buyer: 'Sarah Smith',
  },
  {
    key: '2',
    item: 'Brahama Chicken',
    price: 35000,
    date: '2023-11-28',
    buyer: 'Mike Johnson',
  },
  {
    key: '3',
    item: 'Golden Retriever Puppy',
    price: 120000,
    date: '2023-11-27',
    buyer: 'Jane Doe',
  },
];
