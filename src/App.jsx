import React from "react";
import "./App.scss";
import Range from "./components/Range";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Range Input</h1>
          <Range />
        </div>
      </div>
    </div>
  );
}

export default App;
