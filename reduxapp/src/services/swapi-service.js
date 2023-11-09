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

    getPeopleList = async () => {
        const peopleList = await this.getRersources(`/people`)

        return peopleList
    }

}