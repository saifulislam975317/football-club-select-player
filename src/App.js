import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';



function App() {

  return (
    <Router>
     <Switch>
       <Route path="/home">
        <Home/>
       </Route>
       <Route path="/league/:leagueId">
        <LeagueDetails/>
       </Route>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="*">
          <NoMatch/>
       </Route>
    </Switch>  
      </Router>
  );
}

export default App;
