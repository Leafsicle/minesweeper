import React, { Component } from 'react';

class Row   extends Component {
    render() {
        return(
          <div>   
            <tr>
              <td>{this.props.square}</td>
            </tr>
          </div>
        )
    }
}
export default Row