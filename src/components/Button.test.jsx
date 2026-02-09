import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
