import { useState } from "react";
import ItemList from "./ItemList";

const Categories = (props) => {
  const { title } = props.categoriesData?.card?.card;
  const count = props.categoriesData?.card?.card.itemCards.length;
  const handleClick = () => {
    props.setShowIndex();
  };

  return (
    <div className="bg-gray-100 py-6 px-4 w-6/12 rounded-lg m-auto my-6 shadow-2xl">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-xl">
          {title}({count})
        </span>
        <span>▼</span>
      </div>
      <div>
        {props.categoriesData.card.card.itemCards.map((value,index) => {
            { return props.showIndex && <ItemList key = {index} data={value} />}
        })}
      </div>
    </div>
  );
};
export default Categories;
