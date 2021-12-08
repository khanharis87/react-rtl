import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders h1  with title", () => {
    const { container } = render(<Heading title="Hello" size="h1" />);
    const h1 = screen.getByRole("heading");

    expect(container.innerHTML).toMatch("Hello");
    expect(h1.nodeName).toBe("H1");
  });

  it("renders h3  with title", () => {
    const { container } = render(<Heading title="Hello" size="h3" />);
    const h3 = screen.getByRole("heading");

    expect(container.innerHTML).toMatch("Hello");
    expect(h3.nodeName).toBe("H3");
  });

  it("renders h5  with title", () => {
    const { container } = render(<Heading title="Hello" size="h5" />);
    const h5 = screen.getByRole("heading");

    expect(container.innerHTML).toMatch("Hello");
    expect(h5.nodeName).toBe("H5");
  });
});
