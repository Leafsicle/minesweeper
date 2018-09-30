import React, { Component } from 'react';
import './App.css';
import Row from './Row'
// import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      id:"",
      board: [
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""]
        ],
      state: "new",
      mines: 9
    };
  }

  // loadSampleGame = (event) =>{
  //   axios
  //     .post("https://minesweeper-api.herokuapp.com/games", {difficulty:0})
  //     .then(response=>{
  //       this.setState(response.data)
  //     })
  // }    

  render() {
    return (
      <div className="App">
        <head><link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/></head>
          <h1>MINESWEEPER</h1>
          <table className="playarea">
              <tr>
                {/* this tells the top row how many columns wide it should be  */}
                <td colSpan={this.state.board.length}>
                <button onClick={this.loadSampleGame}>Load Sample Game</button>
                <p>you are playing game # {this.state.id} </p>  </td>
              </tr> 
              <tr>
              <Row square={this.state.board[0][0]}/>
              <Row square={this.state.board[0][1]}/>
              <Row square={this.state.board[0][2]}/>
              <Row square={this.state.board[0][3]}/>
              <Row square={this.state.board[0][4]}/>
              <Row square={this.state.board[0][5]}/>
              <Row square={this.state.board[0][6]}/>
              <Row square={this.state.board[0][7]}/>
              </tr>
              <tr>
              <Row square={this.state.board[1][0]}/>
              <Row square={this.state.board[1][1]}/>
              <Row square={this.state.board[1][2]}/>
              <Row square={this.state.board[1][3]}/>
              <Row square={this.state.board[1][4]}/>
              <Row square={this.state.board[1][5]}/>
              <Row square={this.state.board[1][6]}/>
              <Row square={this.state.board[1][7]}/>
              </tr> <tr>
              <Row square={this.state.board[2][0]}/>
              <Row square={this.state.board[2][1]}/>
              <Row square={this.state.board[2][2]}/>
              <Row square={this.state.board[2][3]}/>
              <Row square={this.state.board[2][4]}/>
              <Row square={this.state.board[2][5]}/>
              <Row square={this.state.board[2][6]}/>
              <Row square={this.state.board[2][7]}/>
              </tr> <tr>
              <Row square={this.state.board[3][0]}/>
              <Row square={this.state.board[3][1]}/>
              <Row square={this.state.board[3][2]}/>
              <Row square={this.state.board[3][3]}/>
              <Row square={this.state.board[3][4]}/>
              <Row square={this.state.board[3][5]}/>
              <Row square={this.state.board[3][6]}/>
              <Row square={this.state.board[3][7]}/>
              </tr> <tr>
              <Row square={this.state.board[4][0]}/>
              <Row square={this.state.board[4][1]}/>
              <Row square={this.state.board[4][2]}/>
              <Row square={this.state.board[4][3]}/>
              <Row square={this.state.board[4][4]}/>
              <Row square={this.state.board[4][5]}/>
              <Row square={this.state.board[4][6]}/>
              <Row square={this.state.board[4][7]}/>
              </tr> <tr>
              <Row square={this.state.board[5][0]}/>
              <Row square={this.state.board[5][1]}/>
              <Row square={this.state.board[5][2]}/>
              <Row square={this.state.board[5][3]}/>
              <Row square={this.state.board[5][4]}/>
              <Row square={this.state.board[5][5]}/>
              <Row square={this.state.board[5][6]}/>
              <Row square={this.state.board[5][7]}/>
              </tr> <tr>
              <Row square={this.state.board[6][0]}/>
              <Row square={this.state.board[6][1]}/>
              <Row square={this.state.board[6][2]}/>
              <Row square={this.state.board[6][3]}/>
              <Row square={this.state.board[6][4]}/>
              <Row square={this.state.board[6][5]}/>
              <Row square={this.state.board[6][6]}/>
              <Row square={this.state.board[6][7]}/>
              </tr> <tr>
              <Row square={this.state.board[7][0]}/>
              <Row square={this.state.board[7][1]}/>
              <Row square={this.state.board[7][2]}/>
              <Row square={this.state.board[7][3]}/>
              <Row square={this.state.board[7][4]}/>
              <Row square={this.state.board[7][5]}/>
              <Row square={this.state.board[7][6]}/>
              <Row square={this.state.board[7][7]}/>
              </tr>
          </table> 
      </div>
    );
  }
}

export default App;
