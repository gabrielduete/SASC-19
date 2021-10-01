import React from 'react'
import axios from 'axios'
import ApiMapa from './Mapa'

function ApiCovid(){

    // const [arrays, setArrays] = useState({
    //     'arrayCasos': [],
    //     'arrayMortes': [],
    //     'arrayMortesHoje': [],
    //     'arrayRecuperados': [],
    //     'arrayRecuperadosHoje': [],
    // })

    const arrayCasos = []
    const arrayMortes = []
    const arrayMortesHoje = []
    const arrayRecuperados = []
    const arrayRecuperadosHoje = []


    axios.get('https://disease.sh/v3/covid-19/countries/argentina,brasil,bolivia,chile,colombia,ecuador,falkland Islands (Malvinas),french Guiana,guyana,paraguay,peru,suriname,uruguay,venezuela')
    .then(
        response => response.data.forEach(casos => {
            arrayCasos.push(casos.cases)
            arrayMortes.push(casos.deaths)
            arrayMortesHoje.push(casos.todayDeaths)
            arrayRecuperados.push(casos.recovered)
            arrayRecuperadosHoje.push(casos.todayRecovered)

        }))
    
    return (
        <>
            <ApiMapa 
                arrayCasos = {arrayCasos}
                arrayMortes = {arrayMortes}
                arrayMortesHoje = {arrayMortesHoje}
                arrayRecuperados = {arrayRecuperados}
                arrayRecuperadosHoje = {arrayRecuperadosHoje}
            />
        </>
    )
}

export default ApiCovid