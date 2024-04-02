// Home.tsx

import { Activity, ArrowUpCircle, Users } from 'lucide-react';
import React from 'react';

import Blog from '@/components/Blog';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import DashboardStatCard from '@/components/home/DashboardStatCard';
import LandingLayout from '@/components/layouts/LandingLayout';

const Home: React.FC = ({ children, }: {children: React.ReactNode}) => {
  return (
    <LandingLayout>
      <main className="flex flex-col items-center justify-between  min-h-screen"
            // style={{ backgroundImage: 'url("https://nextmux.net/assets/images/bg.png")' }}
      >

        <div className='flex min-w-full p-24 h-screen'
             style={{ backgroundImage: 'url("https://nextmux.net/assets/images/bg.png")' }}
        >
            <div className=' flex flex-col h-full w-6/12 items-start justify-center'>
                <h1 className="font-extrabold text-6xl font-poppins mb-12">
                    <span className='text-custom2'>Transformez les <br/> méthodes de travail de <br/> vos équipes</span>
                    <span className='text-custom'> avec next <br/> business workspace.</span>
                </h1>
                <p className=' font-normal font-inter text-2xl mb-12 text-[#7E7F83]'>
                    Simplifiez la gestion de projets, renforcez la <br/> collaboration et optimisez les ressources humaines <br/> avec notre application d'entreprise tout-en-un.
                </p>
                <button className='px-12 py-2 border-2 rounded-xl font-inter font-bold border-custom2 text-custom2 hover:bg-custom2 hover:text-white transition ease-out'>Get Started</button>
            </div>
            <div className='flex justify-center items-end h-full w-6/12'>
                <div className='w-[800px] aspect-[4/3]'>
                    <img className='object-cover w-full h-full' src="/etudeEnLigne1.svg" alt="image"/>
                </div>
            </div>
        </div>

      </main>
    </LandingLayout>
  );
};

export default Home;
