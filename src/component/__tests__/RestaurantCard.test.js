import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Card from "../card";
import cardMocks from "../mocks/cardMocks.json"



test("Should run render the restaurantCard component with props",() =>{
    render(
        <Card cardContent={cardMocks}/>
    )

    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})