import React, { Suspense, useEffect } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error.jsx";
import RestaurantMenu from "./component/RestaurantMenu.jsx";
import { userContext } from "./utils/context.js";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./component/Cart.jsx";

const Grocery = lazy(() => import("./component/Grocery.jsx"));

const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  const [itemInfo,setItemInfo] = useState([])
  // const [ItemName, setItemName] = useState([]);
  // const [ItemDescription, setItemDescription] = useState([]);
  

  //authentication

  useEffect(() => {
    //make an api call and get username and password
    const data = {
      name: "Nandakishor A S",
    };

    setUserName(data.name);
  }, []);

  return (
    // <Provider store={appStore}>
    //   <userContext.Provider value={{ loggedInUser: userName, ItemName, ItemDescription, setItemName, setItemDescription }}>
    //     <div className="app">
    //       <Header />
    //       <Outlet />
    //     </div>
    //   </userContext.Provider>
    // </Provider>
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, itemInfo, setItemInfo}}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
