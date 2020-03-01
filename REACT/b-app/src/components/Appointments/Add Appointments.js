import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Add_Appointment extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            phone_number:"",
            startDate: new Date(),
            td:""
        };

        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }
    handleChangeDate(date){
        let d =date.toISOString();
        this.setState({
            startDate : date,
            td : d
        });
        console.log(this.state.td);
        console.log(this.state.startDate);
    }
    
    handleChangeForm(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleButton(event) {
        const { name, phone_number,  td } = this.state;

        axios.post(
                "http://127.0.0.1:8000/main/appointment/",
                {
                    name:name,
                    phone_number:phone_number,
                    date:td
                }
                
            ).then((response) => {
                console.log(response);
              }, (error) => {
                console.log(error);
              });
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form>
                    <div>
                         <label>NAME</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChangeForm}
                            required
                        />
                    </div>
                    <div>
                         <label>PHONE NUMBER</label>
                        <input
                            type="number"
                            name="phone_number"
                            value={this.state.phone_number}
                            onChange={this.handleChangeForm}
                            required
                        />
                    </div>
                    <div className="date">
                    <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChangeDate}
                    showTimeSelect
                    dateFormat="yyyy/MM/dd"
                    />
                    </div>
                    <input type="button" value="Add Appointment" onClick={this.handleButton}/>
                </form>
            </div>
        );
    }
}