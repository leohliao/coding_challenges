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
  {
    "start_time": "2017-11-28T02:24:12Z",
    "status": "fail",
    "duration": 20,
  },
  {
    "start_time": "2017-11-28T05:24:12Z",
    "status": "pass",
    "duration": 90,
  },
  {
    "start_time": "2017-11-29T06:24:12Z",
    "status": "error",
        "duration": 90,
  },
  {
    "start_time": "2017-11-28T14:12:12Z",
    "status": "pass",
    "duration": 200,
  },
  {
    "start_time": "2017-12-02T14:12:12Z",
    "status": "fail",
    "duration": 150,
  },
  {
    "start_time": "2017-12-05T15:00:01Z",
    "status": "pass",
    "duration": 86,
  },
  {
    "start_time": "2017-12-04T14:12:12Z",
    "status": "fail",
    "duration": 190,
  },
  {
    "start_time": "2017-12-02T14:12:12Z",
    "status": "error",
    "duration": 144,
  },
  {
    "start_time": "2017-12-02T02:12:12Z",
    "status": "error",
    "duration": 227,
  },
  {
    "start_time": "2017-12-03T17:12:12Z",
    "status": "pass",
    "duration": 260,
  },
  {
    "start_time": "2017-12-01T02:12:12Z",
    "status": "error",
    "duration": 62,
  },
  {
    "start_time": "2017-12-02T02:12:12Z",
    "status": "error",
    "duration": 227,
  },
  {
    "start_time": "2017-12-28T02:12:12Z",
    "status": "pass",
    "duration": 280,
  },
  {
    "start_time": "2017-11-30T18:12:12Z",
    "status": "error",
    "duration": 108,
  },
  {
    "start_time": "2017-12-02T03:12:12Z",
    "status": "fail",
    "duration": 27,
  },
  {
    "start_time": "2017-11-30T02:12:12Z",
    "status": "error",
    "duration": 69,
  },
  {
    "start_time": "2017-12-01T20:12:12Z",
    "status": "pass",
    "duration": 149,
  }
]

const DataRender = () => {
  return (
    <div>
      <Chart
        data={plotpoints}
        />
    </div>
  )
}

export default DataRender;
