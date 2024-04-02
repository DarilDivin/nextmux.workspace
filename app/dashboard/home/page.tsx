// HomeDashboard.tsx

import { Activity, ArrowUpCircle, Users } from 'lucide-react';
import React from 'react';

import Blog from '@/components/Blog';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import DashboardStatCard from '@/components/home/DashboardStatCard';

const HomeDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className='min-h-full py-4 lg:py-8'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashboardStatCard title="Utilisateurs" value={1000} icon={<Users />} color="blue" />
          <DashboardStatCard title="Revenus" value="$50,000" icon={<ArrowUpCircle />} color="green" />
          <DashboardStatCard title="Utilisateurs Actifs" value={500} icon={<Activity />} color="orange" />
        </div>

        <div className="flex items-center justify-between p-4  border-gray-100 border-2 rounded-md mb-4 relative lg:mt-0 mt-4">
          <Blog />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HomeDashboard;
