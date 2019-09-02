import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

function Card({ button, content }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${content.backgroundImage})` }}
    >
      <Button
        buttonType={button.buttonType}
        classes="card__container"
        route={button.buttonRoute}
        key={button.buttonRoute}
      >
        {content.image ? (
          <img
            className="card__container__img"
            src={content.image.src}
            alt={content.image.alt}
          />
        ) : null}
        <div className="card__container__text">
          {content.title ? (
            <h4 className="card__container__text__title">{content.title}</h4>
          ) : null}
          {content.content ? (
            <p className="card__container__text__content">{content.content}</p>
          ) : null}
        </div>
      </Button>
    </div>
  );
}

Card.propTypes = {
  button: PropTypes.object,
  content: PropTypes.object
};
export default Card;
