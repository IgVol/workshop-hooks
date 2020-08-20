jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

const mockUseSelector = useSelector;
const mockUseDispatch = useDispatch;
const mockDispatch = jest.fn();
// These lines set up our mocked behaviour for useSelector, useDispatch and dispatch. We need to be able to mock implementations for useSelector and useDispatch and we need to spy on what dispatch was called with.
// mockUseDispatch.mockImplementation(() => mockDispatch);
mockUseSelector.mockImplementation(callback =>
  callback({ thing: "this is our thing" })
);
// These lines tell the useDispatch hook to return our mocked dispatch function and for the useSelector hook to call a callback containing a mocked state object.
// const { result } = renderHook(() => useThing());
// This line calls renderHook and tells it to run our useThing hook. renderHook returns a result object.
expect(result.current).toBe("this is our thing");
expect(mockDispatch).toHaveBeenCalledWith(getThingsStart());