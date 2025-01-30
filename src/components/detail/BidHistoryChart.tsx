import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Define the type for our data points
type BidDataPoint = {
  time: string;
  value: number;
};

const BidHistoryChart = () => {
  // Sample data - you can replace this with real data
  const data: BidDataPoint[] = [
    { time: '12:00', value: 2.2 },
    { time: '13:00', value: 2.35 },
    { time: '14:00', value: 2.4 },
    { time: '15:00', value: 2.55 },
    { time: '16:00', value: 2.55 },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-700 text-white px-3 py-2 rounded-lg shadow-lg">
          <p className="text-sm font-medium">{payload[0].value} ETH</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-64 bg-transparent rounded-lg p-4">
      <div className="text-gray-600 text-[14px] font-[400] mb-4">
        History of bids (12 people are bidding)
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280' }}
            stroke="#E5E7EB"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280' }}
            stroke="#E5E7EB"
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0DD0B3"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: '#0DD0B3' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BidHistoryChart;