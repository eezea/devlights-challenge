import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function DealsSearchBar(props) {
  const onSearchValueChange = (event) => {
    props.setSearchValue(event.target.value);
  };

  return (
    <div
      className="
    flex flex-row items-center h-10 px-2
    bg-stone-100 border-2  border-indigo-700 rounded-full 
    focus-within:border-3 focus-within:border-rose-700 focus-within:shadow-lg focus-within:shadow-rose-500/50"
    >
      <input
        className="w-60 border-none outline-none bg-transparent px-2"
        value={props.searchValue}
        placeholder="Type here to search for a deal..."
        onChange={onSearchValueChange}
      />
      <div className="flex items-center justify-center">
        <SearchIcon className="text-indigo-600 w-7 h-7" />
      </div>
    </div>
  );
}

export default DealsSearchBar;
