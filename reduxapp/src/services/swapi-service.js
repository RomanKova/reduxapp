const API_URL = "https://swapi.dev/api"

export default class SwapiService{

    getRersources = async (url) => {
        const result = await fetch(`${API_URL}${url}`);

        return await result.json()
    }

    getPlanet = async (id) => {
        const planet = await this.getRersources(`/planets/${id}`)

        return planet
    }

    getPlanetList = async (id) => {
        const planets = await this.getRersources(`/planets`)

        return planets
    }

    getPeopleList = async () => {
        const peopleList = await this.getRersources(`/people`)

        return peopleList
    }

    getPeopleInfo = async (id) => {
        const peopleInfo = await this.getRersources(`/people/${id}`)

        return peopleInfo
    }

}