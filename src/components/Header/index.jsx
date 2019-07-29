import React from 'react';
import { FormattedMessage } from 'react-intl';

import './base.scss';
import messages from './messages';
import imgStack from '../../images/stack.png';

import Button from '../Button';

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { navToggle: false };

        this.handleNavToggle = this.handleNavToggle.bind(this);
    }

    handleNavToggle() {
        const { navToggle } = this.state;
        this.setState({
            navToggle: !navToggle,
        });
    }

    render() {
        return (
            <nav className="navbar navbar-fixed navbar-transparent">
                <div className="container">
                    <div className="navbar-translate">
                        <Button
                            buttonType="link"
                            classes="navbar-brand"
                            route="/"
                        >
                            <FormattedMessage {...messages.home} />
                        </Button>
                        <Button
                            buttonType="handleRoute"
                            classes="navbar-toggler"
                            handleRoute={this.handleNavToggle}
                        >
                            <img
                                className="nav-hamburger-img"
                                src={imgStack}
                                alt="navbar-toggler"
                            />
                        </Button>
                    </div>
                    <ul className="navbar-nav navbar-collapse">
                        <li className="nav-item">
                            <Button
                                buttonType="anchor"
                                classes="nav-link"
                                route="/Hong_Stephanie_Resume_S.pdf"
                            >
                                <FormattedMessage {...messages.resume} />
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button
                                buttonType="link"
                                classes="nav-link"
                                route="/about"
                            >
                                <FormattedMessage {...messages.about} />
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button
                                buttonType="link"
                                classes="nav-link"
                                route="/projects"
                            >
                                <FormattedMessage {...messages.projects} />
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button
                                buttonType="link"
                                classes="nav-link"
                                route="/media"
                            >
                                <FormattedMessage {...messages.media} />
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button
                                buttonType="link"
                                classes="nav-link"
                                route="/contact"
                            >
                                <FormattedMessage {...messages.contact} />
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
