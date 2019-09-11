import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

function CardButton({ button, content }) {
  return (
    <div
      className="cardButton"
      style={
        content.backgroundImage
          ? { backgroundImage: `url(${content.backgroundImage})` }
          : null
      }
    >
      <Button
        buttonType={button.buttonType}
        classes="cardButton__container"
        route={button.buttonRoute}
        key={button.buttonRoute}
      >
        {content.image ? (
          <img
            className="cardButton__container__img"
            src={content.image.src}
            alt={content.image.alt}
          />
        ) : null}
        <div className="cardButton__container__text">
          {content.title ? (
            <h4 className="cardButton__container__text__title">{content.title}</h4>
          ) : null}
          {content.subtitle ? (
            <h4 className="cardButton__container__text__subtitle">
              {content.subtitle}
            </h4>
          ) : null}
          {content.content ? (
            <p className="cardButton__container__text__content">{content.content}</p>
          ) : null}
        </div>
      </Button>
    </div>
  );
}

CardButton.propTypes = {
  button: PropTypes.object,
  content: PropTypes.object
};
export default CardButton;
