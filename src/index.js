import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

/**
 * https://github.com/garbles/why-did-you-update
 * why-did-you-update is not yet compatible with React 15.6+,
 * lines 13-20 fix that
 */

// {
//   let createClass = React.createClass;
//   Object.defineProperty(React, "createClass", {
//     set: nextCreateClass => {
//       createClass = nextCreateClass;
//     },
//   });
// }

// if (process.env.NODE_ENV !== "production") {
//   const { whyDidYouUpdate } = require("why-did-you-update");
//   whyDidYouUpdate(React);
// }

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
