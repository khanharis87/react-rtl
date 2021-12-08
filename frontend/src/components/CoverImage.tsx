export type CropType = {
  type:
    | "inline_small"
    | "artikel_top"
    | "staand"
    | "liggend_breed"
    | "liggend"
    | "liggend_breed_nieuwsopening"
    | "square_medium"
    | "square_small";
  height: number;
  width: number;
  ratio: string;
  path: string;
};

export type CoverImageProps = {
  crops?: [CropType];
  mainSrc: string;
  altText?: string;
};

export const CoverImage = ({
  crops,
  mainSrc,
  altText = "cover",
}: CoverImageProps) => {
  return (
    <picture>
      {crops &&
        crops.map((img, i) => {
          switch (img.type) {
            case "liggend_breed_nieuwsopening":
              return (
                <source
                  key={i}
                  srcSet={img.path}
                  media="all and (min-width: 1200px)"
                ></source>
              );
            case "liggend_breed":
              return (
                <source
                  key={i}
                  srcSet={img.path}
                  data-testid="min-width-800px-max-width-1199p"
                  media="all and (min-width: 800px) and (max-width: 1199px)"
                ></source>
              );
            default:
              break;
          }
        })}
      <img src={mainSrc} alt={altText}></img>
    </picture>
  );
};
