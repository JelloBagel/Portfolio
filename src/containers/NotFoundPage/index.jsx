import React from "react";
import PropTypes from "prop-types";

import PageHelmet from "../../components/PageHelmet";

const CONTENT = {
  NotFoundPage: {}
};

function HomePage() {
  return (
    <div className="notFound">
      <PageHelmet
        title="Not Found Page"
        metas={[
          {
            name: "404 Not Found",
            content: "Stephanie Hong: Not Found Page"
          }
        ]}
      />

      <h1>Not Found</h1>
      <p>TODO add game</p>
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
