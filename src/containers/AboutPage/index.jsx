import React from "react";
import PropTypes from "prop-types";

import PageHelmet from "../../components/PageHelmet";
import MastHead from "../../components/MastHead";
import Card from "../../components/Card";

import CONTENT from "../CMS";

function AboutPage() {
  return (
    <div>
      <div className="about">
        <PageHelmet
          title="Home Page"
          metas={[
            {
              name: "description",
              content: "Stephanie Hong: Home Page"
            }
          ]}
        />

        <MastHead
          backgroundImage={CONTENT.AboutPage.mastHead.backgroundImage}
          title={CONTENT.AboutPage.mastHead.title}
          subtitle={CONTENT.AboutPage.mastHead.subtitle}
        />
        <p>World zoom animation, spells out name animation</p>

        <div
          className="about__cards"
          style={
            CONTENT.AboutPage.cardBackground
              ? { backgroundImage: `url(${CONTENT.AboutPage.cardBackground})` }
              : null
          }
        >
          <h1 className="about__cards__title">{CONTENT.AboutPage.cardTitle}</h1>
          <div className="about__cards__container">
            {CONTENT.AboutPage.cards
              ? CONTENT.AboutPage.cards.map(card => (
                  <Card key={card.content.title} content={card.content} />
                ))
              : null}
          </div>
        </div>

        <div
          className="about__endorsements"
          style={
            CONTENT.AboutPage.cardBackground
              ? { backgroundImage: `url(${CONTENT.AboutPage.cardBackground})` }
              : null
          }
        >
          <h1 className="about__endorsements__title">{CONTENT.AboutPage.cardTitle}</h1>
          <div className="about__endorsements__container">
            {CONTENT.AboutPage.endorsements
              ? CONTENT.AboutPage.endorsements.map(card => (
                  <Card key={card.content.title} content={card.content} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

AboutPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};

export default AboutPage;
