/*const url = 'https://serie-a-league.p.rapidapi.com/news?limit=10';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0285bf0b7dmsh9bdbd21c0386887p163adbjsn3745c6019150',
        'x-rapidapi-host': 'serie-a-league.p.rapidapi.com'
    }
};

let descriptions = [];
let currentIndex = 0;

async function fetchNews() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        descriptions = result.map(item => item.description); // Collect descriptions into an array
        showDescription(); // Show the first description
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function showDescription() {
    const descriptionContainer = document.getElementById('descriptionContainer');
    
    if (currentIndex < descriptions.length) {
        descriptionContainer.textContent = descriptions[currentIndex];
        currentIndex++;
    } else {
        // Hide the "Read More" button once we've displayed all descriptions
        document.getElementById('readMoreButton').style.display = 'none';
    }
}

document.getElementById('readMoreButton').addEventListener('click', showDescription);

// Call the async function to fetch news on page load
fetchNews();*/
const url = 'https://serie-a-league.p.rapidapi.com/news?limit=10';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '93b6fad7b7msh40e888386a49b8ap180d6ajsnac270d0b8ac6',
                'x-rapidapi-host': 'serie-a-league.p.rapidapi.com'
            }
        };

        let descriptions = [];
        let currentIndex = 0;

        async function fetchNews() {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                descriptions = result.map(item => item.description); // Collect descriptions
                showDescription(); // Show the first description
            } catch (error) {
                console.error('Error fetching data:', error);
                document.getElementById('descriptionContainer').textContent = 'Failed to load descriptions.';
            }
        }

        function showDescription() {
            const descriptionContainer = document.getElementById('descriptionContainer');
            
            if (currentIndex < descriptions.length) {
                descriptionContainer.textContent = descriptions[currentIndex];
                currentIndex++;
            }

            // Disable the button if no more descriptions are left
            if (currentIndex >= descriptions.length) {
                document.getElementById('readMoreButton').disabled = true;
            }
        }

        document.getElementById('readMoreButton').addEventListener('click', showDescription);

        // Fetch news on page load
        fetchNews();