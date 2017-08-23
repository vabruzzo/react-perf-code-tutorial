import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

/**
 * https://github.com/garbles/why-did-you-update
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
