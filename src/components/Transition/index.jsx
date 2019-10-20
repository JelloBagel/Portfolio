import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

const Transition = ({ isRouting, setIsRouting }) => {
  const appRoot = document.getElementById("root");

  let afterDoneTimer;
  const handleClick = e => {
    clearTimeout(afterDoneTimer);

    afterDoneTimer = setTimeout(() => {
      setIsRouting(false);
    }, 2000); // 2x of transition time
  };

  return isRouting
    ? ReactDOM.createPortal(
        <CSSTransition
          in={true}
          timeout={1000}
          classNames="transition-"
          appear
          onEntered={handleClick}
        >
          <div className="transition-wrapper">
            <div className="transition-mask" />
          </div>
        </CSSTransition>,
        appRoot
      )
    : null;
};

export default Transition;
