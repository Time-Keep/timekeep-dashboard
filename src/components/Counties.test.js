import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counties from "./Counties";

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
  {
    id: 3,
    name: "Cook",
    score: 77,
    median_wage: 55000,
    tax_rate: 0.083,
    median_income: 65000,
    unemployment: 4.8,
    state: "Illinois",
  },
  {
    id: 4,
    name: "Harris",
    score: 68,
    median_wage: 50000,
    tax_rate: 0.077,
    median_income: 60000,
    unemployment: 5.9,
    state: "Texas",
  },
  {
    id: 5,
    name: "Miami-Dade",
    score: 95,
    median_wage: 65000,
    tax_rate: 0.07,
    median_income: 80000,
    unemployment: 4.2,
    state: "Florida",
  },
];

describe("Counties component", () => {
  test("renders correctly", async () => {
    render(
      <Counties handleScore={mockHandleScore} counties={mockCountyData} />
    );

    expect(
      await screen.findByText("Los Angeles, California")
    ).toBeInTheDocument();
    expect(await screen.findByText("New York, New York")).toBeInTheDocument();
    expect(await screen.findByText("Cook, Illinois")).toBeInTheDocument();
    expect(await screen.findByText("Harris, Texas")).toBeInTheDocument();
    expect(await screen.findByText("Miami-Dade, Florida")).toBeInTheDocument();
  });

  test("handles mouse enter event correctly", async () => {
    render(
      <Counties handleScore={mockHandleScore} counties={mockCountyData} />
    );
    fireEvent.mouseEnter(await screen.findByText("Los Angeles, California"));

    expect(mockHandleScore).toHaveBeenCalledTimes(1);
    expect(mockHandleScore).toHaveBeenCalledWith(expect.any(Object), 82);
  });
});
