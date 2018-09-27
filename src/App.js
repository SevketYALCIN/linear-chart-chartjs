import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { squat } from './data/squat';
import { deadlift } from './data/deadlift';
import { Scatter } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js';

class App extends Component {
  render() {
    const data: ChartData = {
      datasets: [
        {
          label: 'Squat',
          fill: false,
          data: squat.data,
          showLine: true,
          borderColor: 'rgba(0, 200, 0, 1)'
        },
        {
          label: 'Deadlift',
          fill: false,
          data: deadlift.data,
          showLine: true,
          borderColor: 'rgba(200, 0, 0, 1)'
        }
      ]
    };
    const options: ChartOptions = {
      title: {
        text: 'Chart.js Time Scale'
      },
      tooltips: {
        mode: 'nearest',
        intersect: false,
      },
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              format: 'MM/DD/YYYY',
              tooltipFormat: 'll'
            },
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Weight'
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Linear Chart using chart.js</h1>
        </header>
        <div className="App-intro">
          <Scatter data={data} options={options} />
        </div>
      </div>
    );
  }
}

export default App;
