import React from 'react';

function DealsShowcase(props) {
  return <div className='max-w-screen-xl mx-auto my-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4 items-center'>
      {props.children}
  </div>;
}

export default DealsShowcase;
