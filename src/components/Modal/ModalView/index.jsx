import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Button from "../../Button";
import { IconX } from "../../Icons";
import { useOutsideListener } from "../../../utils/helpers/useOutsideListener";

export default ({ type, alt, file, setIsModalOpen, isModalOpen }) => {
  const appRoot = document.getElementById("root");

  //  Click elsewhere to hide mobile nav
  const handleOutsideClick = () => {
    setIsModalOpen(false);
  };
  const componentRef = useRef(null);
  useOutsideListener(componentRef, handleOutsideClick);

  let media = null;
  switch (type) {
    case "modal-img":
      media = <img src={file} alt={alt} />;
      break;
    case "modal-video":
      media = (
        <iframe
          frameBorder="0"
          title={alt}
          width="100%"
          height="100%"
          src={`${file}?autoplay=1&rel=0&enablejsapi=1`}
          allow="autoplay; fullscreen"
        />
      );
      break;
    default:
      break;
  }

  // console.log("media", type, alt, file);
  return isModalOpen
    ? ReactDOM.createPortal(
        <div className="modal">
          <Button
            buttonType="onClick"
            classes="modal__close"
            handleRoute={handleOutsideClick}
          >
            <IconX />
          </Button>
          <div className="modal__body">
            <div className="modal__body__wrapper" ref={componentRef}>
              {media}
            </div>
          </div>
        </div>,
        appRoot
      )
    : null;
};
