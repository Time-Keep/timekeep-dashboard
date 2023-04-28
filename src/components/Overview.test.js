import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Overview from "./Overview";

const mockHandleScore = jest.fn();

const mockCountyData = [
  {
    id: 1,
    name: "Los Angeles",
    score: 82,
    median_wage: 60000,
    tax_rate: 0.09,
    median_income: 75000,
    unemployment: 6.1,
    state: "California",
  },
  {
    id: 2,
    name: "New York",
    score: 91,
    median_wage: 70000,
    tax_rate: 0.104,
    median_income: 90000,
    unemployment: 5.5,
    state: "New York",
  },
];

describe("Overview component", () => {
  test("renders correctly", async () => {
    render(
      <Overview
        handleScore={mockHandleScore}
        score={{ percentage: 75, colour: "green" }}
        counties={mockCountyData}
      />
    );

    expect(
      await screen.findByText("Los Angeles, California")
    ).toBeInTheDocument();
    expect(await screen.findByText("New York, New York")).toBeInTheDocument();
    expect(await screen.findByText("75%")).toBeInTheDocument();
  });

  test("handles score correctly", async () => {
    render(
      <Overview
        handleScore={mockHandleScore}
        score={{ percentage: 75, colour: "green" }}
        counties={mockCountyData}
      />
    );

    const losAngeles = await screen.findByText("Los Angeles, California");
    expect(losAngeles).toBeInTheDocument();

    fireEvent.mouseEnter(losAngeles);

    expect(mockHandleScore).toHaveBeenCalledTimes(1);
  });
});
