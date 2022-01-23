import React from "react";

function StarRating(props) {
  return (
    <div className="flex flex-row items-center justify-center text-lg">
      <div className="star-rating">
        {[...Array(props.starsFilled)].map((star, index) => {
          return (
            <span key={index} className="text-yellow-500">
              &#9733;
            </span>
          );
        })}
      </div>
      <div className="star-rating">
        {[...Array(5 - props.starsFilled)].map((star, index) => {
          return (
            <span key={index} className="text-stone-500 opacity-25">
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
