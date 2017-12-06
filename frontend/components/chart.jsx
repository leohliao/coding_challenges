import React from 'react';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "width": this.props.width || 500,
      "height": this.props.height || 850,
    }
    this.handleYGrid = this.handleYGrid.bind(this);
    this.handleYLabels = this.handleYLabels.bind(this);
    this.handleXGrids = this.handleXGrids.bind(this);
    this.handleXLabels = this.handleXLabels.bind(this);
    this.handleDataLabels = this.handleDataLabels.bind(this);
    this.handleRender = this.handleRender.bind(this);
  }

  handleYGrid(){
    return (
      <g className="grid y-grid">
        <line x1="120" x2="800" y1="60" y2="60" className="y-grid-children" ></line>
        <line x1="120" x2="800" y1="90" y2="90" className="y-grid-children" ></line>
        <line x1="120" x2="800" y1="120" y2="120" className="y-grid-children" ></line>
        <line x1="120" x2="800" y1="150" y2="150" className="y-grid-children" ></line>
        <line x1="120" x2="800" y1="180" y2="180" className="y-grid-children" ></line>
        <line x1="120" x2="800" y1="210" y2="210" className="y-grid-children" ></line>
        <line x1="120" x2="800" y1="240" y2="240" className="y-grid-children" ></line>
        <line x1="120" x2="800" y1="270" y2="270" className="y-grid-children" ></line>
        <line x1="120" x2="800" y1="300" y2="300" className="y-grid-children" ></line>
        <line x1="120" x2="800" y1="330" y2="330" className="y-grid-children" ></line>
        <line x1="120" x2="800" y1="360" y2="360"></line>
      </g>
    )
  } // end handleYGrid

  handleYLabels(){
    return (
      <g className="labels y-labels">
        <text x="05" y="260" className="label-title">(Duration)</text>
        <text x="80" y="63">5 min</text>
        <text x="80" y="123">4 min</text>
        <text x="80" y="183">3 min</text>
        <text x="80" y="243">2 min </text>
        <text x="80" y="303">1 min</text>
      </g>
    )
  } // end handleYLabels

  handleXGrids(){
    return (
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
    )
  } // end handleXGrids

  handleXLabels(){
    return (
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
    )
  }// end handleXLabels

  handleDataLabels (){
    return (
      <g className="labels-data">
        <circle cx="650" cy="30" data-value="0" r="5" className="green"></circle>
        <circle cx="700" cy="30" data-value="0" r="5" className="orange"></circle>
        <circle cx="750" cy="30" data-value="0" r="5" className="red"></circle>
        <text x="658" y="33" className="data-title">pass</text>
        <text x="708" y="33" className="data-title">error</text>
        <text x="758" y="33" className="data-title">fail</text>
      </g>
    )
  }

  handleData(){
    const {data} = this.props;
    // console.log(data[0].status)
    return (
      <g className="labels-data">
        <circle cx="300" cy="100" data-value="0" r="5" className="green"></circle>
      </g>
    )
  }

  handleRender(){
    return (
      <svg className="graph">
        {this.handleYGrid()};
        {this.handleYLabels()};
        {this.handleXGrids()};
        {this.handleXLabels()};
        {this.handleDataLabels()};
        {this.handleData()};
      </svg>
    )
  }

  render(){
    return (
      <div className="chart-container">
        {this.handleRender()}
      </div>
    ) // end return
  } // render
} // end Graph

export default Chart;
