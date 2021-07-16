// https://bost.ocks.org/mike/join/
// https://vegibit.com/create-a-bar-chart-with-d3-javascript/
// vegibit tutorial has issues with style on rects

console.log(d3)

const data = [
    {date: '7/1/2021', value: 10},
    {date: '7/2/2021', value: 8},
    {date: '7/3/2021', value: 6},
    {date: '7/4/2021', value: 14},
    {date: '7/6/2021', value: 16},
    {date: '7/7/2021', value: 16}
]

//  the size of the overall svg element
const margin = { top: 10, right: 10, bottom: 100, left: 40 };
const width = 700 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;


const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([0,width])

const yScale = d3.scaleBand()
    .domain(data.map(d => d.date))
    .range([0, height])
    .padding(0.1)

console.log(data)

let chart = d3.select('svg')

chart
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .style('background', '#dff0d8')
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

chart
    .append('g')
    .selectAll('rect')
    .data(data)
    .enter().append('rect')
        .style('fill', '#fff')
        .style('stroke', '#000')
        .style('stroke-width', '1')
        .attr('height', yScale.bandwidth)
        .attr('width', (data) => xScale(data.value))
        .attr('y', data => yScale(data.date))
        .attr('x', (data) => { return width - xScale(data.value)})
        .text(d => d.value)

chart
    .append('g')
    .call(d3.axisLeft(yScale));



// chart
//     .append('g')
//     .attr('transform', `translate(0, ${height})`)
//     .call(d3.axisBottom(xScale))
//     .selectAll('text')
//         .style('text-anchor', 'end')
//         .style('font-size', '10px')
//         .style('color', '#000')
//         .attr('transform', 'rotate(-90) translate(-10, -5)')