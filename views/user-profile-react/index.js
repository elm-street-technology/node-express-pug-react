import React from "react";
import { render } from "react-dom";

import App from "./App";

function rerender(props) {
  const container = document.getElementById("react");
  if (container) {
    render(<App {...props} />, container);
  }
}

rerender(window.reactProps);
