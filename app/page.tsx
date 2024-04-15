"use client"
// Home.tsx
import React from 'react';

import LandingLayout from '@/components/layouts/LandingLayout';
import {Card, Card2} from "@/components/ui/card";
import Carousel from "@/components/ui/carousel";
import {Accordion, AccordionItem, AccordionContent, AccordionTrigger} from '@/components/ui/accordion';

const Home: React.FC = () => {

    const faq = [
        {
            "id": 1,
            "question": "Lorem ipsum dolor sit amet, consetetur ?",
            "answer": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
        },
        {
            "id": 2,
            "question": "Lorem ipsum dolor sit amet, consetetur ?",
            "answer": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
        },
        {
            "id": 3,
            "question": "Lorem ipsum dolor sit amet, consetetur ?",
            "answer": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
        },
    ];

    return (
    <LandingLayout>
      <main className="flex flex-col items-center justify-between  min-h-screen">
        <div 
            className='flex min-w-full p-8 sm:p-24 h-auto sm:h-screen' 
            style={{ backgroundImage: 'url("https://nextmux.net/assets/images/bg.png")', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"  }}
        >

            <div className='flex flex-col h-full w-full sm:w-6/12 items-center sm:items-start sm:justify-center'>

                <h1 className="font-bold text-4xl text-center sm:text-start sm:font-extrabold sm:text-6xl font-poppins mb-12 sm:leading-[4rem]">
                    <span className='text-custom2'>Transformez les <br/> méthodes de travail de <br/> vos équipes</span>
                    <span className='text-custom'> avec next <br/> business workspace.</span>
                </h1>

                <p className='text-center sm:text-start font-normal font-inter text-xl sm:text-2xl mb-12 text-[#7E7F83]'>
                    Simplifiez la gestion de projets, renforcez la <br/> collaboration et optimisez les ressources humaines <br/> avec notre application d'entreprise tout-en-un.
                </p>

                <button className='px-12 py-2 border-2 rounded-[7px] font-inter font-bold border-custom2 text-custom2 hover:bg-custom2 hover:text-white transition ease-out'>Get Started</button>
            </div>
            <div className='hidden  md:flex justify-center items-end h-full w-6/12'>

                <div className='w-[800px] aspect-[4/3]'>
                    <img className='object-cover w-full h-full' src="/etudeEnLigne1.svg" alt="image"/>
                </div>

            </div>

        </div>
        <div className='flex flex-col items-center min-w-full p-8 sm:px-24 py-12 h-auto'>
            <h1 className="font-medium text-4xl sm:text-6xl sm:self-start font-poppins mb-8 text-custom2 tracking-tighter">Pourquoi nous choisir</h1>
            <p className="text-center sm:text-start font-normal sm:self-start font-inter text-lg w-[360px] md:w-[750px] mb-12 text-[#7e7f83]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sapien, est felis, sagittis viverra nulla mattis scelerisque.
                Eget cras integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
            </p>
            <div className='py-12 px-16 flex flex-row flex-wrap justify-evenly'>
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
        <div className='flex flex-col sm:flex-row flex-wrap min-w-full p-8 md:px-24 md:py-14 h-auto bg-[#24292d] text-white'>
            <div className=' sm:w-1/2 flex flex-col justify-between items-center'>
                <div className='w-full flex flex-col items-center sm:items-start'>
                    <h1 className='font-poppins font-bold text-4xl text-center sm:text-start mb-6'>Nos Meilleurs Fonctionnalités</h1>
                    <p className='font-inter font-medium w-[80%] sm:w-[650px] text-lg text-center sm:text-start '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sapien, est felis, sagittis viverra nulla mattis scelerisque.
                        Eget cras integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                    </p>
                </div>
                <div className='flex w-full justify-center sm:justify-start'>
                    <button
                        className='px-12 py-2 border-2 rounded-[7px] font-inter font-bold border-custom2 text-white mt-12 mb-4 hover:bg-custom2 transition ease-out'>
                        Commencer maintenant
                    </button>

                </div>
            </div>
            <div className='w-full sm:w-1/2 h-full flex flex-row gap-12 justify-center flex-wrap mt-8 sm:mt-0'>
                <div className='flex flex-col gap-8 pb-12'>
                    <div className='flex flex-col border-2 border-custom2 rounded-2xl w-[300px] p-4'>
                        <div className='h-[80px] '>
                            <img src='/echange-de-fichiers.svg' alt='image-echange-de-fichier' className='object-contain h-full'/>
                        </div>
                        <h3 className='font-poppins font-bold text-xl mb-4'>Echange de Fichiers</h3>
                        <p className='font-inter font-normal opacity-90 text-lg leading-[160%]'>
                            Possibilité de partager divers types de fichiers, facilitant la collaboration
                            sur des documents et lavisualisation de médias.
                        </p>
                    </div>
                    <div className='flex flex-col border-2 border-custom2 rounded-2xl w-[300px] p-4'>
                        <div className='h-[80px] '>
                            <img src='/messagerie-integree.svg' alt="image-messagerie-intégrée" className='object-contain h-full'/>
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
                            <img src='/planification-de-taches.svg' alt="image-planification-des-taches" className='object-contain h-full'/>
                        </div>
                        <h3 className='font-poppins font-bold text-xl mb-4'>Planification des taches</h3>
                        <p className='font-inter font-normal opacity-90 text-lg leading-[160%]'>
                            Intégration d'un outil de planification des tâches et d'un agenda pour une
                            gestion efficace du temps.
                        </p>
                    </div>
                    <div className='flex flex-col border-2 border-custom2 rounded-2xl w-[300px] p-4'>
                        <div className='h-[80px] '>
                            <img src='/centralisation-des-activites.svg' alt="image-centralisation-des-activités" className='object-contain h-full'/>
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
        <div className='flex flex-wrap sm:flex-row-reverse min-w-full p-8 md:px-24 md:py-14 h-auto'>
            <div className='sm:w-1/2 flex flex-col justify-between '>
                <div className='w-full flex flex-col items-center'>
                    <h1 className='font-poppins font-bold text-4xl mb-6 w-[90%] sm:w-[650px] text-center sm:text-end text-custom2'>Avantages de notre solution pour votre entreprise</h1>

                    <p className='font-inter font-medium w-[80%] sm:w-[650px] text-lg mb-8'>
                        <span className='font-bold'>Rapports et Analyses</span> : Des outils de génération de rapports personnalisables pour
                        évaluer les performances du projet, la charge de travail de l'équipe, et d'autres métriques importantes.
                    </p>

                    <p className='font-inter font-medium w-[80%] sm:w-[650px] text-lg mb-8'>
                        <span className='font-bold'>Rapports et Analyses</span> : Des outils de génération de rapports personnalisables pour
                        évaluer les performances du projet, la charge de travail de l'équipe, et d'autres métriques importantes.
                    </p>

                    <p className='font-inter font-medium w-[80%] sm:w-[650px] text-lg mb-8'>
                        <span className='font-bold'>Rapports et Analyses</span> : Des outils de génération de rapports personnalisables pour
                        évaluer les performances du projet, la charge de travail de l'équipe, et d'autres métriques importantes.
                    </p>

                    <p className='font-inter font-medium w-[80%] sm:w-[650px] text-lg mb-8'>
                        <span className='font-bold'>Rapports et Analyses</span> : Des outils de génération de rapports personnalisables pour
                        évaluer les performances du projet, la charge de travail de l'équipe, et d'autres métriques importantes.
                    </p>

                </div>
                <div className='flex w-full justify-center'>
                <div className='flex w-full justify-center sm:justify-start sm:w-[650px]'>
                        <button
                            className='px-12 py-2 border-2 rounded-[7px] font-inter font-bold border-custom2 text-custom2 hover:text-white mt-12 mb-4 hover:bg-custom2 transition ease-out'>
                            Commencer maintenant
                        </button>
                    </div>

                </div>
            </div>
            <div className='w-full sm:w-1/2 h-full flex flex-row flex-wrap justify-center mt-8 sm:mt-0 gap-12'>
                <div className='flex flex-col gap-8 pb-12'>
                    <div className='flex flex-col border-2 border-custom2 rounded-2xl w-[300px] p-4'>
                        <div className='h-[80px] '>
                            <img src='/multiplateforme.svg' alt='image-echange-de-fichier' className='object-contain h-full'/>
                        </div>
                        <h3 className='font-poppins font-bold text-xl mb-4'>Multiplateforme</h3>
                        <p className='font-inter font-normal opacity-90 text-lg leading-[160%]'>
                            Assurer un accès facile depuis différents appareils (ordinateurs,
                            smartphones, tablettes).
                        </p>
                    </div>
                    <div className='flex flex-col border-2 border-custom2 rounded-2xl w-[300px] p-4'>
                        <div className='h-[80px] '>
                            <img src='/Collaboration.svg' alt="image-messagerie-intégrée" className='object-contain h-full'/>
                        </div>
                        <h3 className='font-poppins font-bold text-xl mb-4'>Collaboration à Distance</h3>
                        <p className='font-inter font-normal opacity-90 text-lg leading-[160%]'>
                            Avec de plus en plus d'entreprises adoptant des modèles de travail àdistance, les plateformes de gestion de projet.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-8 pt-12'>
                    <div className='flex flex-col border-2 border-custom2 rounded-2xl w-[300px] p-4'>
                        <div className='h-[80px] '>
                            <img src='/planification-de-taches.svg' alt="image-planification-des-taches" className='object-contain h-full'/>
                        </div>
                        <h3 className='font-poppins font-bold text-xl mb-4'>Sécurité</h3>
                        <p className='font-inter font-normal opacity-90 text-lg leading-[160%]'>
                            Nous assurons la sécurite  de notre plateform en utilisant le
                            chiffrement de données et une solide protection contre les virus et autres menaces en ligne.
                        </p>
                    </div>
                    <div className='flex flex-col border-2 border-custom2 rounded-2xl w-[300px] p-4'>
                        <div className='h-[80px] '>
                            <img src='/centralisation-des-activites.svg' alt="image-centralisation-des-activités" className='object-contain h-full'/>
                        </div>
                        <h3 className='font-poppins font-bold text-xl mb-4'>Intégration avec d’autres outils</h3>
                        <p className='font-inter font-normal opacity-90 text-lg leading-[160%]'>
                            Possibilité de connecter l'application à
                            d'autres outils de travail couramment utilisés.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-w-full px-8 md:px-24 py-12 bg-[#24292d] text-white'>
            <div className='w-full sm:w-[580px]'>
                <h1 className='font-extrabold font-poppins text-center sm:text-start text-4xl mb-8'>Avantages de notre solution pour vos clients</h1>
                <p className='font-poppins font-normal text-lg opacity-90 mb-8 text-center sm:text-start'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam
                </p>
            </div>
            <div className='w-full  flex flex-row justify-evenly gap-4 flex-wrap py-12'>
                <Card2
                    imgsrc='/augmenter-productivite.svg'
                    title={'Augmenter votre productivité'}
                    text={'Retrouver et Sécurise votre nom de domaine dès à présent pour lancer votre entreprise.'}
                />
                <Card2
                    imgsrc='/organisation-personnelle.svg'
                    title={'Organisation personnelle'}
                    text={'Retrouver et Sécurise votre nom de domaine dès à présent pour lancer votre entreprise.'}
                />
                <Card2
                    imgsrc='/apprentissage-dev-perso.svg'
                    title={'Apprentissage et développement personnel'}
                    text={'Retrouver et Sécurise votre nom de domaine dès à présent pour lancer votre entreprise.'}
                />
                <Card2
                    imgsrc='/rappels-automatise.svg'
                    title={'Rappels Automatisés'}
                    text={'Des outils de génération de rapports personnalisables pour évaluer les performances.'}
                />
            </div>
        </div>
        <div className='min-w-full px-24 py-12 bg-custom '>
            <Carousel></Carousel>
        </div>
        <div 
            className='flex min-w-full p-8 sm:p-24 h-auto md:h-screen' 
            style={{ backgroundImage: 'url("https://nextmux.net/assets/images/bg.png")', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"  }}
        >

            <div className='flex flex-col h-full w-full sm:w-6/12 items-center sm:items-start justify-start'>

                <h1 className="font-bold text-4xl font-poppins mb-12 text-center sm:text-start">
                    <span className='text-custom2 text-center sm:text-start'>Questions fréquentes posées</span>
                </h1>

                <div className="flex justify-center">
                    <Accordion
                        className="w-full sm:w-[550px] rounded-2xl"
                        type="single"
                        defaultValue="item-1"
                        collapsible
                        orientation="horizontal"
                    >

                        {faq.map((q) => (
                            <AccordionItem value={'item-' + q.id} className='p-4 bg-white rounded-2xl border-2 border-[#707070] border-opacity-50 mb-4'>
                                <AccordionTrigger className='font-poppins font-medium text-lg'>Q{q.id}. {q.question}</AccordionTrigger>
                                <AccordionContent className='font-poppins font-normal text-sm text-[#696969]'>{q.answer}</AccordionContent>
                            </AccordionItem>
                        ))}

                    </Accordion>
                </div>

            </div>
            <div className='hidden sm:flex justify-center items-end h-full w-6/12'>

                <div className='w-[800px] aspect-[4/3]'>
                    <img className='object-cover w-full h-full' src="/faq.svg" alt="image"/>
                </div>

            </div>

        </div>
      </main>
    </LandingLayout>
  );
};

export default Home;
