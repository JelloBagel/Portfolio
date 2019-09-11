import React from "react";
import PropTypes from "prop-types";

function MastHead({ backgroundImage, title, subtitle }) {
  return (
    <div className="mastHead">
      <div
        className="mastHead__wrapper"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {title ? <h1 className="mastHead__wrapper__title">{title}</h1> : null}
        {subtitle ? (
          <h3 className="mastHead__wrapper__title">{subtitle}</h3>
        ) : null}
      </div>
    </div>
  );
}

MastHead.propTypes = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default MastHead;
