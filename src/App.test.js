import { renderHook } from "@testing-library/react-hooks";
import { getThingStart } from "./actions";
import { useSelector, useDispatch } from 'react-redux';
import { useThing } from "./useThing";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

const mockUseSelector = useSelector;
const mockUseDispatch = useDispatch;
const mockDispatch = jest.fn();

describe("useThing hook", () => {
  it("calls dispatch and retrieves our thing", () => {
    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockImplementation(
      callback => callback({ thing: "this is our thing" }) // This is our mocked state.
    );

    const { result } = renderHook(() => useThing()); // Call our hook.

    expect(result.current).toBe("this is our thing"); // Make sure hook returns our slice of state.
    expect(mockDispatch).toHaveBeenCalledWith(getThingStart()); // Make sure the right action was dispatched.
  });
});