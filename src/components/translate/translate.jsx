import React, { Fragment } from "react";
import { useCounter } from "../../hooks/useCounter";

const Translate = () => {
  const { Translate, change } = useCounter();

  const translateFirstName = change === "english" ? "first name" : "անուն";
  const translateLastName =
    change === "english" ? "last name" : "ձեր մականունը";
  const translateSubmit = change === "english" ? "submit" : "ներկայացնել";

  return (
    <Fragment>
      <div>
        <button onClick={() => Translate("armenian")}>
          <span>Armenia</span>
          <i class="am flag"></i>
        </button>
        <button onClick={() => Translate("english")}>
          <span>USA</span>
          <i class="us flag"></i>
        </button>
      </div>

      <form class="ui form" onSubmit={(e) => e.preventDefault()}>
        <div class="field">
          <label>{translateFirstName}</label>
          <input
            type="text"
            name="first-name"
            placeholder={translateFirstName}
          />
        </div>
        <div class="field">
          <label>{translateLastName}</label>
          <input type="text" name="last-name" placeholder={translateLastName} />
        </div>
        <div class="field"></div>
        <button class="ui button" type="submit">
          {translateSubmit}
        </button>
      </form>
    </Fragment>
  );
};

export default Translate;
