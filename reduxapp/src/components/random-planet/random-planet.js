import React, { useEffect, useState } from 'react';
import SwapiService from '../../services/swapi-service';

import './random-planet.css'

const RandomPlanet = () => {
    const [planet, setPlanet] = useState({})
    const swapiService = new SwapiService();

    useEffect(() => {
        swapiService.getPlanet(2).then(res => {
            setPlanet(res)
        })

       
    },[])
    console.log("planet", planet)
    return (
        <div className="container">
            <div className="row random-planet">
                {planet.name}
            </div>
        </div>
    )
}

export default RandomPlanet