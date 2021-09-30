import React from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import TeamDetails from "./components/TeamDetails";
import TeamList from "./components/TeamList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/team/:id" component={TeamDetails} />
          <Route path="/" component={TeamList} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
