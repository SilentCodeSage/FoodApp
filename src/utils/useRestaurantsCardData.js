import { useState, useEffect } from "react";
import { restaurantsList } from "../utils/constants";

const useRestaurantsCard = () =>{

    const [cardData, setCardData] = useState([]);
    const [filteredCardData, setFilteredCardData] = useState([]);
    

    useEffect(() => {
        fetchData();
    },[]);


    const fetchData = async () => {
        try {
          const result = await fetch(
            restaurantsList
          );
          const answer = await result.json();
          const restaurants =
            answer.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
          // console.log(restaurants);
          const restaurantsFinal = restaurants.map((data) => data.info);
          // console.log(restaurantsFinal);
          setCardData(restaurantsFinal);
          setFilteredCardData(restaurantsFinal);
        } catch (error) {
          console.log("Error Ocured");
        }
      };
    return {cardData,filteredCardData};
}

export default useRestaurantsCard;