import React, { Component } from 'react';
import './App.css';
import Row from './Row'
import axios from "axios";


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      id:"0",
      board: [
        ["*","*","*","*","*","*","*","*"],
        ["","","","","","","",""],
        ["","","m","i","n","e","",""],
        ["","","","","","","",""],
        ["s","w","e","e","p","e","r","!"],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["*","*","*","*","*","*","*","*"]
        ],
      state: "new",
      mines: ""
    };
  }

  newGame = (event) =>{
    axios
      .post("https://minesweeper-api.herokuapp.com/games", {difficulty: event.target.dataset['value']})
      .then(response=>{
        this.setState(response.data)
      })
  }    
  check = (row, column)=>{
    axios
      .post(`https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`, {row: row, col: column})
      .then(response=>{
        this.setState(response.data)
      })
  }
  flag=(row, column)=>{
    axios
      .post(`https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`, {row: row, col: column})
      .then(response=>{
        this.setState(response.data)
      })
  }
  render() {
    return (
      <div className="App">
        <head><link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/></head>
          <h1>MINESWEEPER</h1>
          <table>
            <tbody>
              <tr>
                {/* this tells the top row how many columns wide it should be  */}
                <td colSpan={this.state.board.length}>
                <div class="dropdown">
                  <button class="dropbtn">Difficulty</button>
                  <div class="dropdown-content">
                    <a onClick={this.newGame} data-value="0" title="If you're reading this you probably need a harder difficulty">easy(8x8)</a>
                    <a onClick={this.newGame} data-value="1" title="Good luck, Broseidon!">Moderate(16x16)</a>
                    <a onClick={this.newGame} data-value="2" title="Are you this much of a masochist in every part of your life?">Difficult(24x24)</a>
                  </div>
                </div>









                <p>you are playing game # {this.state.id}</p>
                There are {this.state.mines} mines left</td>
              </tr> 
              {
                this.state.board.map((row, rowIndex) =>{
                  return(
                    <tr>
                      {
                      row.map((square, index)=>{
                        return <Row square={square} row={rowIndex} column={index} check={this.check} flag={this.flag}/>
                      }) 
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table> 
      </div>
    );
  }
}

export default App;
