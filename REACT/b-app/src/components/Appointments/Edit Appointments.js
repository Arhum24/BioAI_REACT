import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const API = "";


export default class Edit_Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            phone_number:'',
            startdate:'',
            td:'',
            appointments: []
        };

        this.EditAppointment.bind(this);
        this.UpdateAppointment.bind(this);
        this.handleChangeDate.bind(this);
        this.handleChangeForm.bind(this);
    }
    EditAppointment = (e) => {
        e.preventDefault();
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ appointments: data }));
    }

    UpdateAppointment = (e) => {
        e.preventDefault();
        const { name, phone_number, startdate } = this.state;
        let data = {
            name, phone_number, startdate
        };
        fetch(API, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            if (response.ok) {
                alert('Record Updated Successfully')
            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        })

    }

    handleChangeDate(date){
        let d =date.toISOString();
        this.setState({
            startDate : date,
            td : d
        });
    }

    handleChangeForm(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ appointments: data }));
    }
    render() {
        return (
            <div>
                <form name="editform">
                    <table align="center">
                        <tr>
                            <td>Name of Person</td>
                            <td><input type="text" ref="newname" placeholder="Enter New Name" value={this.state.appointments.name} onChange={this.handleChangeForm}></input></td>
                        </tr>
                        <tr>
                            <td>Phone Number of Person</td>
                            <td><input type="text" ref="newd" placeholder="Enter New Phone Number" value={this.state.appointments.phone_number} onChange={this.handleChangeForm}></input></td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChangeDate}
                                showTimeSelect
                                dateFormat="yyyy/MM/dd"
                            />
                        </tr>
                        <tr>
                            <td colSpan="2" align="center">
                                <input type="hidden" ref="id" value={this.state.appointments._id}></input></td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center">
                                <button onClick={this.UpdateAppointment}>Update Appointment</button></td>
                        </tr>

                    </table>
                </form>
            </div>
        );
    };
}