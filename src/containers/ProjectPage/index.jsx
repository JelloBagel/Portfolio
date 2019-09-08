import React from "react";
import PropTypes from "prop-types";

import PageHelmet from "../../components/PageHelmet";
import Button from "../../components/Button";
import Game from "../../components/Phaser";
import Card from "../../components/Card";

import CONTENT from "../CMS";

function ProjectsPage() {
  const renderGames = game => {
    return (
      <div className="game" key={game.title}>
        <Button
          buttonType="anchor"
          classes="project-title"
          route="/game-project-builds/block-breaker/index.html"
        >
          <h2>{game.title}</h2>
        </Button>
        {game.images.map(image => (
          <Button
            key={image.alt}
            buttonType="modal"
            classes="game__img"
            alt={image.alt}
            route={image.src}
          ></Button>
        ))}
      </div>
    );
  };

  return (
    <div className="projects">
      <PageHelmet
        title="Projects Page"
        metas={[
          {
            name: "description",
            content: "Stephanie Hong: Projects Page"
          }
        ]}
      />

      <Game />

      <div className="projects__cards" style={{ backgroundImage: `url()` }}>
        <div className="projects__cards__container">
          <h1 className="projects__cards__container__title">
            {CONTENT.ProjectsPage.gamesTitle}
          </h1>
          {CONTENT.ProjectsPage.games
            ? CONTENT.ProjectsPage.games.map(game => renderGames(game))
            : null}
        </div>

        <div className="projects__cards__container">
          <h1 className="projects__cards__container__title">
            {CONTENT.ProjectsPage.cardTitle}
          </h1>
          {CONTENT.ProjectsPage.cards
            ? CONTENT.ProjectsPage.cards.map(card => (
                <Card
                  content={card.content}
                  button={card.button}
                  key={card.content.title}
                />
              ))
            : null}
        </div>

        <div className="projects__photos__container">
          <h1 className="projects__photos__container__title">
            {CONTENT.ProjectsPage.photoTitle}
          </h1>
          {CONTENT.ProjectsPage.photos
            ? CONTENT.ProjectsPage.photos.map(card => (
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

ProjectsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};

export default ProjectsPage;
