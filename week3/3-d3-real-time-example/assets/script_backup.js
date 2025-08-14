// D3.js code for the real-time visualization will go here.

// 1. Define some sample data
const data = [50, 120, 250, 80, 180];

// 2. Select the container and bind the data to create bars
d3.select('#chart-container')
  .selectAll('div') // Select all divs that will be created
  .data(data)       // Bind the data array
  .join('div')      // Create a 'div' for each data point
  .style('width', d => d + 'px') // Set the width based on the data value
  .style('height', '30px')
  .style('margin', '5px')
  .style('background-color', 'steelblue')
  .style('color', 'white')
  .style('display', 'flex')
  .style('align-items', 'center')
  .style('padding-left', '5px')
  .text(d => d);    // Display the data value inside the bar

