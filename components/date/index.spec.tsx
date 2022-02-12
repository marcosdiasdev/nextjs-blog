import DateComponent from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Date", () => {
  it("should render formatted date", () => {
    const dateString = "2022-02-11";
    const formattedDate = "February 11, 2022";
    render(<DateComponent dateString={dateString} />);
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it("should not render if format is invalid", () => {
    const dateString = "11-02-2022";
    expect(() => render(<DateComponent dateString={dateString} />)).toThrow();
  });
});
