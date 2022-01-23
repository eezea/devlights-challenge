import React from "react";
import axios from "axios";
import DealsShowCase from "./DealsShowcase";
import DealCard from "./DealCard";
import DealsSearchBar from "./DealsSearchBar";
import DealsCart from "./DealsCart";
import { LightningBoltIcon } from "@heroicons/react/outline";

function App() {
  const [deals, setDeals] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");

  const [totalSales, setTotalSales] = React.useState(0);

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

  const getDeals = async () => {
    try {
      const response = await axios.get(
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
      );
      setDeals(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getDeals();
  }, []);

  return (
    <div className="bg-stone-900 w-screen h-screen overflow-y-scroll">
      <header
        className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:justify-between 
        py-4 md:py-0 px-10 bg-black w-full h-44 md:h-20 shadow-md shadow-stone-400/10"
      >
        <div className="group flex flex-row items-center justify-center space-x-2">
          <LightningBoltIcon
            className="text-indigo-500 w-12 h-12 
          group-hover:text-rose-500 ease-in duration-300"
          />
          <h1 className="text-3xl lg:text-4xl xl:text-5xl text-slate-200 hover:cursor-default">
            Deals Showcase
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
          <DealsSearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <DealsCart />
        </div>
      </header>

      <section>
        <DealsShowCase>
          {searchedDeals.map((deal, index) => (
            <DealCard
              savings={deal.savings}
              thumb={deal.thumb}
              title={deal.title}
              steamRatingPercent={deal.steamRatingPercent}
              normalPrice={deal.normalPrice}
              salePrice={deal.salePrice}
              key={index}
            />
          ))}
        </DealsShowCase>
      </section>

      <footer>
        <p>Zack Fytc</p>
      </footer>
    </div>
  );
}

export default App;
