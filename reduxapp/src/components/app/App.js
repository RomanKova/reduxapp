import React, { useState, useEffect } from 'react';
import Header from "../header"
import RandomPlanet from "../random-planet"

const App = () => {

  // const [peopleList, setPeopleList] = useState([])

  // useEffect(() => {

  //   fetch("https://swapi.dev/api/people").then((result) => {
  //     return result.json()
  //   }).then(body => {
  //     //console.log("body", body)
  //     setPeopleList(body.results)
  //   })

  // }, [])

  // const renderPeopleList = () => {
  //   const content = peopleList.map((people, index) => {
  //     const { name } = people
  //     return (
  //       <li key={index}>
  //         {name}
  //       </li>
  //     )
  //   })

  //   return content
  // }


  return (
    <div className="App">
      {/* <ul>
        {renderPeopleList()}
      </ul> */}
      <Header />
      <RandomPlanet />

      <div className="row mb-2">
        <div className="col-md-6">
          PeopleList
           
        </div>

        <div className="col-md-6">
          PersonDetails
        </div>
      </div>

    </div>
  );
}

export default App;
