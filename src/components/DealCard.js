import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import StarRating from "./StarRating";

function DealCard(props) {
  return (
    <div
      onClick={props.onSelect}
      className={`relative group 
    flex flex-col items-center justify-between gap-2 
    border-2 border-rose-800 rounded-xl
    p-4 text-gray-200 select-none h-72 mb-4
    hover:cursor-pointer hover:bg-stone-800 
    hover:border-rose-600 hover:shadow-lg hover:shadow-rose-600/50 
    transition-all ease-in duration-200
    ${
      props.isSelected
        ? "bg-stone-800 border-indigo-600 shadow-lg shadow-indigo-600/50"
        : ""
    }`}
    >
      <div
        className={`absolute top-2 right-2 flex items-center justify-center 
        text-center text-xs font-bold bg-rose-700 
        w-12 md:w-14 h-12 md:h-14 rounded-full overflow-clip
        group-hover:shadow-md group-hover:shadow-rose-500/50 group-hover:scale-105 
        transition-all ease-in duration-200
        ${props.isSelected ? "bg-green-700 shadow-md shadow-lime-500" : ""}`}
      >
        {props.isSelected ? (
          <BadgeCheckIcon className="w-12" />
        ) : (
          `${Math.round(Number(props.savings))}% off`
        )}
      </div>
      <img
        src={props.thumb}
        alt={`${props.title} deal card`}
        className="mt-4 w-32 md:w-40"
      />
      <p className="font-bold text-center text-sm overflow-hidden md:text-md md:overflow-visible">
        {props.title}
      </p>
      <div className="flex flex-col items-center">
        <span className="text-sm">Steam Review</span>
        {<StarRating starsFilled={props.starsFilled} />}
      </div>
      <div
        className={`flex-none flex flex-row items-center justify-center space-x-2 px-2 md:px-4 w-32 md:w-36
        bg-gradient-to-r from-indigo-700 via-purple-700 to-rose-700 rounded-md min-w-min h-10
        group-hover:border group-hover:border-rose-300 group-hover:shadow-sm group-hover:shadow-indigo-500/50
        ease-in duration-200
        ${
          props.isSelected
            ? "border border-indigo-300 bg-gradient-to-r from-emerald-500 via-green-700 to-lime-500"
            : ""
        }`}
      >
        <span
          className={`text-sm line-through ${props.isSelected ? "hidden" : ""}`}
        >
          ${props.normalPrice}
        </span>
        <span className="md:text-lg font-bold md:group-hover:text-xl">
          ${props.salePrice}
        </span>
      </div>
    </div>
  );
}

export default DealCard;
