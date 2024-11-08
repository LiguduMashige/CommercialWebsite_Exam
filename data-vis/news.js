const url = 'https://serie-a-league.p.rapidapi.com/news?limit=10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0285bf0b7dmsh9bdbd21c0386887p163adbjsn3745c6019150',
		'x-rapidapi-host': 'serie-a-league.p.rapidapi.com'
	}
};

async function fetchNews() {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const result = await response.json(); // Use .json() if you expect JSON response
		console.log(result);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

// Call the async function
fetchNews();