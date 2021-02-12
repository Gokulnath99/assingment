import React, { Component } from 'react';
import axios from 'axios';
import RecordList from './recordlist';

export default class View extends Component {
    constructor(){
        super();
        this.state = {
            workers: [],
            selectedName:"anand",
            show: false,
        };
        this.showTable = this.showTable.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost/projects/view.php')
        .then(response => {
            this.setState({ workers: response.data });
        })
        .catch(function(error){
            console.log(error);
        })

    }

    handleDropdownChange(e) {
        this.setState({ selectedName: e.target.value });
      }

    userList(){
        return this.state.workers.map((object, i) => {
            if( object.name ==  this.state.selectedName) {
                return <RecordList obj={object} key={i}/>;
            }
        });
    }
    showTable() {
        this.setState({
          show: true
        });
      }

    render(){
        return(
            <div>
                <h3 align="center">Users List</h3>
                <select className= "dropdown"  style={{width: 150}} onChange={this.handleDropdownChange}>
                    {this.state.workers.map(items => (
                        <option key={items.id} value={items.name}>
                            {items.name}
                        </option>
                    ))}
                </select>
                <button onClick={this.showTable}>
                    Show Table
                </button>
                {
                    this.state.show &&
                    <table className= "table table-striped" style={{marginTop: 20}}>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Job</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            { this.userList() }
                        </tbody>
                    </table>
                }
            </div>

        )
    }
}