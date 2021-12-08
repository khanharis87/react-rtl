import { CropType } from "./CoverImage";
import { Image } from "../styles";

type ArticleImageProps = {
  src: CropType;
  text: string;
};
export const ArticleImage = ({ src, text }: ArticleImageProps) => {
  return (
    <>
      <Image src={src.path} alt={text} />
    </>
  );
};
