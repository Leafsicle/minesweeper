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
      .post("https://minesweeper-api.herokuapp.com/games", {difficulty:0})
      .then(response=>{
        this.setState(response.data)
      })
  }    
  check = (row, column)=>{
    console.log(`I clicked!!!! on ${row} and ${column}`)
    axios
      .post(`https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`, {row: row, col: column})
      .then(response=>{
        this.setState(response.data)
      })
  }

  flag=(row, column)=>{
    console.log(`I clicked!!!! on ${row} and ${column}`)
    axios
      .post(`https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`, {row: row, col: column})
      .then(response=>{
        this.setState(response.data)
      })
  }

  render() {
    // let board=this.state.board[0].map(Row=>{
    //   return Row
    // })


    return (
      <div className="App">
        <head><link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/></head>
          <h1>MINESWEEPER</h1>
          <table className="playarea">
            <tbody>
              <tr>
                {/* this tells the top row how many columns wide it should be  */}
                <td colSpan={this.state.board.length}>
                <button onClick={this.newGame}>Want to play?</button>
                <p>you are playing game # {this.state.id}<br></br>
                There are {this.state.mines} mines left </p></td>
              </tr> 
              
              <tr>
                {
                  this.state.board[0].map((square, index)=>{
                    return <Row square={square} row={0} column={index} check={this.check} flag={this.flag}/>
                  })
                }
              </tr><tr>
                {
                  this.state.board[1].map((square, index)=>{
                    return <Row square={square} row={1} column={index} check={this.check} flag={this.flag}/>
                  })
                }
              </tr><tr>
                {
                  this.state.board[2].map((square, index)=>{
                    return <Row square={square} row={2} column={index} check={this.check} flag={this.flag}/>
                  })
                }
              </tr><tr>
                {
                  this.state.board[3].map((square, index)=>{
                    return <Row square={square} row={3} column={index} check={this.check} flag={this.flag}/>
                  })
                }
              </tr><tr>
                {
                  this.state.board[4].map((square, index)=>{
                    return <Row square={square} row={4} column={index} check={this.check} flag={this.flag}/>
                  })
                }
              </tr><tr>
                {
                  this.state.board[5].map((square, index)=>{
                    return <Row square={square} row={5} column={index} check={this.check} flag={this.flag}/>
                  })
                }
              </tr><tr>
                {
                  this.state.board[6].map((square, index)=>{
                    return <Row square={square} row={6} column={index} check={this.check} flag={this.flag}/>
                  })
                }
              </tr><tr>
                {
                  this.state.board[7].map((square, index)=>{
                    return <Row square={square} row={7} column={index} check={this.check} flag={this.flag}/>
                  })
                }
              </tr>
              
              </tbody>
          </table> 
      </div>
    );
  }
}

export default App;
