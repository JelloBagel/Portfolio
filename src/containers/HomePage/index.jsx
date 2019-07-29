import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

import PageHelmet from "../../components/PageHelmet";
import MastHead from "../../components/MastHead";

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

      <MastHead />

      <div className="main main-raised">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h4 className="main-description">
                  Independent developer who is passionate about learning more
                  about programming
                </h4>
              </div>
            </div>
            <div className="features">
              <div className="row">
                <div className="col-md-4 about-me">
                  <button className="main-info button-feature button-about">
                    <img
                      className="icon icon-about-me"
                      src="./img/about-me.png"
                      alt="About Me"
                    />
                    <h4 className="icon-title">About Me</h4>
                    <p>Puzzle-loving, game-playing, web developing girl</p>
                  </button>
                </div>
                <div className="col-md-4 game-controller">
                  <button className="main-info button-feature button-game">
                    <img
                      className="icon icon-game-controller"
                      src="./img/game-controller.png"
                      alt="Projects"
                    />
                    <h4 className="icon-title">Game Projects</h4>
                    <p>Games are one of the best ways to learn something!</p>
                  </button>
                </div>
                <div className="col-md-4 media">
                  <button className="main-info button-feature button-media">
                    <img
                      className="icon icon-media"
                      src="./img/media.png"
                      alt="Media"
                    />
                    <h4 className="icon-title">Media</h4>
                    <p>Past creative projects I designed or collaborated in</p>
                  </button>
                </div>
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

// const mapStateToProps = {

// };

// export function mapDispatchToProps(dispatch) {
//   return {};
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );

export default HomePage;
