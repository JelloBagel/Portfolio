import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Transition from "../Transition";

const LinkDelay = ({ to, children, history }) => {
  const [isRouting, setIsRouting] = useState(false);

  let halfwayTimer;
  const handleClick = e => {
    setIsRouting(true);

    e.preventDefault();

    clearTimeout(halfwayTimer);

    halfwayTimer = setTimeout(() => {
      history.push(to);
    }, 500); // Half of transition time
  };

  return (
    <React.Fragment>
      <Link to={to} onClick={handleClick}>
        {children}
      </Link>
      <Transition isRouting={isRouting} setIsRouting={setIsRouting} />
    </React.Fragment>
  );
};

export default withRouter(LinkDelay);
