import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactElement;
  color: string;
}

const DashboardStatCard: React.FC<DashboardCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className={`bg-white p-4 rounded-md border-gray-100 border-2 flex items-center justify-between mb-4`}>
      <div className="flex items-center">
        <div className={`mr-4 p-3 rounded-full bg-${color}-100 text-${color}-500`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatCard;
