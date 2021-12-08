type HeadingProps = {
  size: "h1" | "h3" | "h5";
  title: string;
};
export const Heading = ({ size, title }: HeadingProps) => {
  switch (size) {
    case "h1":
      return <h1>{title}</h1>;
    case "h3":
      return <h3>{title}</h3>;
    case "h5":
      return <h5 className="subTitle">{title}</h5>;
    default:
      return <h1>{title}</h1>;
  }
};
