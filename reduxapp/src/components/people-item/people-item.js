import React, { useEffect, useState } from 'react';
import SwapiService from '../../services/swapi-service';
import { useParams } from "react-router-dom"
import spinner from "../../images/spinner.gif"

import './people-item.css'

const PeopleItem = () => {
    const { peopleId } = useParams();
    console.log("peopleId ++ ", peopleId)
    const [peopleInfo, setPeopleInfo] = useState({})
    const [isFetching, setIsFetching] = useState(false)


    const swapiService = new SwapiService();

    useEffect(() => {//
        setIsFetching(true)
        swapiService.getPeopleInfo(peopleId).then(res => {
            setPeopleInfo(res)
            setIsFetching(false)
            //console.log("people", res)
        })

    }, [])

    const { name, birth_year } = peopleInfo;

    const renderSpinner = () => {
        return <img src={spinner} alt="spinner" style={{ borderRadius: "100%", width: 50 }} />
    }

    const renderContent = () => {
        return (
            <>
                <div>
                    <img
                        style={{ width: 200 }}
                        src={`https://starwars-visualguide.com/assets/img/characters/${peopleId}.jpg`}
                        alt={peopleInfo.name} />
                </div>
                <div>
                    Birth year : {birth_year}
                </div>
                <div>
                    Name: {name}
                </div>
                <div>
                    Mass: {peopleInfo.mass}
                </div>
                <div>
                    Height : {peopleInfo.height}
                </div>
            </>
        )
    }

    const content = isFetching ? renderSpinner() : renderContent()

    return (
        <div className="container">
            {content}
        </div>
    )
}

export default PeopleItem