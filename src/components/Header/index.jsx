import React, { useState, useRef } from "react";
import { FormattedMessage } from "react-intl";
import classNames from "classnames";

import messages from "./messages";
import imgLogo from "../../images/pachimaru.png";

import Button from "../Button";
import { useWindowWidth } from "../../utils/helpers/useWindowWidth";
import { useDockNav } from "./helper/useDockNav";
import { IconX, IconHamburger } from "../Icons";
import { useOutsideListener } from "../../utils/helpers/useOutsideListener";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Get width of window upon resize
  const width = useWindowWidth();
  const isMobile = !!(width < 768);

  // Get if user scrolled past nav
  const isDocked = useDockNav();

  //  Click elsewhere to hide mobile nav
  const handleOutsideClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };
  const componentRef = useRef(null);
  useOutsideListener(componentRef, handleOutsideClick);

  // Render brand logo and click
  const renderBrand = classModifier => (
    <Button
      buttonType="link"
      classes={classNames("brand__btn", {
        [`brand__btn--${classModifier}`]: !!classModifier
      })}
      route="/"
    >
      <img
        className={classNames("brand__img", {
          [`brand__img--${classModifier}`]: !!classModifier
        })}
        src={imgLogo}
        alt="navigation toggler"
      />

      <FormattedMessage {...messages.home} />
    </Button>
  );

  return (
    <nav
      className={classNames(
        "navigation",
        {
          "is-docked": isMobile || isDocked
        },
        {
          "is-mobile": isMobile
        }
      )}
    >
      <div className="navigation__container">
        <div className="navigation__container__hamburger--mobile">
          <Button
            buttonType="onClick"
            classes="navigation__container__hamburger__btn"
            handleRoute={() => setIsOpen(!isOpen)}
          >
            <IconHamburger />
          </Button>
        </div>
        <div className="navigation__container__brand">{renderBrand()}</div>
        <div
          className={classNames("navigation__container__main", {
            "mobile-is-open": isOpen
          })}
          ref={componentRef}
        >
          <Button
            buttonType="onClick"
            classes="navigation__container__main__back--mobile"
            handleRoute={() => setIsOpen(false)}
          >
            <IconX />
          </Button>
          {renderBrand("mobile")}
          {/* <Button
            buttonType="anchor"
            classes="navigation__container__main__btn"
            route="/Hong_Stephanie_Resume_S.pdf"
          >
            <FormattedMessage {...messages.resume} />
          </Button> */}
          <Button
            buttonType="link"
            classes="navigation__container__main__btn"
            route="/about"
          >
            <FormattedMessage {...messages.about} />
          </Button>
          <Button
            buttonType="link"
            classes="navigation__container__main__btn"
            route="/projects"
          >
            <FormattedMessage {...messages.projects} />
          </Button>
        </div>
        <div className="navigation__container__overlay--mobile" />
      </div>
    </nav>
  );
}

export default Header;
