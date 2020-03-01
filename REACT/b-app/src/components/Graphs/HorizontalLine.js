import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import './graph.css';

const data = {
  labels: ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
  datasets: [
    {
      label: '14 Disease Freqency',
      backgroundColor: '#3c8dbc',
      borderColor: '#ffffff',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    }
  ]
};

export default class HBar extends Component{

  render() {
    return (
      <div>
        <div className='chart-container-bar'>
        <HorizontalBar data={data} options={{maintainAspectRatio:false}}/>
        </div>
      </div>
    );
  }
}
