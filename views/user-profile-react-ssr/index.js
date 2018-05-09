import React from "react";
import { hydrate } from "react-dom";

import App from "../user-profile-react/App";

function rehydrate(props) {
  const container = document.getElementById("react");
  if (container) {
    hydrate(<App {...props} />, container);
  }
}

rehydrate(window.reactProps);
