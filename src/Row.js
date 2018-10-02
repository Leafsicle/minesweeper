import React, { Component } from 'react';

class Row   extends Component {
    handleChoice = event => {
        this.props.check(this.props.row, this.props.column)
        // since this worked as a console log of ' I clicked' I can use this to act as a fetch for the API for this specifically targeted cell but HOW????
    }
    flag= event => {
        this.props.flag(this.props.row, this.props.column)
        event.preventDefault()
}
    render() {
        let output=this.props.square
        if(output === '*'){
            output='💩'
        }
        if(output=== '_'){
            output='_' 
            let className='clear'
        }
        return(
            <td onClick={this.handleChoice} onContextMenu={this.flag}>
                {output}
            </td>
        )
    }
}
export default Row


