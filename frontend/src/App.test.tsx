import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
const fetchedData = {
  bundleItems: [],
  title: "Title",
  label: "Label",
  image: { imageUrl: "url", crops: [] },
};
afterEach(cleanup);
describe("App", () => {
  it("renders successfully", () => {
    const mockUseAppState = () => ({
      isLoading: false,
      coverImages: [],
      title: "title",
      label: "label",
      description: "desc",
      showList: [],
      error: false,
    });

    const { container } = render(<App useAppStateHook={mockUseAppState} />);
  });

  describe("while error is thrown", () => {
    it("renders error", () => {
      const mockUseAppState = () => ({
        isLoading: false,
        coverImages: [],
        title: "title",
        label: "label",
        description: "desc",
        showList: [],
        error: true,
      });

      const { container } = render(<App useAppStateHook={mockUseAppState} />);

      expect(container.innerHTML).toMatch("Error");
    });
  });
  describe("while waiting for API response", () => {
    it("renders loading", () => {
      const mockUseAppState = () => ({
        isLoading: true,
        coverImages: [],
        title: "title",
        label: "label",
        description: "desc",
        showList: [],
        error: false,
      });

      const { container } = render(<App useAppStateHook={mockUseAppState} />);

      expect(container.innerHTML).toMatch("Loading...");
    });
  });
});
