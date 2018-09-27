import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board'
import axios from "axios";

class App extends Component {
  constructor (props){
    super(props);

    this.state={
      id:1,
      board: [
        [" "," "," "," ",
          " ",
          " ",
          " ",
          " "
        ],
        [
          " ",
          " ",
          "1",
          "2",
          "1",
          "F",
          " ",
          " "
        ],
        [
          " ",
          "1",
          "_",
          "_",
          "_",
          "2",
          " ",
          " "
        ],
        [
          " ",
          "1",
          "_",
          "_",
          "_",
          "1",
          " ",
          " "
        ],
        [
          " ",
          " ",
          "1",
          "_",
          "_",
          "2",
          " ",
          " "
        ],
        [
          " ",
          " ",
          " ",
          "1",
          "1",
          " ",
          " ",
          " "
        ],
        [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " "
        ],
        [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " "
        ]
      ],
      state: "new",
      mines: 9
    };
  }
  loadSampleGame = event =>{
    axios
      .get("https://minesweeper-api.herokuapp.com/games")
      .then(response={
        let newState = response.data
        this.setState(newState)
    })

  render() {}
    return (
      <div className="App">
        <head><link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/> </head>
          <h1>MINESWEEPER</h1>
          <main >
            <table className="playarea">
              <tr>
                <td colSpan={this.state.board[0].length}>
                <button onclick={this.loadSampleGame}>Load Sample Game</button>
                <p> you are playing game # {this.state.id}</p>
                </td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
            </table>
          </main>
      </div>
    );
    }
}

export default App;
