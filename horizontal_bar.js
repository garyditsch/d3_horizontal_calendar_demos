console.log(d3)

const data = [
    { date: 7/1/2021, value: 10 },
    { date: 7/2/2021, value: 8 },
    { date: 7/3/2021, value: 6 },
    { date: 7/4/2021, value: 14 },
    { date: 7/6/2021, value: 16 }
]

const width = 420;

const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => { return d.value})])
            .range([0, width])

console.log(x(8))

const y = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, 20 * data.length])

console.log(data.length)

const svg = d3.select("#bar_chart")
    .attr("width", width)
    .attr("height", y.range()[1])
    .attr("font-family", "sans-serif")
    .attr("font-size", "10")
    .attr("text-anchor", "end");

const bar = svg.selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", (d, i) => `translate(0,${y(i)})`);

console.log(bar)

bar.append("rect")
    .attr("fill", "steelblue")
    .attr("width", x)
    .attr("height", y.bandwidth() - 1);

console.log(bar)

bar.append("text")
    .attr("fill", "white")
    .attr("x", x(16) - 3)
    .attr("y", (y.bandwidth() - 1) / 2)
    .attr("dy", "0.35em")
    .text(d => d.value);