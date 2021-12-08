import { AppContainer, Text, TextAlignCenter } from "./styles";
import "./styles.ts";
import { CoverImage } from "./components/CoverImage";
import { ListOfItems } from "./components/ListOfItems";
import { Heading } from "./components/Heading";
import { useAppState } from "./useAppState";

function App({ useAppStateHook = useAppState }) {
  const { coverImages, title, label, description, showList, isLoading, error } =
    useAppStateHook();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <AppContainer data-testid="appContainer">
      {coverImages && (
        <CoverImage mainSrc={coverImages.imageUrl} crops={coverImages.crops} />
      )}
      <TextAlignCenter>
        <Heading size="h5" title={label}></Heading>
        <Heading size="h1" title={title}></Heading>
        <Text>{description}</Text>
      </TextAlignCenter>
      <ListOfItems data={showList} />
    </AppContainer>
  );
}

export default App;
