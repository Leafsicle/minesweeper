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
            output=' '
        }
        return(
            <td onClick={this.handleChoice} onContextMenu={this.flag}>
                {output}
            </td>
        )
    }
}
export default Row


// CLASS_NAMES = {
//     '*': 'cell-bomb',
//     F: 'cell-flag',
//     '@': 'cell-flag',
//     ' ': 'cell-covered'
//   }

//   VALUES = { '*': '💣', F: '⚑', '@': '⚑', _: ' ' }

//   render() {
//     return (
//       <td
//         className={this.CLASS_NAMES[this.props.value] || 'cell-exposed'}
//         onContextMenu={this.handleFlag}
//         onClick={this.handleCheck}
//       >
//         {this.VALUES[this.props.value] || this.props.value}