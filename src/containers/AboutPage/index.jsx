import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import messages from "../../components/Footer/messages";

import Button from "../../components/Button";
import { IconLinkedIn, IconGithub } from "../../components/Icons";
import PageHelmet from "../../components/PageHelmet";
import MastHead from "../../components/MastHead";
import Card from "../../components/Card";

import CONTENT from "../CMS";

function AboutPage() {
  return (
    <div>
      <div className="about">
        <PageHelmet
          title="Stephanie Hong"
          metas={[
            {
              name: "About Page",
              content: "Stephanie Hong: About Page",
            },
          ]}
        />

        <MastHead
          backgroundImage={CONTENT.AboutPage.mastHead.backgroundImage}
          title={CONTENT.AboutPage.mastHead.title}
          subtitle={CONTENT.AboutPage.mastHead.subtitle}
        />

        <div className="about__me">
          {CONTENT.AboutPage.me
            ? CONTENT.AboutPage.me.map((card) => (
                <Card key={card.content.title} content={card.content} />
              ))
            : null}
        </div>

        <div
          className="about__endorsements"
          style={
            CONTENT.AboutPage.cardBackground
              ? { backgroundImage: `url(${CONTENT.AboutPage.cardBackground})` }
              : null
          }
        >
          <h1 className="about__endorsements__title">
            {CONTENT.AboutPage.cardTitle}
          </h1>
          <div className="about__endorsements__container">
            {CONTENT.AboutPage.endorsements
              ? CONTENT.AboutPage.endorsements.map((card) => (
                  <Card key={card.content.title} content={card.content} />
                ))
              : null}
          </div>
        </div>

        <div
          className="about__cards"
          style={
            CONTENT.AboutPage.cardBackground
              ? { backgroundImage: `url(${CONTENT.AboutPage.cardBackground})` }
              : null
          }
        >
          <div className="about__cards__container">
            {CONTENT.AboutPage.cards
              ? CONTENT.AboutPage.cards.map((card) => (
                  <Card key={card.content.title} content={card.content} />
                ))
              : null}
          </div>
        </div>

        <div className="footer__social">
          <div className="footer__social__container">
            <h1 className="footer__social__container__title">
              <FormattedMessage {...messages.socialMessage} />
            </h1>
            <Button
              buttonType="anchor"
              classes="footer__social__container__btn"
              route="https://github.com/JelloBagel"
            >
              <IconGithub />
            </Button>
            <Button
              buttonType="anchor"
              classes="footer__social__container__btn"
              route="https://www.linkedin.com/in/stephanie-hong-jellobagel/"
            >
              <IconLinkedIn />
            </Button>
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
  onChangeUsername: PropTypes.func,
};

export default AboutPage;
