import { ListInRow, ListInColumn } from "../styles";
import { Article } from "./Article";
import { useArticleList } from "./useArticleList";

export const ListOfItems = ({ data }: any) => {
  const { dataForRowList, restOfData, findImageForArticles } =
    useArticleList(data);

  return (
    <>
      <ListInRow>
        {dataForRowList &&
          dataForRowList.map((item) => (
            <Article
              id={item.id}
              containerWidth={30}
              containerFlexDirection="column"
              imgSrc={findImageForArticles(item.afbeelding?.crops)}
              title={item.titel}
              subTitle={item.chapeau}
              description={item.lead}
            />
          ))}
      </ListInRow>
      <ListInColumn>
        {restOfData.map((item) => (
          <Article
            id={item.id}
            containerWidth={66}
            containerFlexDirection="row"
            imgSrc={findImageForArticles(item.afbeelding?.crops)}
            title={item.titel}
            subTitle={item.chapeau}
            description={item.lead}
          />
        ))}
      </ListInColumn>
    </>
  );
};
