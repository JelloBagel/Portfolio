import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import messages from "./messages";
import imgStack from "../../images/stack.png";

import Button from "../Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation navigation--fixed">
      <div className="navigation__mobile">
        <Button
          buttonType="onClick"
          classes="navigation__mobile__btn"
          handleRoute={() => setIsOpen(!isOpen)}
        >
          <img
            className="navigation__mobile__hamburger"
            src={imgStack}
            alt="navigation toggler"
          />
        </Button>
      </div>
      <div className="navigation__brand">
        <Button buttonType="link" classes="navigation__brand__btn" route="/">
          <FormattedMessage {...messages.home} />
        </Button>
      </div>
      <div className="navigation__main">
        <Button
          buttonType="anchor"
          classes="navigation__main__btn"
          route="/Hong_Stephanie_Resume_S.pdf"
        >
          <FormattedMessage {...messages.resume} />
        </Button>
        <Button
          buttonType="link"
          classes="navigation__main__btn"
          route="/about"
        >
          <FormattedMessage {...messages.about} />
        </Button>
        <Button
          buttonType="link"
          classes="navigation__main__btn"
          route="/projects"
        >
          <FormattedMessage {...messages.projects} />
        </Button>
        <Button
          buttonType="link"
          classes="navigation__main__btn"
          route="/media"
        >
          <FormattedMessage {...messages.media} />
        </Button>
        <Button
          buttonType="link"
          classes="navigation__main__btn"
          route="/contact"
        >
          <FormattedMessage {...messages.contact} />
        </Button>
      </div>
    </nav>
  );
}

export default Header;
