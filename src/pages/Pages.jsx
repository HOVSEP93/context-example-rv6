import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { CounterTheme } from "./CounterTheme";
import Home from "./Home";
import ThemePage from "./ThemePage";
import { TranslatePage } from "./TranslatePage";

const Pages = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterTheme />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path="/translate" element={<TranslatePage />} />
      </Routes>
    </Fragment>
  );
};

export default Pages;
