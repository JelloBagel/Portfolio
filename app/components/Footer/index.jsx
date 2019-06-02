import React from 'react';
import { FormattedMessage } from 'react-intl';

import './base.scss';
import messages from './messages';
import imgGitHub from '../../images/github.png';
import imgLinkedIn from '../../images/linked.png';

import Button from '../Button';
import LocaleToggle from 'data-modules/LocaleToggle';

function Footer() {
    return (
        <footer className="footer">
            <section>
                <LocaleToggle />
            </section>
            <p className="col-md-8">
                <FormattedMessage
                    {...messages.copyrightMessage}
                    values={{
                        author: (
                            <a href="https://www.linkedin.com/in/stephanie-hong-jellobagel/">
                                Stephanie Hong
                            </a>
                        ),
                    }}
                />
            </p>
            <p className="col-md-8">
                <Button
                    buttonType="anchor"
                    route="https://github.com/JelloBagel"
                >
                    <img src={imgGitHub} alt="GitHub." />
                </Button>
                <Button
                    buttonType="anchor"
                    route="https://www.linkedin.com/in/stephanie-hong-jellobagel/"
                >
                    <img src={imgLinkedIn} alt="LinkedIn." />
                </Button>
            </p>
        </footer>
    );
}

export default Footer;
