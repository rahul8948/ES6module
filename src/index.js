import React from "react";
import ReactDOM from "react-dom";
import * as r from "./App";

import rahul, { paswan, rohit } from "./App";
// import { paswan } from "./App";

ReactDOM.render(
  <>
    <ol>
      <li>Rahul</li>
      <li>{rahul}</li>
      <li>{paswan}</li>
      <li>{rohit()}</li>
      <h1>Another Method for calling</h1>
      <li>{r.default}</li>
      <li>{r.paswan}</li>
      <li>{r.rohit()}</li>
    </ol>
  </>,
  document.getElementById("root")
);
