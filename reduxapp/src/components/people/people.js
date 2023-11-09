import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import { Link } from "react-router-dom"

const  People  = () =>{

  const [peopleList, setPeopleList] = useState([])

  const swapiService = new SwapiService();


  useEffect(() => {

    swapiService.getPeopleList().then(res => {
      //console.log("res", res)
      setPeopleList(res.results)
  })

    // fetch("https://swapi.dev/api/people").then((result) => {
    //   return result.json()
    // }).then(body => {
    //   //console.log("body", body)
    //   setPeopleList(body.results)
    // })

  }, [])

  const extractId = (item) => {
    const idReg = /\/([0-9]*)\/$/;
    return item.match(idReg)[1];
}
  const renderPeopleList = () => {
    const content = peopleList.map((people, index) => {
      const { name, url } = people
      const id = extractId(url)
      return (
        <li key={index}>
          <Link to={`/people/${id}`}>{name}</Link>
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