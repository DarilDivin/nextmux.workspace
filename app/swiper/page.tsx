'use client'
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
// import 'swiper/css';
import {useEffect, useState} from "react";

export default () => {

    const [swiperLoaded, setSwiperLoaded] = useState(false);

    useEffect(() => {
        const loadSwiperModules = async () => {
            // Vérifie si nous sommes dans un environnement de navigateur
            if (typeof window !== 'undefined') {
                // Charge dynamiquement Swiper
                const { Swiper, Navigation, Pagination } = await import('swiper');

                // Initialise Swiper avec les modules chargés
                Swiper.use([Navigation, Pagination]);

                // Marque Swiper comme chargé
                setSwiperLoaded(true);
            }
        };

        loadSwiperModules();

        // Nettoyage à la désactivation du composant
        return () => {
            // Vous pouvez nettoyer les ressources ici si nécessaire
        };
    }, []);

    return (
        <div className='container py-12'>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{type: "fraction"}}
                modules={[Navigation, Pagination]}
                className='h-96 w-full rounded-lg bg-blue-400'
            >
                <SwiperSlide className='bg-blue-100'>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                ...
            </Swiper>
        </div>
    );
}