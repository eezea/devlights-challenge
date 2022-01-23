import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

function DealsSearchBar(props) {  
  const onSearchValueChange = (event) => {
    props.setSearchValue(event.target.value);
  };

  return <div className='
    relative flex items-center justify-center h-10 w-60
    bg-stone-100 border-2  border-red-700 rounded-full'>
      <input 
        className='border-none outline-none bg-transparent px-2'
        value={props.searchValue}
        onChange={onSearchValueChange}  />
      <div className='absolute right-0 bottom-0 flex items-center justify-center'>
            <SearchIcon className='text-rose-700 w-7 h-7'/>
      </div>
  </div>;
}

export default DealsSearchBar;
