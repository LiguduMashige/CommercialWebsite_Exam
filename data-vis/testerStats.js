/* const url = 'https://serie-a-league.p.rapidapi.com/team/statistic/scoring?teamId=110&season=2022';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0285bf0b7dmsh9bdbd21c0386887p163adbjsn3745c6019150',
        'x-rapidapi-host': 'serie-a-league.p.rapidapi.com'
    }
};

// Define an async function to fetch and process data
async function fetchTeamStats() {
    try {
        const response = await fetch(url, options);
        
        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json(); // Parse JSON response
        const stats = result.results.stats; // Access the 'stats' array

        // Find the 'goals' and 'assists' data under 'stats'
        const goalsData = stats.find(stat => stat.category === 'goals');
        const assistsData = stats.find(stat => stat.category === 'assists');

        // Check if goalsData and assistsData are defined before accessing 'leaders'
        const goalsAthleteIds = goalsData ? goalsData.leaders.map(leader => leader.athlete.id) : [];
        const assistsAthleteIds = assistsData ? assistsData.leaders.map(leader => leader.athlete.id) : [];

        console.log("Goals Athlete IDs:", goalsAthleteIds);
        console.log("Assists Athlete IDs:", assistsAthleteIds); // Optional

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the async function to execute the fetch and process data
fetchTeamStats(); */
const url = 'https://serie-a-league.p.rapidapi.com/team/statistic/scoring?teamId=110&season=2022';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0285bf0b7dmsh9bdbd21c0386887p163adbjsn3745c6019150',
        'x-rapidapi-host': 'serie-a-league.p.rapidapi.com'
    }
};

// Define an async function to fetch data
async function fetchTeamStats() {
    try {
        const response = await fetch(url, options);
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse the response as JSON
        processStats(result); // Process and log the desired stats
    } catch (error) {
        console.error('Error fetching data:', error); // Log any errors to the console
    }
}

// Function to process and log specific stats (Goals and Assists)
function processStats(data) {
    // Check if data.stats exists and is an array
    if (!data.stats || !Array.isArray(data.stats)) {
        console.log('Stats data is missing or not in expected format.');
        return;
    }

    // Filter the stats array for 'Goals' and 'Assists'
    const goalStats = data.stats.find(stat => stat.displayName === 'Goals');
    const assistStats = data.stats.find(stat => stat.displayName === 'Assists');

    // Check if both goalStats and assistStats are defined
    if (goalStats && assistStats) {
        console.log('Goals and Assists data:');
        
        // Iterate through the leaders in goals
        goalStats.leaders.forEach(goalLeader => {
            const athleteId = goalLeader.athlete.id;
            const goals = goalLeader.value;

            // Find the matching assists data for the same athlete
            const assistLeader = assistStats.leaders.find(leader => leader.athlete.id === athleteId);
            const assists = assistLeader ? assistLeader.value : 0;

            // Log the athlete id, goals, and assists
            console.log(`Athlete ID: ${athleteId}, Goals: ${goals}, Assists: ${assists}`);
        });
    } else {
        console.log('Goals or Assists data not found.');
    }
}

// Call the async function to execute the fetch
fetchTeamStats();
