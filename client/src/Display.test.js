import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display.js";

describe("Tests the Display.js component", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });

  it("should render the numbers of balls and strikes", () => {
    const { getByText } = render(<Display />);
    getByText(/strikes:/i);
    getByText(/balls:/i);
  });
});
