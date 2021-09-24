import axios from 'axios'

function ApiCovid(){
    function ApiCovid19(){
        axios.get('https://disease.sh/v3/covid-19/continents/South America')
        .then(
            response => console.log(response.data)
        ) 
    }

    ApiCovid19()
    return (
        <>
        </>
    )
}

export default ApiCovid