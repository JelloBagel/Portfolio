import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

function Card({ content }) {
  return (
    <div
      className="card"
      style={
        content.backgroundImage
          ? { backgroundImage: `url(${content.backgroundImage})` }
          : null
      }
    >
      <div className="card__container">
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
          {content.subtitle ? (
            <h4 className="card__container__text__subtitle">
              {content.subtitle}
            </h4>
          ) : null}
          {content.content ? (
            <div
              className="card__container__text__content"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          ) : null}
          {content.button ? (
            <Button
              buttonType={content.button.buttonType}
              classes="card__container__text__btn"
              route={content.button.buttonRoute}
              key={content.button.buttonRoute}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  content: PropTypes.object
};
export default Card;
