import React from "react";
import axios from "axios";
import DealsShowCase from "./DealsShowcase";
import DealCard from "./DealCard";
import DealsSearchBar from "./DealsSearchBar";
import DealsCart from "./DealsCart";
import { LightningBoltIcon } from "@heroicons/react/outline";
import DealsLoading from "./DealsLoading";
import ErrorMessage from "./ErrorMessage";

function App() {
  const [deals, setDeals] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState("");

  let searchedDeals = [];

  if (!searchValue.length >= 1) {
    searchedDeals = deals;
  } else {
    searchedDeals = deals.filter((deal) => {
      const dealTitle = deal.title.toLowerCase();
      const searchTitle = searchValue.toLowerCase();
      return dealTitle.includes(searchTitle);
    });
  }

  let selectedDeals = deals.filter((deal) => deal.isSelected);
  let dealsCounter = selectedDeals.length;
  let dealsTotalSales = 0;
  selectedDeals.forEach((deal) => {
    dealsTotalSales += Number(deal.salePrice);
  });

  const selectDeal = (gameID) => {
    const dealIndex = deals.findIndex((deal) => deal.gameID === gameID);
    const newDeals = [...deals];
    newDeals[dealIndex].isSelected = !newDeals[dealIndex].isSelected;
    setDeals(newDeals);
  };

  const getDeals = async () => {
    try {
      const response = await axios.get(
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
      );
      const localDeals = response.data.map((deal) => {
        return {
          ...deal,
          isSelected: false,
          starsFilled: Math.round(deal.steamRatingPercent / 20),
        };
      });
      setError(false);
      setDeals(localDeals);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (dealsCounter === 0) {
      getDeals();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-between bg-stone-900 w-screen h-screen overflow-y-auto">
      <header
        className="flex-none flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:justify-between 
        py-4 md:py-0 px-10 bg-black w-full sm:h-44 md:h-20 shadow-md shadow-stone-400/10
        select-none"
      >
        <div
          className="group flex flex-row items-center justify-center space-x-2 cursor-pointer"
          onClick={getDeals}
        >
          <LightningBoltIcon
            className="text-indigo-500 w-12 h-12 
          group-hover:text-rose-500 ease-in duration-300"
          />
          <h1 className="text-3xl lg:text-4xl xl:text-5xl text-slate-200">
            Deals Showcase
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
          <DealsSearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <DealsCart
            dealsCounter={dealsCounter}
            dealsTotalSales={dealsTotalSales.toFixed(2)}
          />
        </div>
      </header>

      <section>
        {error && <ErrorMessage />}
        {isLoading && <DealsLoading />}
        {!error && !isLoading && (
          <DealsShowCase>
            {searchedDeals.map((deal, index) => (
              <DealCard
                savings={deal.savings}
                thumb={deal.thumb}
                title={deal.title}
                starsFilled={deal.starsFilled}
                normalPrice={deal.normalPrice}
                salePrice={deal.salePrice}
                isSelected={deal.isSelected}
                key={index}
                onSelect={() => selectDeal(deal.gameID)}
              />
            ))}
          </DealsShowCase>
        )}
      </section>

      <footer className="flex-none w-full flex flex-row items-center justify-center bg-black h-20 text-gray-200">
        <p>Copyright © 2022 - Elías Ezequiel Angélico</p>
      </footer>
    </div>
  );
}

export default App;
