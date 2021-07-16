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
const height = 300;
const width = 500;

//  the width of each bar and the offset between each bar
const barWidth = 40;
const barOffset = 20;

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([0,height])

const xScale = d3.scaleBand()
    .domain(data.map(d => d.date))
    .range([0, width])

console.log(data)

let chart = d3.select('svg')

chart
  .attr('width', width)
  .attr('height', height)
  .style('background', '#dff0d8')
  .selectAll('rect')
    .data(data)
    .enter().append('rect')
        .style('fill', '#fff')
        .style('stroke', '#000')
        .style('stroke-width', '1')
        .attr('width', d => xScale.bandwidth())
        .attr('height', (data) => yScale(data.value))
        .attr('x', data => xScale(data.date))
        .attr('y', (data) => { return height - yScale(data.value)})
        .text(d => d.value)

chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll('text')
        .style('text-anchor', 'end')
        .style('font-size', '18px')
        .style('color', '#000')
        .attr('transform', 'rotate(-45) translate(-10, -5)')