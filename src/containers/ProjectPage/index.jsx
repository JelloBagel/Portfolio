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
      // subtitle: "Hello World"
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

        <div
          className="home__cards"
          style={{ backgroundImage: `url(${ImageHighlightBg})` }}
        >
          <div class="row">
            <div class="col-md-8">
              <div class="project-box">
                <a
                  class="project-title"
                  href="./game-project-builds/block-breaker/index.html"
                  target="_blank"
                >
                  Block Breaker
                </a>
              </div>
            </div>
          </div>
          <div class="row imglist">
            <div class="col-md-4">
              <a
                data-fancybox="bb-image-gallery"
                data-caption="Block Breaker Home Screen"
                href="./img/img-block-breaker/bb1.PNG"
              >
                <img
                  class="bb-game-img"
                  src="./img/img-block-breaker/bb1.PNG"
                  alt="block breaker intro"
                />
              </a>
            </div>
            <div class="col-md-4">
              <a
                data-fancybox="bb-image-gallery"
                data-caption="Block Breaker Gameplay"
                href="./img/img-block-breaker/bb2.PNG"
              >
                <img
                  class="bb-game-img"
                  src="./img/img-block-breaker/bb2.PNG"
                  alt="block breaker gameplay"
                />
              </a>
            </div>
            <div class="col-md-4">
              <a
                data-fancybox="bb-image-gallery"
                data-caption="Block Breaker Gameplay"
                href="./img/img-block-breaker/bb3.PNG"
              >
                <img
                  class="bb-game-img"
                  src="./img/img-block-breaker/bb3.PNG"
                  alt="block breaker gameplay"
                />
              </a>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <h2>Videography</h2>
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
