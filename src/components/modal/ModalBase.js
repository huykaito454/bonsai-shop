import React from "react";
import Portal from "../portal/Portal";
import { CSSTransition } from "react-transition-group";
const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      <CSSTransition in={visible} timeout={250} unmountOnExit className="zoom">
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="flex items-center justify-center"
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
