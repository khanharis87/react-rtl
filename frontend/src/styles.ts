import styled from "styled-components";

type ArticleContainerProps = {
  width: number;
  flexDirection: "row" | "column";
};

export const AppContainer = styled.div`
  display: flex;
  max-width: 1160px;
  margin: 0 auto;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const ListInRow = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
`;

export const ListInColumn = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ArticleContainer = styled.article<ArticleContainerProps>`
  flex-basis: ${(props) => props.width}%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  margin: 8px 16px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const TextAlignCenter = styled.div`
  text-align: center;
`;
