import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import './graph.css';

const data = {
	labels: [
		'Negative Diagonsis',
		'Positive Diagnosis',
	],
	datasets: [{
		data: [300, 50],
		backgroundColor: [
		'#b32400',
		'#3c8dbc'
		],
		hoverBackgroundColor: [
		'#b32400',
		'#3c8dbc'
		]
	}]
};

export default class DoughnutG extends Component{
  render() {
    return (
      <div>
        <div className="chart-container-don">
        <Doughnut data={data} options={{maintainAspectRatio:false}}/>
		</div>
      </div>
    );
  }
}