import React, { Fragment } from "react";
import { useCounter } from "../../hooks/useCounter";

import "./Counter.scss";

const Counter = () => {
  const { CountIncrement, CountDecrement, initialState } = useCounter();

  const incrementHandle = () => {
    CountIncrement(initialState);
  };

  const decrementHandle = () => {
    CountDecrement(initialState);
  };

  return (
    <Fragment>
      <div className="counter">
        <h1>Counter</h1>
        <h2>{initialState} Likes</h2>
        <span onClick={incrementHandle}>👍🏽</span>
        <span onClick={decrementHandle}>👎🏽</span>
        <h3>Like or dislike to increase/decrease</h3>
      </div>
    </Fragment>
  );
};

export default Counter;
