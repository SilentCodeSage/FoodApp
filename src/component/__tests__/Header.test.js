import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";


test("should render the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");
  //assertion
  expect(loginButton).toBeInTheDocument();
});

test("should contain an item or element with the text 'Home'...", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const homeButton = screen.getByText("Home")
    expect(homeButton).toBeInTheDocument();
  });

  test("should change login buton to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginBtn = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginBtn)
    const logoutBtn = screen.getByRole("button",{name:"Logout"});
    expect(logoutBtn).toBeInTheDocument();
  });

