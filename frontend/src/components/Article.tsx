import { ArticleContainer, Text } from "../styles";
import { ArticleImage } from "./ArticleImage";
import { CropType } from "./CoverImage";
import { Heading } from "./Heading";

type ArticleProps = {
  id: string;
  containerWidth: number;
  containerFlexDirection: "row" | "column";
  imgSrc: CropType;
  title: string;
  subTitle: string;
  description: string;
};

export const Article = ({
  id,
  containerWidth,
  containerFlexDirection,
  imgSrc,
  title,
  subTitle,
  description,
}: ArticleProps) => {
  return (
    <>
      {containerFlexDirection === "column" ? (
        <ArticleContainer
          key={id}
          width={containerWidth}
          flexDirection={containerFlexDirection}
          id="column"
        >
          <ArticleImage src={imgSrc} text={title} />
          <Heading size={"h5"} title={subTitle} />
          <Heading size={"h3"} title={title} />
          <Text> {description}</Text>
        </ArticleContainer>
      ) : (
        <ArticleContainer
          key={id}
          width={containerWidth}
          flexDirection={containerFlexDirection}
          id="row"
        >
          <div style={{ maxWidth: "260px", height: "200px" }}>
            <ArticleImage src={imgSrc} text={title} />
          </div>
          <div style={{ padding: "0 16px" }}>
            <Heading size={"h5"} title={subTitle} />
            <Heading size={"h3"} title={title} />
            <Text> {description}</Text>
          </div>
        </ArticleContainer>
      )}
    </>
  );
};
