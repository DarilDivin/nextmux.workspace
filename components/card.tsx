import React from 'react'

type CardProps = {
    imgsrc: string;
    title: string;
    text: string;
};

export const Card: React.FC<CardProps> = ({imgsrc, title, text}) => {
    return(
        <div className='w-[360px] h-[200px] flex flex-col px-6 py-4 border-[#d8d8d8] m-8 border-opacity-40 border-2 rounded-xl shadow-[0px_67px_103px_0px_rgba(0,0,0,0.05)]'>
            <div className='p-1 flex flex-row gap-x-2 items-center'>
                <div className='w-[50px] aspect-square bg-gray-300 flex items-center justify-center rounded-full'>
                    <img src={imgsrc} alt='image' className='object-contain w-6'/>
                </div>
                <h3 className='justify-self-start font-inter font-bold text-lg'>{title}</h3>
            </div>
            <div className='flex gap-x-2'>
                <p className='font-inter font-normal text-base opacity-70'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export const Card2: React.FC<CardProps> = ({imgsrc, title, text}) => {
    return(
        <div className='w-[270px] min-h-[200px] flex flex-row px-2 py-4 border-custom2 border-2 mb-8'>
            <div className='p-1 flex flex-row gap-x-2 items-start'>
                <div className='w-[50px] aspect-square flex items-center justify-center rounded-full'>
                    <img src={imgsrc} alt='image' className='object-contain w-10'/>
                </div>
            </div>
            <div className='flex flex-col gap-x-2'>
                <h3 className='justify-self-start font-inter font-bold text-lg mb-2'>{title}</h3>

                <p className='font-inter font-normal text-sm opacity-70'>
                    {text}
                </p>
            </div>
        </div>
    )
}

// export default {Card, Card2}