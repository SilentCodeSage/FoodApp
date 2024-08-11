import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import Categories from "./Categories";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();

  const { restaurant, menu, categories } = useRestaurantsMenu(id);

  const { name, cuisines, costForTwo } = restaurant;
  return (
    <div className="text-center my-6">
      <h1 className="font-bold text-2xl mb-2">{name}</h1>
      <p className="font-semibold">
        {cuisines + " - "}₹{costForTwo / 100} for two
      </p>
      {categories.map((data, index) => {
        return (
          <Categories
            key={index}
            categoriesData={data}
            showIndex={index == showIndex?true:false}
            setShowIndex={()=>setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
