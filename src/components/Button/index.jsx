/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link based on button type
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends React.PureComponent {
    renderAnchorTag() {
        const { route, handleRoute } = this.props;

        if (handleRoute) {
            return (
                <a href={route} onClick={handleRoute} target="_blank">
                    {this.renderContent()}
                </a>
            );
        }
        return (
            <a href={route} target="_blank">
                {this.renderContent()}
            </a>
        );
    }

    renderLink() {
        const { route, handleRoute } = this.props;

        if (handleRoute) {
            return (
                <Link to={route} onClick={handleRoute}>
                    {this.renderContent()}
                </Link>
            );
        }
        return <Link to={route}>{this.renderContent()}</Link>;
    }

    renderHandleRoute() {
        const { handleRoute } = this.props;
        return <div onClick={handleRoute}>{this.renderContent()}</div>;
    }

    renderContent() {
        const { children } = this.props;
        return children;
    }

    render() {
        const { buttonType, classes } = this.props;
        let button = null;

        switch (buttonType) {
            case 'anchor':
                button = this.renderAnchorTag();
                break;
            case 'link':
                button = this.renderLink();
                break;
            case 'handleRoute':
                button = this.renderHandleRoute();
                break;
            default:
                button = 'No Button Type';
                break;
        }
        return <button className={classes}>{button}</button>;
    }
}

Button.propTypes = {
    buttonType: PropTypes.string,
    classes: PropTypes.string,
    handleRoute: PropTypes.func,
    route: PropTypes.string,
};

export default Button;
