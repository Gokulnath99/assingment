import React, { Component } from 'react';

class RecordList extends Component {
    render(){
        return(
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.job_config}
                </td>
                <td>
                    {this.props.obj.status}
                </td>
            </tr>
        );
    }
}

export default RecordList;