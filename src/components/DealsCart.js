import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

function DealsCart(props) {
  return (
    <div className="flex flex-row items-center justify-center space-x-4 text-white">
      <div className="relative">
        <ShoppingCartIcon className="w-7 h-7" />
        <div
          className={`
            ${
              props.dealsCounter === 0 ? "hidden" : ""
            } absolute -right-1 -bottom-1 flex items-center 
            justify-center w-4 h-4 rounded-full bg-red-700 text-xs
            shadow-md shadow-red-600/50`}
        >
          {props.dealsCounter}
        </div>
      </div>
      <span className="w-16 text-lg font-bold text-right">
        $ {props.dealsTotalSales}
      </span>
    </div>
  );
}

export default DealsCart;
