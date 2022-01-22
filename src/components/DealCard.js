import React from 'react';

function DealCard(props) {
  return <div className='relative 
    flex flex-col items-center justify-between gap-2 
    border-2 border-rose-800 rounded-xl
    p-4 text-gray-200 h-72 mb-4
    hover:cursor-pointer hover:bg-stone-800 hover:border-rose-600 hover:shadow-lg hover:shadow-rose-600/50'>
      <div className='absolute top-2 right-2 flex items-center justify-center text-center text-xs font-bold bg-rose-700 w-12 md:w-14 h-12 md:h-14 rounded-full overflow-clip'>
        {Math.round(Number(props.savings))}% off
      </div>
      <img src={props.thumb} className='mt-4 w-32 md:w-40'/>
      <p className='font-bold text-center text-sm overflow-hidden md:text-md md:overflow-visible'>{props.title}</p>
      <span className='text-sm'>Steam Review {props.steamRatingPercent}</span>
      <span>⭐⭐⭐⭐⭐</span>
      <div className='flex-none flex flex-row items-center justify-center space-x-2 px-2 md:px-4 bg-red-700 rounded-md min-w-min h-10'>
        <span className='text-sm line-through'>${props.normalPrice}</span>
        <span className='md:text-lg font-bold'>${props.salePrice}</span>
      </div>
  </div>;
}

export default DealCard;
