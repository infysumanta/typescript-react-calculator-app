import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Calculator from "../Calculator";

describe("Calculator", () => {
  it("renders the result of the expression", () => {
    const { getByTestId } = render(<Calculator />);
    const result = getByTestId("result");
    expect(result.textContent).toBe("0");
  });

  it("evaluates the expression and displays the result", () => {
    const { getByTestId } = render(<Calculator />);
    const buttons = ["7", "+", "8", "="];
    buttons.forEach((button) => {
      fireEvent.click(getByTestId(button));
    });
    const result = getByTestId("result");
    expect(result.textContent).toBe("15");
  });
});
