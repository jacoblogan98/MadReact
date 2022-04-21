import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import MadForm from "./MadForm";
import Saved from "./Saved";
import SubmittedStory from "./SubmittedStory";
import SavedStory from "./SavedStory";

function App() {
  const [inputs, setInputs] = useState([])

  function handleInputs(formInputs) {
    setInputs(formInputs)
  }

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/form/:id">
          <MadForm handleInputs={handleInputs}/>
        </Route>
        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="/submittedstory/:id">
          <SubmittedStory inputs={inputs} />
        </Route>
        <Route path="/savedstory/:id">
          <SavedStory />
        </Route>
        <Route path="*">
          <h1>404 not found.</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
