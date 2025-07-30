// Example 1: Creating Simple Shapes
const svg = d3.select("#simple-shapes .viz-container")
    .append("svg")
    .attr("width", 200)
    .attr("height", 100);

// Add a circle
svg.append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 20)
    .style("fill", "steelblue");

// Add a rectangle
svg.append("rect")
    .attr("x", 100)
    .attr("y", 30)
    .attr("width", 40)
    .attr("height", 40)
    .style("fill", "coral");

// Example 2: Data Binding
const data = [4, 8, 15, 16, 23, 42];

// Create bars from data
d3.select("#data-example .viz-container")
    .selectAll("div")
    .data(data)
    .join("div")
    .style("height", "20px")
    .style("width", d => d * 10 + "px")
    .style("margin", "5px")
    .style("background-color", "steelblue")
    .text(d => d);

// Example 3: Using Scales
const scaleData = [10, 30, 50, 70, 90];

// Create an SVG container for the scale example
const scaleSvg = d3.select("#scale-example .viz-container")
    .append("svg")
    .attr("width", 300)
    .attr("height", 100);

// Create a linear scale
const scale = d3.scaleLinear()
    .domain([0, 100])  // Data range
    .range([0, 200]);  // Pixel range

// Create circles with scaled sizes
scaleSvg.selectAll("circle")
    .data(scaleData)
    .join("circle")
    .attr("cx", (d, i) => i * 50 + 25)
    .attr("cy", 50)
    .attr("r", d => scale(d) / 10)
    .style("fill", "steelblue");

// Example 4: Drawing an Axis with D3.js
// 1. Create a scale
const axisScale = d3.scaleLinear()
    .domain([0, 500]) // The data values
    .range([0, 400]); // The pixel space on screen

// 2. Create an SVG container
const axisSvg = d3.select("#axis-container")
    .append("svg")
    .attr("width", 450)
    .attr("height", 50);

// 3. Create a group to hold the axis and move it into view
const axisGroup = axisSvg.append("g")
    .attr("transform", "translate(20, 20)");

// 4. Create the axis generator and call it on the group
const bottomAxis = d3.axisBottom(axisScale);
axisGroup.call(bottomAxis);
