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

  const width = 900;
  const height = 700;

  // Tooltip element
  const tooltip = d3.select("#tooltip");

  // Create SVG container and center it
  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("display", "block")
    .style("margin", "0 auto");

  // Color scale
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Create simulation
  const simulation = d3.forceSimulation(athletes)
    .force("charge", d3.forceManyBody().strength(10))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(d => d.age * 2)); // Increase bubble size

  // Create bubbles
 // Create bubbles
const nodes = svg.selectAll("circle")
.data(athletes)
.enter()
.append("circle")
.attr("r", d => d.age * 1.3) // Slightly smaller bubbles
.attr("fill", (d, i) => color(i))
.attr("stroke", "#000")
.attr("stroke-width", 1.5)
.on("mouseover", (event, d) => {
  tooltip.transition().duration(200).style("opacity", 0.9);
  tooltip.html(`
    <strong>${d.fullName}</strong><br>
    Age: ${d.age}<br>
    Citizenship: ${d.citizenship}<br>
    Position: ${d.position.name}<br>
    Jersey: ${d.jersey}<br>
    Height: ${d.displayHeight}
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

async function createBubbleChart() {
  const athletes = await fetchTeamRoster();
  if (!athletes) return;

  document.getElementById('loading-screen').style.display = 'none';

  const container = document.getElementById('chart-container');
  const width = container.clientWidth;
  const height = container.clientHeight;

  const tooltip = d3.select("#tooltip");
  const svg = d3.select("#chart").append("svg")
    .attr("width", width)
    .attr("height", height);

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const simulation = d3.forceSimulation(athletes)
    .force("charge", d3.forceManyBody().strength(10))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(d => d.age * 1.3));

  const nodes = svg.selectAll("circle")
    .data(athletes)
    .enter()
    .append("circle")
    .attr("r", d => d.age * 1.3)
    .attr("fill", (d, i) => color(i))
    .attr("stroke", "#000")
    .attr("stroke-width", 1.5)
    .on("mouseover", (event, d) => {
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip.html(`
        <strong>${d.fullName}</strong><br>
        Age: ${d.age}<br>
        Citizenship: ${d.citizenship}<br>
        Position: ${d.position.name}<br>
        Jersey: ${d.jersey}<br>
        Height: ${d.displayHeight}
      `)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", () => {
      tooltip.transition().duration(200).style("opacity", 0);
    });

  simulation.on("tick", () => {
    nodes.attr("cx", d => d.x).attr("cy", d => d.y);
  });

  // Button Actions
  document.getElementById('split-btn').addEventListener('click', () => {
    simulation
      .force("x", d3.forceX(d => {
        if (d.position.name === "Midfielder") return width * 0.75;
        if (d.position.name === "Goalkeeper") return width * 0.25;
        if (d.position.name === "Defender") return width * 0.25;
        if (d.position.name === "Forward") return width * 0.75;
        return width / 2;
      }))
      .force("y", d3.forceY(d => {
        if (d.position.name === "Midfielder") return height * 0.25;
        if (d.position.name === "Goalkeeper") return height * 0.25;
        if (d.position.name === "Defender") return height * 0.75;
        if (d.position.name === "Forward") return height * 0.75;
        return height / 2;
      }))
      .alpha(1).restart();
  });

  document.getElementById('combine-btn').addEventListener('click', () => {
    simulation
      .force("x", d3.forceX(width / 2))
      .force("y", d3.forceY(height / 2))
      .alpha(1).restart();
  });
}

// Initialize the bubble chart
createBubbleChart();