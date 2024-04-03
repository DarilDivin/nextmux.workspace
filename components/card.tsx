import React from 'react'

type CardProps = {
    imgsrc: string;
    title: string;
    text: string;
};

const Card: React.FC<CardProps> = ({imgsrc, title, text}) => {
    return(
        <div className='w-[360px] h-[200px] flex flex-col px-6 py-4 border-[#d8d8d8] border-opacity-40 border-2 rounded-xl shadow-[0px_67px_103px_0px_rgba(0,0,0,0.05)]'>
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

export default Card