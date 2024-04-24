'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';



const Carousel =  () => {

    const [showNavigation, setShowNavigation] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowNavigation(window.innerWidth >= 600);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className='container py-12'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={showNavigation}
                pagination={{type: "bullets", clickable: true}}
                modules={[Navigation,Pagination]}
                className='h-[500px] w-[300px] sm:w-[700px] xl:w-full rounded-lg'
            >
                <SwiperSlide className='text-white'>
                    <div className='flex flex-col items-center'>
                        <div className='w-[360px] md:w-[700px] flex flex-col items-center'>
                            <div className=''>
                                <img src='/coma.svg'/>
                            </div>
                            <div className='mb-8'>
                                <p className="font-poppins sm:font-normal w-[300px] sm:w-[500px] p-8 sm:p-0 text-base sm:text-2xl text-center">
                                    Nous souhaitons sérieusement fournir notre meilleur service à tous les clients
                                    que nous aidons. La satisfaction des clients est notre priorité numéro un.
                                </p>
                            </div>
                            <div>
                                <p className='font-poppins text-base text-center font-normal sm:font-medium sm:text-xl'>AKOGO Abdoul Malik</p>
                                <p className='font-poppins font-bold text-lg w-[200px] text-center'>Project Manager et Administrative chief</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='text-white'>
                    <div className='flex flex-col items-center'>
                        <div className='w-[360px] md:w-[700px] flex flex-col items-center'>
                            <div className=''>
                                <img src='/coma.svg'/>
                            </div>
                            <div className='mb-8'>
                                <p className="font-poppins sm:font-normal w-[300px] sm:w-[500px] p-8 sm:p-0 text-base sm:text-2xl text-center">
                                    Nous souhaitons sérieusement fournir notre meilleur service à tous les clients
                                    que nous aidons. La satisfaction des clients est notre priorité numéro un.
                                </p>
                            </div>
                            <div>
                                <p className='font-poppins text-base text-center font-normal sm:font-medium sm:text-xl'>AKOGO Abdoul Malik</p>
                                <p className='font-poppins font-bold text-lg w-[200px] text-center'>Project Manager et Administrative chief</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='text-white'>
                    <div className='flex flex-col items-center'>
                        <div className='w-[360px] md:w-[700px] flex flex-col items-center'>
                            <div className=''>
                                <img src='/coma.svg'/>
                            </div>
                            <div className='mb-8'>
                                <p className="font-poppins sm:font-normal w-[300px] sm:w-[500px] p-8 sm:p-0 text-base sm:text-2xl text-center">
                                    Nous souhaitons sérieusement fournir notre meilleur service à tous les clients
                                    que nous aidons. La satisfaction des clients est notre priorité numéro un.
                                </p>
                            </div>
                            <div>
                                <p className='font-poppins text-base text-center font-normal sm:font-medium sm:text-xl'>AKOGO Abdoul Malik</p>
                                <p className='font-poppins font-bold text-lg w-[200px] text-center'>Project Manager et Administrative chief</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel