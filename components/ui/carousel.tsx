'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Carousel =  () => {
    return (
        <div className='container py-12'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{type: "bullets", clickable: true}}
                modules={[Navigation,Pagination]}
                className='h-[500px] w-full rounded-lg'
            >
                <SwiperSlide className='text-white'>
                    <div className='flex flex-col items-center'>
                        <div className='w-[360px] md:w-[700px] flex flex-col items-center'>
                            <div className=''>
                                <img src='/coma.svg'/>
                            </div>
                            <div className='mb-8'>
                                <p className="font-poppins font-normal text-2xl text-center">
                                    Nous souhaitons sérieusement fournir notre meilleur service à tous les clients
                                    que nous aidons. La satisfaction des clients est notre priorité numéro un.
                                </p>
                            </div>
                            <div>
                                <p className='font-poppins font-medium text-xl'>AKOGO Abdoul Malik</p>
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
                                <p className="font-poppins font-normal text-2xl text-center">
                                    Nous souhaitons sérieusement fournir notre meilleur service à tous les clients
                                    que nous aidons. La satisfaction des clients est notre priorité numéro un.
                                </p>
                            </div>
                            <div>
                                <p className='font-poppins font-medium text-xl'>AKOGO Abdoul Malik</p>
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
                                <p className="font-poppins font-normal text-2xl text-center">
                                    Nous souhaitons sérieusement fournir notre meilleur service à tous les clients
                                    que nous aidons. La satisfaction des clients est notre priorité numéro un.
                                </p>
                            </div>
                            <div>
                                <p className='font-poppins font-medium text-xl'>AKOGO Abdoul Malik</p>
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