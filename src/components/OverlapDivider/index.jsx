import React from "react";
import PropTypes from "prop-types";

function OverlapDivider({ image }) {
  return (
    <React.Fragment>
      {image ? (
        <img className="overlapDivider__img" src={image.src} alt={image.alt} />
      ) : null}
    </React.Fragment>
  );
}

OverlapDivider.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  content: PropTypes.string
};
export default OverlapDivider;
