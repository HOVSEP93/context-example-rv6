import React, { Fragment } from "react";
import { useCounter } from "../../hooks/useCounter";

import "./changeColor.scss";

const SelectColor = ["#e76f51", "#cdb4db", "#2a9d8f"];
const Theme = () => {
  const { ChangeColor, color } = useCounter();

  return (
    <Fragment>
      <div className="theme">
        <div className="text-theme" style={{ background: color }}>
          <h1>Change Color</h1>
        </div>
        {SelectColor.map((color) => (
          <button
            key={color}
            onClick={() => ChangeColor(color)}
            style={{ background: color }}
          ></button>
        ))}
      </div>
    </Fragment>
  );
};

export default Theme;
