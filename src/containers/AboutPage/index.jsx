import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import PageHelmet from "../../components/PageHelmet";

import ImageOvercooked from "../../images/overcooked.png";
import ImageDogs from "../../images/photoshop/puppy-rumble.png";

const CONTENT = {
  AboutPage: {
    mastHead: {
      backgroundImage: ImageOvercooked,
      title: "Hello"
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

        <h1>World Animation</h1>
        <iframe
          title="San Francisco Bay Area"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d680613.9215593301!2d-122.55716071541039!3d37.58607520603601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808583a3a688d7b5%3A0x8c891b8457461fa9!2sSan+Francisco+Bay+Area%2C+CA!5e0!3m2!1sen!2sus!4v1533108743910"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>

        <div className="home__cards">
          <div>
            <h2>Contact Me</h2>
            <h3>For more information</h3>
            <address className="contact-details">
              <p>
                If you have any questions, I am happy to answer. Feel free to
                say hello!
              </p>
              <h4>Email</h4>
              <a href="mailto:stephielhong@gmail.com">stephielhong@gmail.com</a>
              <h4>Linked In</h4>
              <a href="mailto:stephielhong@gmail.com">stephielhong@gmail.com</a>
            </address>
          </div>
          <div></div>
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

export default withRouter(connect()(AboutPage));
