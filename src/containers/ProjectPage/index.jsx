import React from "react";
import PropTypes from "prop-types";

import PageHelmet from "../../components/PageHelmet";
import Game from "../../components/Phaser";
import CardButton from "../../components/CardButton";

import CONTENT from "../CMS";

function ProjectsPage() {
  // game route="/game-project-builds/block-breaker/index.html"

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

      <div className="projects__games">
        <div className="projects__container">
          <h1 className="projects__container__title">
            {CONTENT.ProjectsPage.gamesTitle}
          </h1>
          {CONTENT.ProjectsPage.games
            ? CONTENT.ProjectsPage.games.map(card => (
                <CardButton
                  content={card.content}
                  button={card.button}
                  key={card.content.title}
                />
              ))
            : null}
        </div>
      </div>

      <div className="projects__videos">
        <div className="projects__container">
          <h1 className="projects__container__title">
            {CONTENT.ProjectsPage.videosTitle}
          </h1>
          {CONTENT.ProjectsPage.videos
            ? CONTENT.ProjectsPage.videos.map(card => (
                <CardButton
                  content={card.content}
                  button={card.button}
                  key={card.content.title}
                />
              ))
            : null}
        </div>
      </div>

      <div className="projects__photos">
        <div className="projects__container">
          <h1 className="projects__container__title">
            {CONTENT.ProjectsPage.photoTitle}
          </h1>
          {CONTENT.ProjectsPage.photos
            ? CONTENT.ProjectsPage.photos.map(card => (
                <CardButton
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
