import React from "react";
import { FormattedMessage } from "react-intl";

import messages from "./messages";

import Button from "../Button";
import { IconLinkedIn, IconGithub } from "../Icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <div className="footer__social__container">
          <h1 className="footer__social__container__title">
            <FormattedMessage {...messages.socialMessage} />
          </h1>
          <Button
            buttonType="anchor"
            classes="footer__social__container__btn"
            route="https://github.com/JelloBagel"
          >
            <IconGithub />
          </Button>
          <Button
            buttonType="anchor"
            classes="footer__social__container__btn"
            route="https://www.linkedin.com/in/stephanie-hong-jellobagel/"
          >
            <IconLinkedIn />
          </Button>
        </div>
      </div>
      <div className="footer__copyright">
        <FormattedMessage
          {...messages.copyrightMessage}
          values={{
            author: (
              <a href="https://www.linkedin.com/in/stephanie-hong-jellobagel/">
                STEPHANIE HONG
              </a>
            ),
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
