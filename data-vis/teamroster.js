const url = 'https://serie-a-league.p.rapidapi.com/team/roster?teamId=110';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a875dc5cbemsha6bf1fc010ff196p1844cdjsncadb96e441d7',
		'x-rapidapi-host': 'serie-a-league.p.rapidapi.com'
	}
};

async function fetchTeamRoster() {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const result = await response.json();  // Parse response as JSON
		console.log(result);  // Log data to the console
	} catch (error) {
		console.error(error);  // Log any errors
	}
}

// Call the async function
fetchTeamRoster();
