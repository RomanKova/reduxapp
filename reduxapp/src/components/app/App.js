import React, { useState, useEffect } from 'react';
import Header from "../header"
import RandomPlanet from "../random-planet"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  People  from "../people"
import  PeopleItem  from "../people-item"

const App = () => {

  


  return (
    <Router>
    <div className="App">
      
      <Header />
      <RandomPlanet />
      <Switch> 
        {/* <Route path="/planets" exact component={<Planets/>} /> */}
        <Route path="/people" exact component={People} />
        <Route path="/people/:peopleId" exact component={PeopleItem} />
        
        <Route render={() => <h2>Page not found</h2>}/>
      </Switch>
      {/* <People /> */}
      {/* <div className="row mb-2">
        <div className="col-md-6">
          PeopleList
           
        </div>

        <div className="col-md-6">
          PersonDetails
        </div>
      </div> */}

    </div>
    </Router>
  );
}

export default App;
