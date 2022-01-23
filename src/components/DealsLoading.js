import React from "react";

function DealsLoading() {
  return (
    <div
      className="relative max-w-screen-xl mx-auto my-5 px-4 xl:p-0 grid 
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
        gap-3 md:gap-4 items-center"
    >
      {[...Array(60)].map((card, index) => {
        return (
          <div
            key={index}
            className={`relative animate-pulse
                    flex flex-col items-center justify-around gap-2 
                    border-2 border-stone-600 rounded-xl
                    p-4 text-gray-200 select-none h-72 mb-4`}
          >
            <div
              className={`absolute top-2 right-2 flex items-center justify-center 
                text-center text-xs font-bold bg-stone-600 
                w-12 md:w-14 h-12 md:h-14 rounded-full overflow-clip`}
            ></div>
            <div className=" bg-stone-700 bg-stone-700mt-4 w-32 h-12 md:w-40 md:h-14"></div>
            <div className=" bg-stone-600 bg-stone-700mt-4 w-32 h-6 md:w-40 md:h-8"></div>

            <div className="flex flex-col items-center">
              <div className=" bg-stone-600 bg-stone-700mt-4 w-24 h-6 md:w-20 md:h-8"></div>
              <div className=" bg-transparent bg-stone-700mt-4 w-24 h-6 md:w-20 md:h-8"></div>
            </div>
            <div
              className={`flex-none flex flex-row items-center justify-center space-x-2 px-2 md:px-4 w-32 md:w-36
                bg-stone-600 rounded-md min-w-min h-10`}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default DealsLoading;
