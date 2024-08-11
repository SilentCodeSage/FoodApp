import { useState } from "react";
import { mainLogo } from "../utils/constants";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../utils/context";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonText, setButtonText] = useState("Login");

  const { loggedInUser } = useContext(userContext);
  // subscribing to the store using selector
  // here the data from the store is being read
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    // Add any side effects you may need
  }, [buttonText]);

  return (
    <div className="flex justify-between px-5 py-5 shadow-xl h-28 bg-white">
      <div className="flex items-center">
        <img className="w-24 rounded-full" src={mainLogo} alt="Main Logo" />
        <h1 className="text-4xl ml-6 font-bold text-gray-800">hungri</h1>
      </div>
      <div className="flex items-center space-x-6">
        <ul className="flex">
          <li className="m-4 font-normal text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4 font-normal text-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-4 font-normal text-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-4 font-normal text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-4 font-normal text-lg">
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => {
              buttonText === "Logout"
                ? setButtonText("Login")
                : setButtonText("Logout");
            }}
          >
            {buttonText}
          </button>
          <li className="m-4 font-normal text-lg">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
