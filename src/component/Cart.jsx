import React, { useContext } from "react";
import { userContext } from "../utils/context.js";

const Cart = () => {
  const { itemInfo, setItemInfo } = useContext(userContext);

  const handleClearCart = () => {
    setItemInfo(() => []);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12">
      <h1 className="m-4 font-semibold text-3xl text-gray-800">Cart</h1>
      {itemInfo.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-2xl">
          {itemInfo.map((data, index) => (
            <div
              key={index}
              className="w-full bg-white shadow-md rounded-lg p-8 mb-4 flex flex-col items-start"
            >
              <h1 className="font-bold text-xl text-gray-800">{data.name}</h1>
              <p className="text-gray-600">{data.description}</p>
            </div>
          ))}
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
