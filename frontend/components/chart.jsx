import React from 'react';
import { ScatterplotChart } from 'react-easy-chart';

const data = [
   {
     type: 'One',
     x: 1,
     y: 5
   },
   {
     type: 'Two',
     x: 3,
     y: 1
   },
   {
     type: 'Three',
     x: 0,
     y: 6
   },
   {
     type: 'Four',
     x: 5,
     y: 2
   },
   {
     type: 'Five',
     x: 4,
     y: 4
   },
   {
     type: 'Six',
     x: 5,
     y: 9
   },
   {
     type: 'Seven',
     x: 9,
     y: 1
   },
   {
     type: 'Eight',
     x: 5,
     y: 6
   },
   {
     type: 'Nine',
     x: 3,
     y: 9
   },
   {
     type: 'Ten',
     x: 7,
     y: 9
   }
 ];


class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "radius": 5
    }
    this.createScatterGraph = this.createScatterGraph.bind(this);
  }

  componentDidMount() {
    this.createScatterGraph();
  }

  componentDidUpdate() {
    this.createScatterGraph();
  }

  createScatterGraph() {
  }


  render(){

    return (
      <div className="chart-container">
        <ScatterplotChart
            data={data}
            axes
            dotRadius={this.state.radius}
            width={480}
            height={270}
            grid
            xType="time"
            xDomainRange={['31-Dec-14', '4-Jan-15']}
            />
      </div>
    ) // end return
  } // render
} // end Graph

export default Chart;
