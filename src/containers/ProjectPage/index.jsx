import React from "react";
import PropTypes from "prop-types";

import PageHelmet from "../../components/PageHelmet";
import Button from "../../components/Button";

const CONTENT = {
  ProjectsPage: {
    games: [
      {
        title: "Block Breaker",
        images: [
          {
            src: "/img/img-block-breaker/bb1.PNG",
            alt: "Block Breaker Home Screen"
          },
          {
            src: "/img/img-block-breaker/bb2.PNG",
            alt: "Block Breaker Gameplay"
          },
          {
            src: "/img/img-block-breaker/bb3.PNG",
            alt: "Block Breaker Gameplay"
          }
        ]
      }
    ]
  }
};

function ProjectsPage() {
  const renderGames = game => {
    return (
      <div className="game">
        <Button
          buttonType="anchor"
          classes="project-title"
          route="/game-project-builds/block-breaker/index.html"
        >
          <h2>{game.title}</h2>
        </Button>
        {game.images.map(image => (
          <Button
            buttonType="modal"
            classes="game__img"
            alt={image.alt}
            route={image.src}
          ></Button>
        ))}
      </div>
    );
  };

  const renderVideos = () => {};

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

      <div className="projects__cards">
        <div class="row">
          <h1>Games</h1>
          {CONTENT.ProjectsPage.games.map(game => renderGames(game))}
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h2>Cinematography</h2>
            </div>
          </div>
          <div class="row media-content">
            <div class="card-deck col-lg-3 col-md-6">
              <div class="card">
                <a
                  data-fancybox
                  data-small-btn="true"
                  href="https://www.youtube.com/watch?v=7i3aRYkAwrY"
                >
                  <img
                    class="card-img-top img-fluid"
                    src="http://img.youtube.com/vi/7i3aRYkAwrY/mqdefault.jpg"
                  />
                </a>
                <div class="card-body">
                  <p class="card-text">
                    APhA-ASP Pacific Orientation Video 2016
                  </p>
                </div>
              </div>
            </div>
            <div class="card-deck col-lg-3 col-md-6">
              <div class="card">
                <a
                  data-fancybox
                  data-small-btn="true"
                  href="https://www.youtube.com/watch?v=fpZKsoT8WbU"
                >
                  <img
                    class="card-img-top img-fluid"
                    src="http://img.youtube.com/vi/fpZKsoT8WbU/mqdefault.jpg"
                  />
                </a>
                <div class="card-body">
                  <p class="card-text">
                    APhA Conference 2016 in Baltimore, Maryland
                  </p>
                </div>
              </div>
            </div>
            <div class="card-deck col-lg-3 col-md-6">
              <div class="card">
                <a
                  data-fancybox
                  data-small-btn="true"
                  href="https://www.youtube.com/watch?v=hMWMDmtauVQ"
                >
                  <img
                    class="card-img-top img-fluid"
                    src="http://img.youtube.com/vi/hMWMDmtauVQ/mqdefault.jpg"
                  />
                </a>
                <div class="card-body">
                  <p class="card-text">
                    Pacific Spring Picnic: Superhero Themed
                  </p>
                </div>
              </div>
            </div>
            <div class="card-deck col-lg-3 col-md-6">
              <div class="card">
                <a
                  data-fancybox
                  data-small-btn="true"
                  href="https://www.youtube.com/watch?v=aBv9NiNHhhw"
                >
                  <img
                    class="card-img-top img-fluid"
                    src="http://img.youtube.com/vi/aBv9NiNHhhw/mqdefault.jpg"
                  />
                </a>
                <div class="card-body">
                  <p class="card-text">Draw My Life: Pharmacists</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <h2>Photoshop</h2>
            </div>
          </div>
          <div class="row imglist">
            <div class="col-md-4">
              <a
                data-fancybox="photoshop-img-gallery"
                data-caption="Overwatch Heroes as Dogs"
                href="./img/photoshop/puppy-rumble.png"
              >
                <img
                  class="ps-img"
                  src="./img/photoshop/puppy-rumble-cropped.png"
                  alt="block breaker intro"
                />
              </a>
            </div>
            <div class="col-md-4">
              <a
                data-fancybox="photoshop-img-gallery"
                data-caption="Pacific Spring Picnic 2016 T-Shirt Design"
                href="./img/photoshop/spring-picnic.jpg"
              >
                <img
                  class="ps-img"
                  src="./img/photoshop/spring-picnic-cropped.jpg"
                  alt="Pacific Spring Picnic 2016 T-Shirt Design"
                />
              </a>
            </div>
            <div class="col-md-4">
              <a
                data-fancybox="photoshop-img-gallery"
                data-caption="Steven Universe Cosplay with CG Background"
                href="./img/photoshop/stevonnie.jpg"
              >
                <img
                  class="ps-img"
                  src="./img/photoshop/stevonnie-cropped.jpg"
                  alt="Steven Universe Cosplay with CG Background"
                />
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <h2>Photography</h2>
            </div>
          </div>
          <div class="row imglist">
            <div class="col-lg-3 col-md-6">
              <a
                data-fancybox="bb-image-gallery"
                data-caption="Photoshoot with graduation caps using tripod"
                href="./img/photography/grad-picture.png"
              >
                <img
                  class="photography-img"
                  src="./img/photography/grad-picture-cropped.png"
                  alt="graduation photo with overwatch grad caps"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <a
                data-fancybox="bb-image-gallery"
                data-caption="White Coat Ceremony 2017 featuring Mark Ruiz"
                href="./img/photography/mark.jpg"
              >
                <img
                  class="photography-img"
                  src="./img/photography/mark-cropped.jpg"
                  alt="Mark Ruiz White Coat Ceremony"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <a
                data-fancybox="bb-image-gallery"
                data-caption="Pharmacy photoshoot using an independent pharmacy location featuring Wesley Sweis"
                href="./img/photography/wesley.jpg"
              >
                <img
                  class="photography-img"
                  src="./img/photography/wesley-cropped.jpg"
                  alt="Wesley Sweis counseling"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <a
                data-fancybox="bb-image-gallery"
                data-caption="An aspiring musician/pharmacist - Ryan Abundo"
                href="./img/photography/ryan.jpg"
              >
                <img
                  class="photography-img"
                  src="./img/photography/ryan-cropped.jpg"
                  alt="Ryan Abundo with blue guitar"
                />
              </a>
            </div>
          </div>
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
