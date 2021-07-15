// https://bost.ocks.org/mike/join/
// https://vegibit.com/create-a-bar-chart-with-d3-javascript/
// vegibit tutorial has issues with style on rects

console.log(d3)

const data = [
    {date: 7/1/2021, value: 10},
    {date: 7/2/2021, value: 8},
    {date: 7/3/2021, value: 6},
    {date: 7/4/2021, value: 14},
    {date: 7/6/2021, value: 16},
    {date: 7/7/2021, value: 16}
]

//  the size of the overall svg element
const height = 300;
const width = 720;

//  the width of each bar and the offset between each bar
const barWidth = 40;
const barOffset = 20;

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([0,height])

const xScale = d3.scaleBand()
    .domain(d3.range(0, data.length))
    .range([0, width])

console.log((data, i) => xScale(i))


d3.select('#bar_chart').append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('background', '#dff0d8')
  .selectAll('rect')
    .data(data)
    .enter().append('rect')
        .style('fill', '#fff')
        .style('stroke', '#000')
        .style('stroke-width', '2')
        .attr('width', xScale())
        .attr('height', (data) => yScale(data.value))
        .attr('x', (data, i) => xScale(i))
        .attr('y', (data) => { return height - yScale(data.value)})
        .text(d => d.value)
