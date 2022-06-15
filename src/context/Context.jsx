import { createContext, useReducer } from "react";

export const contextTheme = createContext();

const ContextReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "COUNT_INCREMENT":
      return { ...state, initialState: action.payload };
    case "COUNT_DECREMENT":
      return { ...state, initialState: action.payload };
    case "TRANSLATED":
      return { ...state, change: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContextReducer, {
    color: "",
    initialState: 0,
    add: "Add Task",
  });

  const ChangeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const CountIncrement = (initialState) => {
    dispatch({ type: "COUNT_INCREMENT", payload: initialState + 1 });
  };

  const CountDecrement = (initialState) => {
    dispatch({ type: "COUNT_DECREMENT", payload: initialState - 1 });
  };

  const Translate = (change) => {
    dispatch({
      type: "TRANSLATED",
      payload: change,
    });
  };

  return (
    <contextTheme.Provider
      value={{
        ...state,
        ChangeColor,
        CountIncrement,
        CountDecrement,
        Translate,
      }}
    >
      {children}
    </contextTheme.Provider>
  );
};
