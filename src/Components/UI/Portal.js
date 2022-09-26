import React, { useState } from "react";
import PortalReactDOM from "react-dom";

const BackDrop = (props) => {
  return (
    <div className="backdrop" onClick={props.closePortal}>
      <button
        className="btn border border-dark text-dark fw-bold rounded-circle position-absolute end-0 m-4 bg-secondary"
        onClick={props.closePortal}
      >
        X
      </button>
    </div>
  );
};

const Portal = (props) => {
  const backDropElement = document.getElementById("backdrop-root");
  const overlayElement = document.getElementById("overlay-root");

  return (
    <React.Fragment>
      {PortalReactDOM.createPortal(
        <BackDrop closePortal={props.closePortal} />,
        backDropElement
      )}
      {PortalReactDOM.createPortal(props.component, overlayElement)}
    </React.Fragment>
  );
};

export default Portal;
