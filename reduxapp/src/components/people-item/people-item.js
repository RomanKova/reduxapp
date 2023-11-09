import React, { useEffect, useState } from 'react';
import SwapiService from '../../services/swapi-service';
import { useParams } from "react-router-dom"

import './people-item.css'

const PeopleItem = () => {
    const { peopleId } = useParams();
    console.log("peopleId ++ ", peopleId)
    const [peopleInfo, setPeopleInfo] = useState({})


    const swapiService = new SwapiService();

    useEffect(() => {//
        console.log("Вызываем функцию об одном персонаже")
       
    },[])

    return (
        <div className="container">
           People Item {peopleId}
        </div>
    )
}

export default PeopleItem