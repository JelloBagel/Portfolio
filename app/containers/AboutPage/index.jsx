/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import './base.scss';

import {
    makeSelectRepos,
    makeSelectLoading,
    makeSelectError,
} from 'data-modules/App/selectors';
import PageHelmet from '../../components/PageHelmet';
import MastHead from '../../components/MastHead';

class AboutPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PageHelmet
                    title="Home Page"
                    metas={[
                        {
                            name: 'description',
                            content:
                                'Stephanie Hong: About Page',
                        },
                    ]}
                />

                <MastHead />

                <div className="main main-raised">
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img
                                        className="profile-img"
                                        src="./img/Profile.jpg"
                                        alt="Stephanie Hong"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <h2>Stephanie Hong</h2>
                                    <p className="p-about-me">
                                        Graduated in 2018 from University of the
                                        Pacific with a Doctor of Pharmacy and a
                                        Minor in Computer Science.
                                    </p>
                                    <p className="p-about-me">
                                        As a young girl, I was an avid player of
                                        video games, and over the years, my
                                        interests expanded from playing games to
                                        creating them as well – resulting in a
                                        passion for computer programming.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

AboutPage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    onSubmitForm: PropTypes.func,
    username: PropTypes.string,
    onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    repos: makeSelectRepos(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
    return {
        onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
        onSubmitForm: evt => {
            if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            dispatch(loadRepos());
        },
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(withConnect)(AboutPage);
