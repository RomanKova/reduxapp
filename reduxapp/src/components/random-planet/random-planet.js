import React, { useEffect, useState } from 'react';
import SwapiService from '../../services/swapi-service';

import './random-planet.css'

const RandomPlanet = () => {
    const [planet, setPlanet] = useState({})
    const [randomId, setRandomId] = useState(null)

    const swapiService = new SwapiService();

    useEffect(() => {//

        setInterval(() => {
            const randomPlanetId = Math.floor(Math.random()*15)+2
            setRandomId(randomPlanetId)
            swapiService.getPlanet(randomPlanetId).then(res => {
                setPlanet(res)
            })
        }, 5000);
     

       
    },[])

    return (
        <div className="container">
            <div className="row random-planet">
            <div>{planet.name}</div>
                <div>
            {randomId && 
            <img 
                src={`https://starwars-visualguide.com/assets/img/planets/${randomId}.jpg`} 
                alt={planet.name}/> }

                </div>
                <div>{planet.population}</div>
                <div>{planet.diameter}</div>
                <div>{planet.gravity}</div>
                <div>{planet.terrain}</div>
            </div>
        </div>
    )
}

export default RandomPlanet