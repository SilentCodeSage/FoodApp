import { createContext } from "react";



export const userContext = createContext({
    loggedInUser:"Nandu",
    itemInfo: [],
    setItemInfo: () => {}
});
