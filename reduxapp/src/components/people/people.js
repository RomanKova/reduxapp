import React, { useState, useEffect } from 'react';


const  People  = () =>{

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

    return (
        <div className="container">
            <div className="row people-list">
              <ul>
        {renderPeopleList()}
      </ul>
            </div>
        </div>
    )
}

export default People