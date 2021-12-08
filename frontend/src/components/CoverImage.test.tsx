import { render, screen } from "@testing-library/react";
import { CoverImage } from "./CoverImage";

describe("Cover Image", () => {
  it("renders image", () => {
    render(<CoverImage mainSrc="dummy" />);

    const image = screen.getByRole("img");

    expect(image.nodeName).toBe("IMG");
    expect(image.getAttribute("src")).toBe("dummy");
  });

  it("renders source elements", () => {
    render(
      <CoverImage
        mainSrc="dummy"
        crops={[
          {
            type: "liggend_breed",
            height: 150,
            width: 150,
            ratio: "3:1",
            path: "dummy",
          },
        ]}
      />
    );

    const source = screen.getByTestId("min-width-800px-max-width-1199p");

    expect(source.nodeName).toBe("SOURCE");
    expect(source.getAttribute("srcSet")).toBe("dummy");
  });
});
