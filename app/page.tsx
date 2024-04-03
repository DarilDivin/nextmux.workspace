// Home.tsx

// import { Activity, ArrowUpCircle, Users } from 'lucide-react';
import React from 'react';

// import Blog from '@/components/Blog';
// import DashboardLayout from '@/components/layouts/DashboardLayout';
// import DashboardStatCard from '@/components/home/DashboardStatCard';
import LandingLayout from '@/components/layouts/LandingLayout';
import {Button, buttonVariants} from "@/components/ui/button";
import Card from "@/components/card";

const Home: React.FC = () => {
  return (
    <LandingLayout>
      <main className="flex flex-col items-center justify-between  min-h-screen"
            // style={{ backgroundImage: 'url("https://nextmux.net/assets/images/bg.png")' }}
      >

        <div className='flex min-w-full p-24 h-screen' style={{ backgroundImage: 'url("https://nextmux.net/assets/images/bg.png")' }}>

            <div className=' flex flex-col h-full w-6/12 items-start justify-center'>

                <h1 className="font-extrabold text-6xl font-poppins mb-12">
                    <span className='text-custom2'>Transformez les <br/> méthodes de travail de <br/> vos équipes</span>
                    <span className='text-custom'> avec next <br/> business workspace.</span>
                </h1>

                <p className=' font-normal font-inter text-2xl mb-12 text-[#7E7F83]'>
                    Simplifiez la gestion de projets, renforcez la <br/> collaboration et optimisez les ressources humaines <br/> avec notre application d'entreprise tout-en-un.
                </p>

                <button className='px-12 py-2 border-2 rounded-xl font-inter font-bold border-custom2 text-custom2 hover:bg-custom2 hover:text-white transition ease-out'>Get Started</button>
                {/*<Button className='bg-white px-12 py-2 border-2 rounded-xl font-inter font-bold border-custom2 text-custom2 hover:bg-custom2 hover:text-white transition ease-out'>Get Started</Button>*/}
            </div>
            <div className='flex justify-center items-end h-full w-6/12'>

                <div className='w-[800px] aspect-[4/3]'>
                    <img className='object-cover w-full h-full' src="/etudeEnLigne1.svg" alt="image"/>
                </div>

            </div>

        </div>
        <div className='min-w-full px-24 py-12 h-auto'>
            <h1 className="font-medium text-6xl font-poppins mb-8 text-custom2 tracking-tighter">Pourquoi nous choisir</h1>
            <p className="font-normal font-inter text-lg w-[750px] mb-12 text-[#7e7f83]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sapien, est felis, sagittis viverra nulla mattis scelerisque.
                Eget cras integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
            </p>
            <div className='py-12 px-16 flex flex-row justify-evenly'>
                <Card
                    imgsrc='/kisspng-computer-icons-productivity-business-development-business.svg'
                    title={'Augmenter votre productivité'}
                    text={'Retrouver et Sécurise votre nom de domaine dès à présent pour lancer votre entreprise.'}
                />
                <Card
                    imgsrc='/get-paid-stock.svg'
                    title={'Augmenter votre productivité'}
                    text={'Retrouver et Sécurise votre nom de domaine dès à présent pour lancer votre entreprise.'}
                />
                <Card
                    imgsrc='/team-building-social-group-organization-empowerment.svg'
                    title={'Augmenter votre productivité'}
                    text={'Retrouver et Sécurise votre nom de domaine dès à présent pour lancer votre entreprise.'}
                />
            </div>
        </div>
        <div className='flex flex-row min-w-full px-24 py-14 h-auto bg-[#24292d] text-white'>
            <div className='w-1/2 flex flex-col justify-between items-center'>
                <div className='w-full '>
                    <h1 className='font-poppins font-bold text-4xl mb-6'>Nos Meilleurs Fonctionnalités</h1>
                    <p className='font-inter font-medium w-[650px] text-lg '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sapien, est felis, sagittis viverra nulla mattis scelerisque.
                        Eget cras integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                    </p>
                </div>
                <div className='flex w-full'>
                    <button
                        className='px-12 py-2 border-2 rounded-xl font-inter font-bold border-custom2 text-white mt-12 mb-4 hover:bg-custom2 transition ease-out'>
                        Get Started
                    </button>

                </div>
            </div>
            <div className='w-1/2 h-full flex flex-row gap-12'>
                <div className='flex flex-col gap-8 pb-12'>
                    <div className='flex flex-col border-2 border-custom2 rounded-2xl w-[300px] p-4'>
                        <div className='h-[80px] '>
                            <img src='/echange-de-fichiers.svg' className='object-contain h-full'/>
                        </div>
                        <h3 className='font-poppins font-bold text-xl mb-4'>Echange de Fichiers</h3>
                        <p className='font-inter font-normal opacity-90 text-lg leading-[160%]'>
                            Possibilité de partager divers types de fichiers, facilitant la collaboration
                            sur des documents et lavisualisation de médias.
                        </p>
                    </div>
                    <div className='flex flex-col border-2 border-custom2 rounded-2xl w-[300px] p-4'>
                        <div className='h-[80px] '>
                            <img src='/messagerie-integree.svg' className='object-contain h-full'/>
                        </div>
                        <h3 className='font-poppins font-bold text-xl mb-4'>Messagerie Intégrée</h3>
                        <p className='font-inter font-normal opacity-90 text-lg leading-[160%]'>
                            Les utilisateurs pourront communiquer facilement,
                            partager des messages et discuter en temps réel au sein de
                            l'application.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-8 pt-12'>
                    <div className='flex flex-col border-2 border-custom2 rounded-2xl w-[300px] p-4'>
                        <div className='h-[80px] '>
                            <img src='/planification-de-taches.svg' className='object-contain h-full'/>
                        </div>
                        <h3 className='font-poppins font-bold text-xl mb-4'>Planification des taches</h3>
                        <p className='font-inter font-normal opacity-90 text-lg leading-[160%]'>
                            Intégration d'un outil de planification des tâches et d'un agenda pour une
                            gestion efficace du temps.
                        </p>
                    </div>
                    <div className='flex flex-col border-2 border-custom2 rounded-2xl w-[300px] p-4'>
                        <div className='h-[80px] '>
                            <img src='/centralisation-des-activites.svg' className='object-contain h-full'/>
                        </div>
                        <h3 className='font-poppins font-bold text-xl mb-4'>Centralisation des activités</h3>
                        <p className='font-inter font-normal opacity-90 text-lg leading-[160%]'>
                            Tout sera regroupé au même endroit, réduisant la nécessité d'utiliser
                            plusieurs applications et minimisant les distractions.
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </main>
    </LandingLayout>
  );
};

export default Home;
