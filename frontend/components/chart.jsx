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
      let draw = this.makeSVGEl("g", { class:"grid y-grid" });
      if (svg !== undefined) {
        svg.appendChild(draw);
      }
      for (let i = 100; i < height; i += 30) {
        draw.appendChild(this.makeSVGEl("line", {
          "x1": 120,
          "x2": width,
          "y1": i,
          "y2": i,
          "class": "y-grid-children",
          "stroke": "#ccc",
          "stroke-dasharray": 5
        }))
      } // end for
    };

    return (
      <g className="grid y-grid">
        <line x1="120" x2={width.toString()} y1={height.toString()} y2={height.toString()}></line>
        {drawYGrids()}
      </g>
    )
  } // end handleYGrid

  handleYLabels(){
    const height = (this.state.height)/2 - 20;
    const drawYLabels = () => {
      var svg = document.getElementsByTagName('svg')[0];
      let draw = this.makeSVGEl("g", { class:"labels y-labels" });
      if (svg !== undefined) {
        svg.appendChild(draw);
      }
      for (let i = 100; i < (this.state.height - 100); i += 60) {
        let newText = this.makeSVGEl("text", {
          "x": 80,
          "y": i + 3,
          "color": "#ccc",
          "font-size": 13
        });
        let j = 5;
        let textNode = document.createTextNode(`${j} min`);
        newText.appendChild(textNode);
        draw.appendChild(newText)
      } // end for
    };
    return (
      <g className="labels y-labels">
        <text x="05" y={height.toString()} className="label-title">(Duration)</text>
        {drawYLabels()}
      </g>
    )
  } // end handleYLabels

  handleXGrids(){
    const width = (this.state.width);
    const drawXGrids = () => {
      var svg = document.getElementsByTagName('svg')[0];
      let draw = this.makeSVGEl("g", { class:"labels y-labels" });
      if (svg !== undefined) {
        svg.appendChild(draw);
      }
      for (let i = 100; i < width; i += 96) {
        draw.appendChild(this.makeSVGEl("line", {
          "x1": i + 60,
          "x2": i + 60,
          "y1": 405,
          "y2": 415,
          "stroke": "#ccc"
        }))
      } // end for
    };
    return (
      <g className="grid x-grid">
        {drawXGrids()};
      </g>
    )
  } // end handleXGrids

  handleXLabels(){
    const width = (this.state.width)/2;
    return (
      <g className="labels x-labels">
        <text x="140" y="430">Aug 01</text>
        <text x="236" y="430">Aug 02</text>
        <text x="332" y="430">Aug 03</text>
        <text x="428" y="430">Aug 04</text>
        <text x="524" y="430">Aug 06</text>
        <text x="620" y="430">Aug 07</text>
        <text x="716" y="430">Aug 08</text>
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
    // console.log(data[0].status)
    const drawData = () => {
      var svg = document.getElementsByTagName('svg')[0];
      let draw = this.makeSVGEl("g", { class:"data" });
      if (svg !== undefined) {
        svg.appendChild(draw);
      }
      for (let i = 0; i < data.length; i ++){
        const analyzeDuration = data[i].duration;
        const analyzeColor = () => {
          switch (data[i].status){
            case "pass":
              return ("rgb(117,183,56)");
            case "error":
              return ("rgb(232,145,75)");
            case "fail":
              return ("rgb(217,78,78)");
          };
        };
        const analyzeTime = () => {
          const time = new Date (data[i].start_time)
          const year = time.getFullYear();
          const month = time.getMonth() + 1;
          const day = time.getDate();
          return 160 + (96 *((year % 2017) + (month % 11) + (day % 27)));

        };
        draw.appendChild(this.makeSVGEl("circle", {
          "cx": analyzeTime(),
          "cy": (this.state.height - 100) - analyzeDuration,
          "r": 5,
          "fill": analyzeColor(),
          "class": "labels-data-circle"
        }))
      } // end for

    };
    return (
      <g className="labels-data">
        {drawData()}
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
    window.addEventListener('load', this.handleRender);
    const circles = document.getElementsByClassName('labels-data-circle');
    [].forEach.call(circles, function(el) {
      console.log(el);
    });
    // [...circles].forEach(circle => {
    //   circle.addEventListener('click', (e) => {
    //     console.log(e.target);
    //   })
    // })
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
