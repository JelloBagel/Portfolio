import React from "react";
import PropTypes from "prop-types";

import PageHelmet from "../../components/PageHelmet";
import Card from "../../components/Card";
import NumberToText from "../../components/NumberToText";

import CONTENT from "../CMS";

function HomePage() {
  return (
    <div className="home">
      <PageHelmet
        title="Home Page"
        metas={[
          {
            name: "description",
            content: "Stephanie Hong: Home Page"
          }
        ]}
      />

      <NumberToText
        string="Stephanie Hong"
        description={CONTENT.HomePage.description}
      />

      <div
        className="home__cards"
        style={{ backgroundImage: `url(${CONTENT.HomePage.cardBackground})` }}
      >
        <div className="home__cards__container">
          <h1 className="home__cards__container__title">
            {CONTENT.HomePage.cardTitle}
          </h1>
          {CONTENT.HomePage.cards
            ? CONTENT.HomePage.cards.map(card => (
                <Card
                  content={card.content}
                  button={card.button}
                  key={card.content.title}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};

export default HomePage;
