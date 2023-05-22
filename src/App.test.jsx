import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders", () => {
    function Hello() {
      return <h1>Hello</h1>;
    }
    render(<Hello />);

    const title = screen.getByText("Hello");

    expect(title).toBeInTheDocument();
  });
});
