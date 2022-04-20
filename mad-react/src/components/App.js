import React from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import MadForm from "./MadForm";
import Saved from "./Saved";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/form">
          <MadForm />
        </Route>
        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="*">
          <h1>404 not found.</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
