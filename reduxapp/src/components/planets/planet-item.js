import React, { useEffect, useState } from 'react';
import SwapiService from '../../services/swapi-service';
import { useParams } from "react-router-dom"

import './people-item.css'

const PlanetItem = () => {
    const { planetId } = useParams();
    console.log("planetId ++ ", planetId)
    const [planetInfo, setPlanetInfo] = useState({})


    const swapiService = new SwapiService();

    useEffect(() => {//
        console.log("Вызываем функцию об одном персонаже")
       
    },[])

    return (
        <div className="container">
        
           Planet {planetId}
        </div>
    )
}

export default PlanetItem