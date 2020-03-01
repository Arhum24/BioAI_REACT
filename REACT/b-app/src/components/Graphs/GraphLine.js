import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './graph.css';
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Frequency of Patients',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#3c8dbc',
      borderColor: '#3c8dbc',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#3c8dbc',
      pointBackgroundColor: '#3c8dbc',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#3c8dbc',
      pointHoverBorderColor: '#3c8dbc',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [5, 3, 6, 9, 13, 11, 20, 5, 2, 7, 6, 4]
    }
  ]
};

export default class GraphLine extends Component{
  

  render() {
    return (
      <div>
        <div className="chart-container-line">
        <Line data={data} width={100} height={50} options={{maintainAspectRatio:false}}/>
        </div>
      </div>
    );
  }

}
