import { useEffect, useState } from "react"
import { menuData } from '../utils/constants';

const useRestaurantsMenu = (id) =>{

    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(menuData+id);
        const result = await data.json();
        const categoriesArr = result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;        const k = "@type";
        const categoriesdata = categoriesArr.filter((data) => {
            return data?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        });

        setCategories(categoriesdata);        
        const menu = result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
        setMenu(menu);
        const info = result.data.cards[2].card.card.info;
        setRestaurant(info);
    
       }

       return {restaurant,menu,categories};
}

export default useRestaurantsMenu