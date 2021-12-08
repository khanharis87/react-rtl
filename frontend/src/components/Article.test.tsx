import React from "react";
import { render, screen } from "@testing-library/react";
import { Article } from "./Article";

describe("App", () => {
  it("renders row version of the Article", () => {
    render(
      <Article
        id="1"
        containerWidth={150}
        containerFlexDirection="row"
        imgSrc={{
          type: "liggend_breed",
          height: 150,
          width: 150,
          ratio: "3:1",
          path: "dummy",
        }}
        title="hello"
        subTitle="subHello"
        description="hello hello"
      />
    );
    const articleContainer = screen.getByRole("article");
    expect(articleContainer.id).toBe("row");
  });

  it("renders column version of the Article", () => {
    render(
      <Article
        id="1"
        containerWidth={150}
        containerFlexDirection="column"
        imgSrc={{
          type: "liggend_breed",
          height: 150,
          width: 150,
          ratio: "3:1",
          path: "dummy",
        }}
        title="hello"
        subTitle="subHello"
        description="hello hello"
      />
    );
    const articleContainer = screen.getByRole("article");
    expect(articleContainer.id).toBe("column");
  });
});
