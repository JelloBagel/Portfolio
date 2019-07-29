/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link based on button type
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ route, handleRoute, buttonType, classes, children }) {
  const renderAnchorTag = () => {
    if (handleRoute) {
      return (
        <a
          href={route}
          onClick={handleRoute}
          target="_blank"
          rel="noopener noreferrer"
        >
          {renderContent()}
        </a>
      );
    }
    return (
      <a href={route} target="_blank" rel="noopener noreferrer">
        {renderContent()}
      </a>
    );
  };

  const renderLink = () => {
    if (handleRoute) {
      return (
        <Link to={route} onClick={handleRoute}>
          {renderContent()}
        </Link>
      );
    }
    return <Link to={route}>{renderContent()}</Link>;
  };

  const renderOnClick = () => {
    return <div onClick={handleRoute}>{renderContent()}</div>;
  };

  const renderContent = () => {
    return children;
  };

  let button = null;

  switch (buttonType) {
    case "anchor":
      button = renderAnchorTag();
      break;
    case "link":
      button = renderLink();
      break;
    case "onClick":
      button = renderOnClick();
      break;
    default:
      button = "No Button Type";
      break;
  }
  return <button className={classes}>{button}</button>;
}

Button.propTypes = {
  buttonType: PropTypes.string,
  classes: PropTypes.string,
  handleRoute: PropTypes.func,
  route: PropTypes.string
};

export default Button;
