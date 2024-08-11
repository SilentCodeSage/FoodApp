import { render } from "@testing-library/react";
import Body from "../Body";
import bodyMock from "../mocks/bodyMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import {  waitFor } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(bodyMock);
    },
  });
});

test("it should render the body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchButton = screen.getByRole("button", {name:"Search"});
  const searchInput = screen.getByTestId("searchInput");
  console.log(searchInput);
  fireEvent.change(searchInput,{target:{value:"cafe"}});
  fireEvent.click(searchButton)
  const cards = screen.getAllByTestId("rescard");
  expect(cards.length).toBe(4);
});
