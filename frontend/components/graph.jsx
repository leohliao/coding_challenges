import React from 'react';
import d3 from 'd3';

class Graph extends React.Component {
  constructor(props) {
    super(props);

    this.createScatterGraph = this.createScatterGraph.bind(this);
  }

  componentDidMount() {

    this.createScatterGraph();
  }

  createScatterGraph() {
    let chart = new CanvasJS.Chart("chartContainer", {
    	animationEnabled: true,
    	zoomEnabled: true,
      interactivityEnabled: true,
    	axisX: {
    		minimum: 0,
    		maximum: 10,
        lineThickness: 3,
        lineColor: "rgb(239, 242, 245)",
        labelFontColor: "rgb(239, 242, 245)",
    	},
    	axisY:{
    		valueFormatString: "# min",
        lineColor: "rgb(255, 255, 255)",
        gridDashType: "shortDash",
        gridThickness: 2,
        gridColor: "rgb(239, 242, 245)"
    	},

    	data: [{
    		type: "scatter",
    		toolTipContent: "<b>Area: </b>{x} sq.ft<br/><b>Price: </b>${y}k",
        markerColor: "#008000",
    		dataPoints: [
    			{ x: 1, y: 350 },
    			{ x: 2, y: 450 },
    			{ x: 3, y: 450 },
    			{ x: 4, y: 700 },
    			{ x: 3, y: 650 },
    			{ x: 5, y: 850 },
    		]
    	}]
    });
    chart.render();
  }

  render(){

    return (
      <div className="graph-container">
        <div id="chartContainer"></div>
      </div>
    ) // end return
  } // render
} // end Graph

export default Graph;
