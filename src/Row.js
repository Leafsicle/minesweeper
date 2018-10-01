import React, { Component } from 'react';

class Row   extends Component {
handleChoice = event => {
    console.log("I clicked!!!!", this.props)
// since this worked as a console log of ' I clicked' I can use this to act as a fetch for the API for this specifically targeted cell
}

    render() {
        return(
            <td onClick={this.handleChoice} class="square covered unsolved" >  
                {this.props.square}
            </td>
        )
    }
}
export default Row