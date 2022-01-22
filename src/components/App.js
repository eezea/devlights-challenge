import React from "react";
import axios from "axios";
import DealsShowCase from "./DealsShowcase";
import DealCard from "./DealCard";
import DealsSearchBar from "./DealsSearchBar";

function App() {
  const [deals, setDeals] = React.useState([]);

  const getDeals = async () => {
    try {
      const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15');
      console.log(response.data);
      setDeals(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getDeals();
  },[])

  return (
    <div className="bg-stone-900 h-screen p-5 overflow-y-scroll">
      <header>
        <h1>Deals Showcase App</h1>
        <DealsSearchBar />
      </header>
      
      <section>
        <DealsShowCase>
          {deals.map((deal, index)=>(
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
