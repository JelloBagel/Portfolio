import React from "react";
import PropTypes from "prop-types";

import PageHelmet from "../../components/PageHelmet";
import MastHead from "../../components/MastHead";
import Card from "../../components/Card";

import ImageOvercooked from "../../images/overcooked.png";
import ImageHighlightBg from "../../images/highlight-bg-chars.png";
import ImageDogs from "../../images/photoshop/puppy-rumble.png";

const CONTENT = {
  HomePage: {
    mastHead: {
      backgroundImage: ImageOvercooked,
      title: "Stephanie Hong"
    },
    description:
      "Independent developer who is passionate about learning more about programming",
    cardTitle: "Highlights",
    cards: [
      {
        button: {
          buttonType: "link",
          buttonRoute: "/about"
        },
        content: {
          title: "About Me",
          image: { src: ImageDogs, alt: "About Me" },
          content: "Puzzle-loving, game-playing, web developing girl"
        }
      },
      {
        button: {
          buttonType: "link",
          buttonRoute: "/projects"
        },
        content: {
          image: { src: ImageDogs, alt: "Game Projects" },
          title: "Game Projects",
          content: "Games are how I learn best!"
        }
      },
      {
        button: {
          buttonType: "link",
          buttonRoute: "/media"
        },
        content: {
          title: "Media",
          image: { src: ImageDogs, alt: "Media" },
          content: "Past creative projects"
        }
      }
    ]
  }
};

function HomePage() {
  return (
    <div className="home">
      <PageHelmet
        title="About Page"
        metas={[
          {
            name: "description",
            content: "Stephanie Hong: About Page"
          }
        ]}
      />

      <MastHead
        backgroundImage={CONTENT.HomePage.mastHead.backgroundImage}
        title={CONTENT.HomePage.mastHead.title}
        subtitle={CONTENT.HomePage.mastHead.subtitle}
      />

      <h4 className="home__description">{CONTENT.HomePage.description}</h4>

      <div
        className="home__cards"
        style={{ backgroundImage: `url(${ImageHighlightBg})` }}
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
