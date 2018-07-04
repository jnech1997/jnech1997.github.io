const height = 740;
const width = 880;
const padding = 70;

let name_draw = d3.select('#name_draw')
  .attr('height', height)
  .attr('width', width);

let defs = name_draw.append('defs');
let filter = defs.append('filter')
  .attr('id','glow');
filter.append('feGaussianBlur')
  .attr('stdDeviation','6')
  .attr('result','coloredBlur');
let feMerge = filter.append('feMerge');
feMerge.append('feMergeNode')
  .attr('in','coloredBlur');
feMerge.append('feMergeNode')
  .attr('in','SourceGraphic');

name_draw.append('path')
  .attr('stroke', 'black')
  .attr('stroke-width', 4)
  .attr('id', 'joe')
  .attr('opacity', 1)
  .attr('fill', 'none')
  .attr('transform', 'translate(30,-100)')
  .attr('d', 'M 50 250 L 100 250 L 100 250 L 100 300 L 100 300 L 100 350 L 50 350 L 0 350 L 100 350 L 150 350 L 150 350 L 150 300 L 200 300 L 200 350 L 150 350 L 200 350 L 250 350 L 250 300 L 300 300 L 250 350 L 300 350 L 350 350 L 400 350 L 400 250 L 450 350 L 450 350 L 450 250 L 450 350 L 500 350 L 500 300 L 550 300 L 500 350 L 550 350 L 600 350 L 600 300 L 650 300 L 600 300 L 600 350 L 650 350 L 700 350 L 700 250 L 700 300 L 750 300 L 750 350 L 800 350 L 800 400 L 0 400 L 0 450 L 0 500 L 0 550 L 0 600 L 50 600 L 100 600 L 150 600 L 200 600 L 250 600 L 300 600 L 350 600 L 400 600 L 450 600 L 500 600 L 550 600 L 600 600 L 650 600 L 700 600 L 750 600 L 800 600 L 800 550 L 800 500 L 800 450 L 750 450 L 700 450 L 650 450 L 600 450 L 550 450 L 500 450 L 450 450 L 400 450 L 350 450 L 300 450 L 250 450 L 200 450 L 150 450 L 100 450 L 50 450 L 50 500 L 50 550 L 100 550 L 150 550 L 200 550 L 250 550 L 300 550 L 350 550 L 400 550 L 450 550 L 500 550 L 550 550 L 600 550 L 650 550 L 700 550 L 750 550 L 750 500 L 700 500 L 650 500 L 600 500 L 550 500 L 500 500 L 450 500 L 400 500 L 350 500 L 300 500 L 250 500 L 200 500 L 150 500 L 100 500')
  .attr('stroke-dasharray', '10000 10000')
  .style('filter', 'url(#glow)')
  .attr('stroke-dashoffset', 10000)
  .transition()
  .duration(10000)
  .attr('stroke-dashoffset', 0);

name_draw.append('path')
  .attr('id', 'projects')
  .attr('stroke', 'black')
  .attr('stroke-width', 4)
  .attr('opacity', 1)
  .attr('fill', 'none')
  .attr('transform', 'translate(-50,700)')
  .attr('d', 'M 200 0 L 200 50 L 200 50 L 200 0 L 250 0 L 250 50 L 200 50 L 200 100 L 200 50 L 250 50 L 300 50 L 300 0 L 350 0 L 300 50 L 350 0 L 400 0 L 400 50 L 350 50 L 350 0 L 400 0 L 450 0 L 450 50 L 450 100 L 400 100 L 450 100 L 450 50 L 500 50 L 450 50 L 500 0 L 500 0 L 450 0 L 450 50 L 500 50 L 550 50 L 550 0 L 600 0 L 550 0 L 550 50 L 600 50 L 550 50 L 600 50 L 650 50 L 650 0 L 650 50 L 650 100 L 650 0 L 600 0 L 650 0 L 700 0 L 650 0 L 650 50 L 700 50 L 750 50 L 750 0 L 800 0 L 750 0 L 750 50 L 800 50 L 800 50 L 800 100 L 750 100')
  .attr('stroke-dasharray', '5000 5000')
  .style('filter', 'url(#glow)')
  .attr('stroke-dashoffset', 5000)
  .transition()
  .duration(5000)
  .attr('stroke-dashoffset', 0);