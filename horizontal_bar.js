console.log(d3)

const data = [
    {date: 7/1/2021, value: 10},
    {date: 7/2/2021, value: 8},
    {date: 7/3/2021, value: 6},
    {date: 7/4/2021, value: 14},
    {date: 7/6/2021, value: 16}
]

// https://scrimba.com/scrim/cast-1953?pl=pEKMsN

d3.select("#bar_chart")
    .selectAll("div")
    .data(data)
        .enter()
        .append("div")
        .style("width", d => d.value * 10 + "px")
        .text(d => d.value);