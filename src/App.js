import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as squat from './data/squat.json'
import * as deadlift from './data/deadlift.json'
import * as overhead from './data/overhead.json'
import * as row from './data/row.json'
import * as bench from './data/bench.json'

import { Scatter } from 'react-chartjs-2';

class App extends Component {
  render() {
    const data = {
      datasets: [
        {
          label: 'Squat',
          fill: false,
          data: squat,
          showLine: true,
          borderColor: 'darkorange'
        },
        {
          label: 'Deadlift',
          fill: false,
          data: deadlift,
          showLine: true,
          borderColor: 'darkmagenta'
        },
        {
          label: 'Pendlay Row',
          fill: false,
          data: row,
          showLine: true,
          borderColor: 'darkcyan'
        },
        {
          label: 'Overhead Press',
          fill: false,
          data: overhead,
          showLine: true,
          borderColor: 'red'
        },
        {
          label: 'Bench Press',
          fill: false,
          data: bench,
          showLine: true,
          borderColor: 'blue'
        }
        
      ]
    };
    const options = {
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
