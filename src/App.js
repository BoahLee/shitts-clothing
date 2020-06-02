import React from "react";

import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const JohnnyPage = () => (
  <div>
    <h1>Johnny Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/johnny" component={JohnnyPage} />
      </Switch>
    </div>
  );
}

export default App;
