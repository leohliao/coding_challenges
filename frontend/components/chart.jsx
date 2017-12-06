import React from 'react';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "loading": true,
      "width": this.props.width || 800,
      "height": this.props.height || 500,
    }
    this.handleYGrid = this.handleYGrid.bind(this);
    this.handleYLabels = this.handleYLabels.bind(this);
    this.handleXGrids = this.handleXGrids.bind(this);
    this.handleXLabels = this.handleXLabels.bind(this);
    this.handleDataLabels = this.handleDataLabels.bind(this);
    this.handleRender = this.handleRender.bind(this);
    this.makeSVGEl = this.makeSVGEl.bind(this);
  }

  makeSVGEl(tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) {
      el.setAttribute(k, attrs[k]);
    }
    return el;
  }

  handleYGrid(){
    const height = this.state.height - 100;
    const width = this.state.width;
    const drawYGrids = () => {
      var svg = document.getElementsByTagName('svg')[0];
      let draw = this.makeSVGEl("g", { className:"grid y-grid-children" });

      console.log(svg);
      console.log(draw);

      for (let i = 100; i < 400; i += 30) {
        draw.appendChild(this.makeSVGEl("line", {
          "x1": 120,
          "x2": width,
          "y1": i,
          "y2": i,
          "className": "y-grid-children"
        }))
      } // end for


    };
    // <line x1="120" x2="800" y1="100" y2="100" className="y-grid-children" ></line>
    // <line x1="120" x2="800" y1="130" y2="130" className="y-grid-children" ></line>
    // <line x1="120" x2="800" y1="160" y2="160" className="y-grid-children" ></line>
    // <line x1="120" x2="800" y1="190" y2="190" className="y-grid-children" ></line>
    // <line x1="120" x2="800" y1="220" y2="220" className="y-grid-children" ></line>
    // <line x1="120" x2="800" y1="250" y2="250" className="y-grid-children" ></line>
    // <line x1="120" x2="800" y1="280" y2="280" className="y-grid-children" ></line>
    // <line x1="120" x2="800" y1="310" y2="310" className="y-grid-children" ></line>
    // <line x1="120" x2="800" y1="340" y2="340" className="y-grid-children" ></line>
    // <line x1="120" x2="800" y1="370" y2="370" className="y-grid-children" ></line>

    return (
      <g className="grid y-grid">
        {drawYGrids()}
        <line x1="120" x2={width.toString()} y1={height.toString()} y2={height.toString()}></line>
      </g>
    )
  } // end handleYGrid

  handleYLabels(){
    const height = (this.state.height)/2 - 20;
    return (
      <g className="labels y-labels">
        <text x="05" y={height.toString()} className="label-title">(Duration)</text>
        <text x="80" y="103">5 min</text>
        <text x="80" y="163">4 min</text>
        <text x="80" y="223">3 min</text>
        <text x="80" y="283">2 min </text>
        <text x="80" y="343">1 min</text>
      </g>
    )
  } // end handleYLabels

  handleXGrids(){
    return (
      <g className="grid x-grid">
        <line x1="160" x2="160" y1="405" y2="415"></line>
        <line x1="260" x2="260" y1="405" y2="415"></line>
        <line x1="360" x2="360" y1="405" y2="415"></line>
        <line x1="460" x2="460" y1="405" y2="415"></line>
        <line x1="560" x2="560" y1="405" y2="415"></line>
        <line x1="660" x2="660" y1="405" y2="415"></line>
        <line x1="760" x2="760" y1="405" y2="415"></line>
        <line x1="860" x2="860" y1="405" y2="415"></line>
      </g>
    )
  } // end handleXGrids

  handleXLabels(){
    const width = (this.state.width)/2;
    return (
      <g className="labels x-labels">
        <text x="140" y="425">Aug 01</text>
        <text x="240" y="425">Aug 02</text>
        <text x="340" y="425">Aug 03</text>
        <text x="440" y="425">Aug 04</text>
        <text x="540" y="425">Aug 06</text>
        <text x="640" y="425">Aug 07</text>
        <text x="740" y="425">Aug 08</text>
        <text x={String(width)} y="450" className="label-title">(Timeline)</text>
      </g>
    )
  }// end handleXLabels

  handleDataLabels (){
    return (
      <g className="labels-data">
        <circle cx="650" cy="70" data-value="0" r="5" className="green"></circle>
        <circle cx="700" cy="70" data-value="0" r="5" className="orange"></circle>
        <circle cx="750" cy="70" data-value="0" r="5" className="red"></circle>
        <text x="658" y="73" className="data-title">pass</text>
        <text x="708" y="73" className="data-title">error</text>
        <text x="758" y="73" className="data-title">fail</text>
      </g>
    )
  }

  handleData(){
    const {data} = this.props;
    console.log(data[0].status)

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

  componentDidMount(){
    setTimeout(this.setState({"loading": false}), 0);
    this.handleRender();
  }

  render(){
    if (this.state.loading) {
      return (
        <div>
          <h1> ....Loading... </h1>
        </div>
      ) // end return
    } else {
      return (
        <div className="chart-container">
          {this.handleRender()}
        </div>
      ) // end return
    }
  } // render
} // end Graph

export default Chart;
