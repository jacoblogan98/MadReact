import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import MadForm from "./MadForm";
import Saved from "./Saved";

function App() {
  const [stories, setStories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/stories')
        .then(resp => resp.json())
        .then(fetchStories => setStories(fetchStories))
    }, [])

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home stories={stories}/>
        </Route>
        <Route path="/form/:id">
          <MadForm stories={stories}/>
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
