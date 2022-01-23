import React from 'react';
import { ShoppingCartIcon } from "@heroicons/react/outline";

function DealsCart(props) {
  return <div className='flex flex-row items-center justify-center space-x-4 text-white'>
      <div className='relative'>
          <ShoppingCartIcon className='w-7 h-7'/>
          <div className="absolute -right-1 -bottom-1 flex items-center justify-center w-4 h-4 rounded-full bg-red-700">6</div>
      </div>
      <span>$758.99</span>
  </div>;
}

export default DealsCart;
