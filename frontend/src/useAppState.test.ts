import { renderHook, act, cleanup } from "@testing-library/react-hooks";
import { useAppState } from "./useAppState";

const fetchedData = {
  bundelItems: [],
  title: "Title",
  label: "Label",
  description: "description",
  image: { imageUrl: "url", crops: [] },
};

afterEach(cleanup);

describe("useAppState", () => {
  it("fetches data on mount successfully", async () => {
    const mockApiGetData = jest.fn();

    await act(async () => {
      renderHook(() => useAppState(mockApiGetData));
    });

    expect(mockApiGetData).toHaveBeenCalledTimes(1);
  });

  it("returns successful state data", async () => {
    const mockApiGetData = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(fetchedData);
        })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useAppState(mockApiGetData)
    );

    await act(() => waitForNextUpdate());

    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(false);

    expect(result.current.title).toEqual(fetchedData.title);
    expect(result.current.label).toEqual(fetchedData.label);
    expect(result.current.coverImages).toEqual(fetchedData.image);
    expect(result.current.showList).toEqual(fetchedData.bundelItems);
    expect(result.current.description).toEqual(fetchedData.description);
  });

  it("renders exception by setting error state", async () => {
    const mockApiGetData = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          reject("Error");
        })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useAppState(mockApiGetData)
    );

    await act(() => waitForNextUpdate());

    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(true);
  });
});
