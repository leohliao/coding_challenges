## Sauce Labs Front End Engineer Challenge

[Live] is a front-end analytic web app that I am taking from Sauce Lab.
To ensure your experience,
The site is live on above link,
however, if you would like to browse my code and run it on local,
please remember to start the server by typing the following to your terminal (after you land to the project folder):

```
npm install
----
npm start
----
open index.html
```

I must said that this is a lot more interesting then I have expected.
Mainly because there are so many interesting technology that can be used for this project.

After I had gone through the description,
first thing I did was to search on what type of frameworks,
libraries and any additional tools that I can apply to this.

React is the preferrable option according to Sauce Labs,
so I know I want to find something that fits well with React.  
D3.js was obviously the most popular library out there for creating these kind of graphs, although there were many people that said it doesn't work well together with React, I happened to find many tutorials that are teaching people how to do React and D3 together.
I have also looked other libraries such as Rechart, REACT-EASY-CHART, GOOGLE VISUALIZATION, and CANVAS.JS. Although all these library offer really cool tools to create a great looking graph.  I feel like it doesn't give me enough control that I wanted to bring this project beyond in the future. So I have decided go just use SVG to create all the properties and get the maximum control that I want.  

I started out mocking the design of the chart was provided along with the descriptions. It was pretty easy and fun, I took sometime making some additional styling. Making sure it is a components for other people to pass in additional options for this graph was one of the major task, so I started out creating a data,
and then pass that data into the Chart components where all the magic happens later.

```
// ./frontend/components/data_render.jsx

import React from 'react';
import Chart from './chart';

const plotpoints = [
  {
    "start_time": "2017-11-29T04:56:12Z",
    "status": "pass",
    "duration": 126,
  },
  {
    "start_time": "2017-11-28T03:22:12Z",
    "status": "error",
    "duration": 205,
  },

  ... // skipped

<div>
     <Chart
       data={plotpoints}
       />
   </div>
   )
 }

export default DataRender;
```
Next step is something that is somewhat tricky. You cannot create a SVG element by simply passing-in the HTML element. You have to use createElement and appendChild to that Element, so I used a function that could help me with it (from StackOverflow).
With this I can create SVG element with all the attributes that I want to pass it:

```
makeSVGEl(tag, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var k in attrs) {
    el.setAttribute(k, attrs[k]);
  }
  return el;
}
```

Then, after this is done, I just implement it to my other function which will help me create the assets:

```
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
  ```






[Live]: https://leohliao.github.io/saucelab_frontEnd/
