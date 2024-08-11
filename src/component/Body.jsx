import { useEffect, useState } from "react";
import Card from "./card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Open } from "./card";
import { restaurantsList } from "../utils/constants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [cardData, setCardData] = useState([]);
  const [filteredCardData, setFilteredCardData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await fetch(restaurantsList);
      const answer = await result.json();
      const restaurants = answer.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      const restaurantsFinal = restaurants.map((data) => data.info);
      setCardData(restaurantsFinal);
      setFilteredCardData(restaurantsFinal);
    } catch (error) {
    }
  };

  const status = useOnlineStatus();
  const OpenedCard = Open(Card);

  if (!status) return <h1 className="text-red-500 text-2xl">Oops! Something went wrong</h1>;

  return cardData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <input 
          data-testid = "searchInput"
            className="border border-solid border-gray-300 h-12 rounded-full w-64 p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            placeholder="Search restaurants..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full text-white font-bold"
            onClick={() => {
              const searchFilteredData = cardData.filter((data) =>
                data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredCardData(searchFilteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-600 p-3 rounded-xl text-white font-bold w-64"
          onClick={() => {
            const filteredCardRated = cardData.filter((data) => data.avgRating >= 4.5);
            setFilteredCardData(filteredCardRated);
          }}
        >
          See High Rated
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {filteredCardData.map((data, index) => (
          <Link key={index} to={"/restaurants/" + data.id} className="transform transition duration-300 hover:scale-105">
            {data.isOpen ? <OpenedCard cardContent={data} /> : <Card cardContent={data} />}
          </Link>
        ))}
        {filteredCardData.map((data, index) => (
          <Link key={index} to={"/restaurants/" + data.id} className="transform transition duration-300 hover:scale-105">
            {data.isOpen ? <OpenedCard cardContent={data} /> : <Card cardContent={data} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
