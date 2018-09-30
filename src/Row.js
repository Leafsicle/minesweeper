import React, { Component } from 'react';

class Row   extends Component {
handleChoice=event=>{
  console.log("I clicked!!!!", this.props.board)
  // since this worked as a console log of ' I clicked' I can use this to act as a fetch for the API for this specifically targeted cell
}

    render() {
        return(
          <td onClick={this.handleChoice}>  
              {this.props.square}
          </td>
        )
    }
}
export default Row