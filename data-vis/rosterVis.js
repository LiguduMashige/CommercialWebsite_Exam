/* const url = 'https://serie-a-league.p.rapidapi.com/team/roster?teamId=110';
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
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const result = await response.json();
    return result.athletes;
  } catch (error) {
    console.error(error);
  }
}

// Create bubble chart with D3.js
async function createBubbleChart() {
  const athletes = await fetchTeamRoster();
  if (!athletes) return;

  const width = 800;
  const height = 600;

  // Tooltip element
  const tooltip = d3.select("#tooltip");

  // Create SVG container
  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Color scale
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Create simulation
  const simulation = d3.forceSimulation(athletes)
    .force("charge", d3.forceManyBody().strength(5))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(d => d.age * 1.5));

  // Create bubbles
  const nodes = svg.selectAll("circle")
    .data(athletes)
    .enter()
    .append("circle")
    .attr("r", d => d.age)
    .attr("fill", (d, i) => color(i))
    .attr("stroke", "#000")
    .attr("stroke-width", 1.5)
    .on("mouseover", (event, d) => {
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip.html(`
        <strong>${d.fullName}</strong><br>
        Age: ${d.age}<br>
        Citizenship: ${d.citizenship}<br>
        Position: ${d.displayName}<br>
        <img src="${d.citizenshipCountry}" alt="${d.citizenship}" style="width: 30px;">
      `)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", () => {
      tooltip.transition().duration(200).style("opacity", 0);
    });

  // Update simulation on each tick
  simulation.on("tick", () => {
    nodes
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  });
}

// Initialize the bubble chart
createBubbleChart(); */
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
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const result = await response.json();
    return result.athletes;
  } catch (error) {
    console.error(error);
  }
}

// Create bubble chart with D3.js
async function createBubbleChart() {
  const athletes = await fetchTeamRoster();
  if (!athletes) return;

  const width = 800;
  const height = 600;

  // Tooltip element
  const tooltip = d3.select("#tooltip");

  // Create SVG container
  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Color scale
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Create simulation
  const simulation = d3.forceSimulation(athletes)
    .force("charge", d3.forceManyBody().strength(5))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(d => d.age * 1.5));

  // Create bubbles
  const nodes = svg.selectAll("circle")
    .data(athletes)
    .enter()
    .append("circle")
    .attr("r", d => d.age)
    .attr("fill", (d, i) => color(i))
    .attr("stroke", "#000")
    .attr("stroke-width", 1.5)
    .on("mouseover", (event, d) => {
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip.html(`
        <strong>${d.fullName}</strong><br>
        Age: ${d.age}<br>
        Citizenship: ${d.citizenship}<br>
        Position: ${d.position}<br>
        Jersey: ${d.jersey}<br>
        <img src="${d.citizenshipCountry}" alt="${d.citizenship}" style="width: 30px;">
      `)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", () => {
      tooltip.transition().duration(200).style("opacity", 0);
    });

  // Update simulation on each tick
  simulation.on("tick", () => {
    nodes
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  });
}

// Initialize the bubble chart
createBubbleChart();