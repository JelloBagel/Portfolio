import React from "react";
import PropTypes from "prop-types";

function Card({ title, image, content }) {
  return (
    <React.Fragment>
      <img className="card__img" src={image.src} alt={image.alt} />
      <h4 className="card__title">{title}</h4>
      <p className="card__content">{content}</p>
    </React.Fragment>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  content: PropTypes.string
};
export default Card;
