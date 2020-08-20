import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getThingStart } from "./actions";

export const useThing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getThingStart());
  }, [dispatch]);

  return useSelector(state => state.thing);
};