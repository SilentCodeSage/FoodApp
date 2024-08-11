import React, { useEffect } from "react";
import { categoryItemListImage } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { userContext } from "../utils/context.js";

const ItemList = (props) => {
  const { itemInfo, setItemInfo } = useContext(userContext);
  const { name, defaultPrice, description, imageId } = props.data?.card?.info;

  const dispatch = useDispatch();
  const handleAddItem = (name) => {
    dispatch(addItem(name));
    setItemInfo((prevItemInfo) => [
      ...prevItemInfo,
      { name, description }
    ]);
  };

  return (
    <div className="border-b-2 border-gray-300 my-6 text-left px-6 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="flex justify-between">
        <div className="w-9/12 py-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{name}</h1>
          <p className="text-lg text-gray-600 mb-4">{description}</p>
          <p className="text-lg text-green-600 font-semibold">₹{defaultPrice / 100}</p>
        </div>
        <div className="w-3/12 relative">
          <img
            className="w-full h-40 object-cover rounded-2xl"
            src={categoryItemListImage + "/" + imageId}
            alt=""
          />
          <button
            className="absolute bottom-4 right-4 bg-green-500 text-white font-bold px-6 py-2 rounded-full shadow-md hover:bg-green-600"
            onClick={() => handleAddItem(name)}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
