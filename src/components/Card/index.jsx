import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import {
  IconPointingHand,
  IconFistBump,
  IconHandshake,
  IconFindGroup
} from "../Icons";

const Card = ({ content }) => {
  const renderSvg = svg => {
    let icon = null;
    switch (svg) {
      case "IconPointingHand":
        icon = <IconPointingHand />;
        break;
      case "IconFistBump":
        icon = <IconFistBump />;
        break;
      case "IconHandshake":
        icon = <IconHandshake />;
        break;
      case "IconFindGroup":
        icon = <IconFindGroup />;
        break;
      default:
        icon = null;
    }
    return <div className="card__container__svg">{icon}</div>;
  };
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
        {content.svg ? renderSvg(content.svg) : null}
        {content.title ? (
          <h4 className="card__container__title">{content.title}</h4>
        ) : null}
        {content.subtitle ? (
          <h4 className="card__container__subtitle">{content.subtitle}</h4>
        ) : null}
        {content.content ? (
          <div
            className="card__container__content"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        ) : null}
        {content.button ? (
          <Button
            buttonType={content.button.buttonType}
            classes="card__container__btn"
            route={content.button.buttonRoute}
            key={content.button.buttonRoute}
          />
        ) : null}
      </div>
    </div>
  );
};

Card.propTypes = {
  content: PropTypes.object
};
export default Card;
