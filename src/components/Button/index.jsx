/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link based on button type
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Modal } from "../Modal";

function Button({ route, handleRoute, buttonType, classes, children, alt }) {
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
    return (
      <button className={classes} onClick={handleRoute}>
        {renderContent()}
      </button>
    );
  };

  const renderModal = () => {
    return (
      <Modal classes={classes} file={route} alt={alt} type={buttonType}>
        {renderContent()}
      </Modal>
    );
  };

  const renderContent = () => {
    return children;
  };

  switch (buttonType) {
    case "anchor":
      return <button className={classes}>{renderAnchorTag()}</button>;
    case "link":
      return <button className={classes}>{renderLink()}</button>;
    case "onClick":
      return renderOnClick();
    case "modal-img":
    case "modal-video":
      return renderModal();
    default:
      return "No Button Type";
  }
}

Button.propTypes = {
  buttonType: PropTypes.string,
  classes: PropTypes.string,
  handleRoute: PropTypes.func,
  route: PropTypes.string
};

export default Button;
