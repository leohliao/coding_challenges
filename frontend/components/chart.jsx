import React from 'react';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "radius": 5
    }
  }


  render(){
    return (
      <div className="chart-container">
        <svg className="graph">
          <g className="grid y-grid">
            <line x1="120" x2="800" y1="180" y2="180" className="y-grid-children" ></line>
            <line x1="120" x2="800" y1="210" y2="210" className="y-grid-children" ></line>
            <line x1="120" x2="800" y1="240" y2="240" className="y-grid-children" ></line>
            <line x1="120" x2="800" y1="270" y2="270" className="y-grid-children" ></line>
            <line x1="120" x2="800" y1="300" y2="300" className="y-grid-children" ></line>
            <line x1="120" x2="800" y1="330" y2="330" className="y-grid-children" ></line>
            <line x1="120" x2="800" y1="360" y2="360"></line>
          </g>
          <g className="labels y-labels">
            <text x="05" y="260" className="label-title">(Duration)</text>
            <text x="80" y="183">3 min</text>
            <text x="80" y="243">2 min </text>
            <text x="80" y="303">1 min</text>
          </g>
          <g className="grid x-grid">
            <line x1="160" x2="160" y1="365" y2="375"></line>
            <line x1="260" x2="260" y1="365" y2="375"></line>
            <line x1="360" x2="360" y1="365" y2="375"></line>
            <line x1="460" x2="460" y1="365" y2="375"></line>
            <line x1="560" x2="560" y1="365" y2="375"></line>
            <line x1="660" x2="660" y1="365" y2="375"></line>
            <line x1="760" x2="760" y1="365" y2="375"></line>
            <line x1="860" x2="860" y1="365" y2="375"></line>
          </g>
          <g className="labels x-labels">
            <text x="140" y="395">Aug 01</text>
            <text x="240" y="395">Aug 02</text>
            <text x="340" y="395">Aug 03</text>
            <text x="440" y="395">Aug 04</text>
            <text x="540" y="395">Aug 06</text>
            <text x="640" y="395">Aug 07</text>
            <text x="740" y="395">Aug 08</text>
            <text x="360" y="420" className="label-title">(Timeline)</text>
          </g>
          <g className="labels-data">
            <circle cx="650" cy="70" data-value="0" r="5" className="green"></circle>
            <circle cx="700" cy="70" data-value="0" r="5" className="orange"></circle>
            <circle cx="750" cy="70" data-value="0" r="5" className="red"></circle>
            <text x="658" y="73" className="data-title">pass</text>
            <text x="708" y="73" className="data-title">error</text>
            <text x="758" y="73" className="data-title">fail</text>
          </g>

        </svg>
      </div>
    ) // end return
  } // render
} // end Graph

export default Chart;
