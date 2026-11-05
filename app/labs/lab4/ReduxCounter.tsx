"use client";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterReducer";
import type { RootState } from "./redux/store";

export default function ReduxCounter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div id="wd-redux-counter">
      <h4>Redux Counter: {count}</h4>
      <button type="button" onClick={() => dispatch(increment())}>Up</button>{" "}
      <button type="button" onClick={() => dispatch(decrement())}>Down</button>
      <hr />
    </div>
  );
}
