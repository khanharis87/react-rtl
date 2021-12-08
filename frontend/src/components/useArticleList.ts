import { CropType } from "./CoverImage";

export const useArticleList = (data: [any]) => {
  const dataForRowList = [...data.slice(0, 3)];
  const restOfData = [...data.slice(3)];

  const findImageForArticles = (items: [CropType]): CropType => {
    const filter = items.filter((i: CropType) => i.type === "artikel_top");
    return filter[0];
  };

  return { dataForRowList, restOfData, findImageForArticles };
};
