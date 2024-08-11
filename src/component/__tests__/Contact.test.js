import Contact from "../Contact"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { screen } from "@testing-library/react";

test('Should Load the contact page', () => { 
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test('Should Load the button in contact page', () => { 
    render(<Contact />);

    const button = screen.getByText("Send");
    expect(button).toBeInTheDocument();
})