import React from "react";
import PropTypes from "prop-types";

import PageHelmet from "../../components/PageHelmet";
import MastHead from "../../components/MastHead";
import Button from "../../components/Button";
import Card from "../../components/Card";

import ImageJavascript from "../../images/javascript.png";
import ImageAboutMe from "../../images/about-me.png";
import ImageGameController from "../../images/game-controller.png";
import ImageMedia from "../../images/media.png";
import ImageHighlightBg from "../../images/highlight-bg.png";

const CONTENT = {
  HomePage: {
    mastHead: {
      backgroundImage: ImageJavascript,
      title: "Stephanie Hong",
      subtitle: "Hello World"
    },
    description:
      "Independent developer who is passionate about learning more about programming",
    overlapLeftImage: { src: ImageHighlightBg, alt: "highlight bg" },
    overlapRightImage: { src: ImageHighlightBg, alt: "highlight bg" },
    cardTitle: "Highlights",
    cards: [
      {
        buttonType: "link",
        buttonRoute: "/about",
        title: "About Me",
        image: { src: ImageAboutMe, alt: "About Me" },
        content: "Puzzle-loving, game-playing, web developing girl"
      },
      {
        buttonType: "link",
        buttonRoute: "/projects",
        title: "Game Projects",
        image: { src: ImageGameController, alt: "Projects" },
        content: "Games are how I learn best!"
      },
      {
        buttonType: "link",
        buttonRoute: "/media",
        title: "Media",
        image: { src: ImageMedia, alt: "Media" },
        content: "Past creative projects I designed or collaborated in"
      }
    ]
  }
};

function HomePage() {
  return (
    <React.Fragment>
      <PageHelmet
        title="Home Page"
        metas={[
          {
            name: "description",
            content: "Stephanie Hong: Home Page"
          }
        ]}
      />

      <div className="home">
        <MastHead
          backgroundImage={CONTENT.HomePage.mastHead.backgroundImage}
          title={CONTENT.HomePage.mastHead.title}
          subtitle={CONTENT.HomePage.mastHead.subtitle}
        />

        <h4 className="home__description">{CONTENT.HomePage.description}</h4>

        
        <div className="home__cards" style={{ backgroundImage: `url(${ImageHighlightBg})` }}>
          {/* <img
            className="home__cards__bg"
            src={ImageHighlightBg}
            alt="highlight bg"
          /> */}
          <div className="home__cards__container">
            <h1 className="home__cards__container__title">
              {CONTENT.HomePage.cardTitle}
            </h1>
            {CONTENT.HomePage.cards
              ? CONTENT.HomePage.cards.map(card => (
                  <Button
                    buttonType={card.buttonType}
                    classes="home__cards__container__card"
                    route={card.buttonRoute}
                    key={card.buttonRoute}
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      content={card.content}
                    />
                  </Button>
                ))
              : null}
          </div>
        </div>
      </div>
    </React.Fragment>
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
