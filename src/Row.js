import React, { Component } from 'react';

class Row   extends Component {
    handleChoice = event => {
        this.props.check(this.props.row, this.props.column)
        // since this worked as a console log of ' I clicked' I can use this to act as a fetch for the API for this specifically targeted cell
    }
    flag= event => {
        this.props.flag(this.props.row, this.props.column)
        event.preventDefault()
        // since this worked as a console log of ' I clicked' I can use this to act as a fetch for the API for this specifically targeted cell
}
    render() {
        return(
            <td onClick={this.handleChoice} onContextMenu={this.flag}
            >{this.props.square}</td>
        )
    }
}
export default Row