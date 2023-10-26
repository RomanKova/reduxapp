import React, { useState, useEffect } from 'react';
const App = () => {

  const [peopleList, setPeopleList] = useState([])

  useEffect(() => {

    fetch("https://swapi.dev/api/people").then((result) => {
      return result.json()
    }).then(body => {
      //console.log("body", body)
      setPeopleList(body.results)
    })
 
  }, [])

  const renderPeopleList = () => {
    const content = peopleList.map((people, index) => {
      const { name } = people
      return (
        <li key={index}>
          {name}
        </li>
      )
    })

    return content
  }

  console.log("peopleList", peopleList)
  return (
    <div className="App">
      <ul>
        {renderPeopleList()}
      </ul>

    </div>
  );
}

export default App;
