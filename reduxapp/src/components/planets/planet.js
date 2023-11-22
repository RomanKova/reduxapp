import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import { Link } from "react-router-dom"

const  Planet  = () =>{

  const [planetList, setPlanetList] = useState([])

  const swapiService = new SwapiService();


  useEffect(() => {

    
    swapiService.getPlanetList().then(res => {
      console.log("result oo", res)
      setPlanetList(res.results)
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
  const renderPlanetList = () => {
    const content = planetList.map((planet, index) => {
      //как мы получаем имя и url из peopleList?
      const { name, url } = planet
      //console.log("name jjkjk" + skin_color);
      const id = extractId(url)
      return (
        <li key={index}>
          <Link to={`/planet/${id}`}>{name}</Link>
        </li>
      )
    })

    return content
  }

    return (
        <div className="container">
            <div className="row people-list">
              <ul>
        {renderPlanetList()}
      </ul>
            </div>
        </div>
    )
}

export default Planet