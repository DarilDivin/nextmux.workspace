// Home.tsx

import { Activity, ArrowUpCircle, Users } from 'lucide-react';
import React from 'react';

import Blog from '@/components/Blog';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import DashboardStatCard from '@/components/home/DashboardStatCard';
import LandingLayout from '@/components/layouts/LandingLayout';

const Home: React.FC = () => {
  return (
    <LandingLayout>
      <main className="flex flex-col items-center justify-between p-24 min-h-screen" style={{
        backgroundImage: 'url("https://nextmux.net/assets/images/bg.png")'
      }}>
        {/* Contenu du composant */}
      </main>
    </LandingLayout>
  );
};

export default Home;
