import React from "react";
import "./../sass/main.scss";

function HeaderButton(props) {
  return (
    <div className="header-button">
        <div>{props.entry}</div>
    </div>
  );
}

export default HeaderButton;
