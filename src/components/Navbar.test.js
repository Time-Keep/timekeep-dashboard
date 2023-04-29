import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  test("renders correctly", () => {
    render(<NavBar />);
    expect(screen.getByText("Time Keep Co.")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
