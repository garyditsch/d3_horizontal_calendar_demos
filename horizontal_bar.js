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
        .attr('width', barWidth)
        .attr('height', function (data) {
            return data.value * 10;
        })
        .attr('x', function (data, i) {
            return i * (barWidth + barOffset);
        })
        .attr('y', function (data) {
            console.log(height - data.value * 10)
            return height - data.value * 10;
        })
        .text(d => d.value)
