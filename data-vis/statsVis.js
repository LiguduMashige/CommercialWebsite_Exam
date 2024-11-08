/* const width = 800, height = 600, margin = {top: 20, right: 30, bottom: 50, left: 50};

        // Create SVG inside scatter plot div
        const svg = d3.select("#scatter-plot")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        // Scales for x and y axes
        const xScale = d3.scaleLinear().domain([0, 30]).range([margin.left, width - margin.right]);
        const yScale = d3.scaleLinear().domain([0, 40]).range([height - margin.bottom, margin.top]);

        // Add axes
        svg.append("g").attr("transform", `translate(0,${height - margin.bottom})`).call(d3.axisBottom(xScale).ticks(15));
        svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(yScale).ticks(20));

        // Axis labels
        svg.append("text").attr("x", width / 2).attr("y", height - 10).style("text-anchor", "middle").text("Assists");
        svg.append("text").attr("transform", "rotate(-90)").attr("y", 15).attr("x", -height / 2).style("text-anchor", "middle").text("Goals");

        // Tooltip for displaying athlete names
        const tooltip = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);

        // Fetch data and create scatter plot
        async function fetchAndPlotData() {
            const url = 'https://serie-a-league.p.rapidapi.com/team/statistic/scoring?teamId=110&season=2022';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '0285bf0b7dmsh9bdbd21c0386887p163adbjsn3745c6019150',
                    'x-rapidapi-host': 'serie-a-league.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const result = await response.json();

                // Extract athlete data
                const athletes = result.results[0].stats[0].leaders.map(d => ({
                    name: d.athlete.displayName,
                    goals: d.athlete.statistics[0].value,
                    assists: d.athlete.statistics[1].value
                }));

                // Create scatter plot
                const dots = svg.selectAll("circle")
                    .data(athletes)
                    .enter()
                    .append("circle")
                    .attr("cx", d => xScale(d.assists))
                    .attr("cy", d => yScale(d.goals))
                    .attr("r", 5)
                    .style("fill", "steelblue")
                    .style("cursor", "pointer")
                    .on("mouseover", function(event, d) {
                        tooltip.transition().duration(200).style("opacity", 1);
                        tooltip.html(d.name)
                            .style("left", (event.pageX + 10) + "px")
                            .style("top", (event.pageY - 15) + "px");
                    })
                    .on("mouseout", function() {
                        tooltip.transition().duration(200).style("opacity", 0);
                    })
                    .on("click", function(event, d) {
                        const scaleFactor = 2;
                        const [x, y] = d3.pointer(event);
                        svg.transition().duration(750).call(
                            zoom.transform,
                            d3.zoomIdentity
                                .translate(width / 2 - x * scaleFactor, height / 2 - y * scaleFactor)
                                .scale(scaleFactor)
                        );
                    });

                // Zoom behavior
                const zoom = d3.zoom()
                    .scaleExtent([1, 5])
                    .on("zoom", function(event) {
                        svg.attr("transform", event.transform);
                    });

                svg.call(zoom);

                // Double-click to reset zoom
                svg.on("dblclick.zoom", function() {
                    svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
                });

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchAndPlotData(); */
        // Set up SVG canvas dimensions and margins within the container
        const width = 800, height = 600, margin = {top: 20, right: 30, bottom: 50, left: 50};

        // Create SVG inside scatter plot div
        const svg = d3.select("#scatter-plot")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        // Scales for x and y axes
        const xScale = d3.scaleLinear().domain([0, 30]).range([margin.left, width - margin.right]);
        const yScale = d3.scaleLinear().domain([0, 40]).range([height - margin.bottom, margin.top]);

        // Add axes
        svg.append("g").attr("transform", `translate(0,${height - margin.bottom})`).call(d3.axisBottom(xScale).ticks(15));
        svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(yScale).ticks(20));

        // Axis labels
        svg.append("text").attr("x", width / 2).attr("y", height - 10).style("text-anchor", "middle").text("Assists");
        svg.append("text").attr("transform", "rotate(-90)").attr("y", 15).attr("x", -height / 2).style("text-anchor", "middle").text("Goals");

        // Tooltip for displaying athlete names
        const tooltip = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);

        // Fetch data and create scatter plot
        async function fetchAndPlotData() {
            const url = 'https://serie-a-league.p.rapidapi.com/team/statistic/scoring?teamId=110&season=2022';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '0285bf0b7dmsh9bdbd21c0386887p163adbjsn3745c6019150',
                    'x-rapidapi-host': 'serie-a-league.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const result = await response.json();

                // Access the leaders data from results and map to extract necessary values
                const athletes = result.results[0].stats[0].leaders.map(d => ({
                    name: d.athlete.displayName,
                    goals: d.athlete.statistics.find(stat => stat.name === "totalGoals").value,
                    assists: d.athlete.statistics.find(stat => stat.name === "goalAssists").value
                }));

                // Create scatter plot
                const dots = svg.selectAll("circle")
                    .data(athletes)
                    .enter()
                    .append("circle")
                    .attr("cx", d => xScale(d.assists))
                    .attr("cy", d => yScale(d.goals))
                    .attr("r", 5)
                    .style("fill", "steelblue")
                    .style("cursor", "pointer")
                    .on("mouseover", function(event, d) {
                        tooltip.transition().duration(200).style("opacity", 1);
                        tooltip.html(d.name)
                            .style("left", (event.pageX + 10) + "px")
                            .style("top", (event.pageY - 15) + "px");
                    })
                    .on("mouseout", function() {
                        tooltip.transition().duration(200).style("opacity", 0);
                    })
                    .on("click", function(event, d) {
                        const scaleFactor = 2;
                        const [x, y] = d3.pointer(event);
                        svg.transition().duration(750).call(
                            zoom.transform,
                            d3.zoomIdentity
                                .translate(width / 2 - x * scaleFactor, height / 2 - y * scaleFactor)
                                .scale(scaleFactor)
                        );
                    });

                // Zoom behavior
                const zoom = d3.zoom()
                    .scaleExtent([1, 5])
                    .on("zoom", function(event) {
                        svg.attr("transform", event.transform);
                    });

                svg.call(zoom);

                // Double-click to reset zoom
                svg.on("dblclick.zoom", function() {
                    svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
                });

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchAndPlotData();