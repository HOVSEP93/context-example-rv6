import "./App.scss";
import Pages from "./pages/Pages";
import { Fragment } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { useCounter } from "./hooks/useCounter";

const SelectColor = ["#89bd9e", "#edafb8", "#cdb4db", "#cc8b86"];
function App() {
  const { ChangeColor, color } = useCounter();

  return (
    <Fragment>
      <BrowserRouter>
        <div className="App">
          <div className="ui container">
            <nav style={{ background: color }}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="counter">Counter</NavLink>
              <NavLink to="theme">Change Theme</NavLink>
              <NavLink to="translate">Translate</NavLink>
            </nav>
            <div className="theme-selector ">
              <div className="theme-buttons">
                {SelectColor.map((color) => (
                  <button
                    key={color}
                    onClick={() => ChangeColor(color)}
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>
            <Pages />
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
