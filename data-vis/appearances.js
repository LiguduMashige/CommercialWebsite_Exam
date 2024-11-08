 const url = 'https://serie-a-league.p.rapidapi.com/team/statistic/discipline?teamId=110&season=2022';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '93b6fad7b7msh40e888386a49b8ap180d6ajsnac270d0b8ac6',
        'x-rapidapi-host': 'serie-a-league.p.rapidapi.com'
    }
};

// Define an async function
const fetchDisciplineStats = async () => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json(); // Using .json() instead of .text() for parsing JSON response
        console.log(result);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the async function
fetchDisciplineStats(); 
