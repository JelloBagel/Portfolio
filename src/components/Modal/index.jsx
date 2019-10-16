import React, { useState } from "react";
import classNames from "classnames";

import ModalView from "./ModalView";

export const Modal = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      <button
        className={classNames(props.classes, {
          playBtn: props.type === "modal-video"
        })}
        onClick={() => setIsModalOpen(true)}
      >
        {props.children}
      </button>

      <ModalView
        {...props}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </React.Fragment>
  );
};
