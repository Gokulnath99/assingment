import reactDom from "react-dom";
import axios from 'axios';
import React, { Component } from 'react';

export default class Insert extends Component {

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeJob = this.onChangeJob.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name:'',
            Job: '',
            Status:'',
        }
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        })
    };

    onChangeJob(e) {
        this.setState({
            Job: e.target.value
        })
    };

    onChangeStatus(e) {
        this.setState({
            Status: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            Name: this.state.Name,
            Job: this.state.Job,
            Status: this.state.Status
        };

        axios.post('http://localhost/projects/insert.php',obj)
        .then(res => console.log(res.data));

        this.setState({
            Name:'',
            Job: '',
            Status: '',
        })

    }


    render() {
        return(
            <div>
                <h3>
                    add new user
                </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.Job}
                            onChange={this.onChangeJob}
                        />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.Status}
                            onChange={this.onChangeStatus}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit" 
                            value="Add to database" 
                            className="btn btn-primary"/>
                    </div> 
                </form>
            </div>
        )
    }
}