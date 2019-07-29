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

const Content = {
  HomePage: {
    mastHead: {
      backgroundImage: ImageJavascript,
      title: "Stephanie Hong",
      subtitle: "Hello World"
    },
    description:
      "Independent developer who is passionate about learning more about programming",
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
          backgroundImage={Content.HomePage.mastHead.backgroundImage}
          title={Content.HomePage.mastHead.title}
          subtitle={Content.HomePage.mastHead.subtitle}
        />

        <h4 className="home__description">{Content.HomePage.description}</h4>

        <div className="home__cards">
          {Content.HomePage.cards
            ? Content.HomePage.cards.map(card => (
                <Button
                  buttonType={card.buttonType}
                  classes="home__cards__card"
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
