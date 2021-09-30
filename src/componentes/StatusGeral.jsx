import React, { useState } from "react"
import axios from 'axios'

import '../css/Status.css'

function Geral(){

    const [status, setStatus] = useState({
        'casosHoje': null,
        'mortesHoje': null,
        'recuperadosHoje': null,
        'mortesTotal': null,
        'recuperadosTotal': null,
        'casosTotal': null,
    })
    
    axios.get('https://disease.sh/v3/covid-19/all').then(
        response => {
            setStatus({
                'casosHoje': response.data.todayCases,
                'mortesHoje': response.data.todayDeaths,
                'recuperadosHoje': response.data.todayRecovered,
                'mortesTotal': response.data.deaths,
                'recuperadosTotal': response.data.recovered,
                'casosTotal': response.data.cases
            })
        }
    )

    function divInfo(info, p){
        return(
            <div className = 'card'>
                <p>{info}</p>
                <p>{p}</p>
            </div>
        )
    }

    return (
        <>
            <h2>Estatísticas Gerais COVID-19</h2>
            
            <div className = 'ContainerCards'>
                <div className = 'containerHoje'>
                    {divInfo(status['casosHoje'], 'Casos Covid-19 Hoje')}
                </div>

                <div className = 'containerTotal'>
                    {divInfo}
                </div>
            </div>
        </>
    )
}

export default Geral