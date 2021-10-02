import axios from "axios";

export const getCovidStatusCountries = async () => {
	const response = await axios.get(
		"https://disease.sh/v3/covid-19/countries/argentina,brasil,bolivia,chile,colombia,ecuador,falkland Islands (Malvinas),french Guiana,guyana,paraguay,peru,suriname,uruguay,venezuela"
	);

	return response;
};

module.export = { getCovidStatusCountries };
