import React from 'react';

function DealsSearchBar(props) {  
  const onSearchValueChange = (event) => {
    props.setSearchValue(event.target.value);
  };

  return <div>
      <input 
        value={props.searchValue}
        onChange={onSearchValueChange}  />
  </div>;
}

export default DealsSearchBar;
