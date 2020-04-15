import React from 'react';
import FP from '../FrontPage/FP';
import './Appoi.css';
import MaterialTable from 'material-table';
import moment from 'moment';
import { Link } from "react-router-dom";

export default class Editable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            dummy:true,
            id:"",
            Name:"",
            Date:"",
            Time:"",
            Phone_Number:"",
            Email:"",

            columns: [
                { title: 'Name', field: 'Name' },
                { title: 'Date of Schedule', field: 'Date', type: 'date' },
                { title: 'Time of Schedule', field: 'Time', type:'time' },
                { title: 'Phone Number', field: 'Phone_Number', type:'number' },
                { title: 'Email', field: 'Email', type:'email' },
                
            ],
            data: []
        }
    }

    componentDidMount() {
        let tok = localStorage.getItem("token");
        fetch("http://127.0.0.1:8000/main/appointment",
            {
                method: 'GET',
                headers: {
                    'Authorization': tok,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(result => {

                return result.json()

            })
            .then((resultFinal) => {
                console.log(resultFinal);
                this.setState({ data: resultFinal });
            }
            )
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                
                    <FP/>
                    <div className="moveT">
                {/* <Link to="/dashboard" class="btn btn-secondary btn-lg active" aria-pressed="true"/> */}

            <MaterialTable
                title="Appointments"
                columns={this.state.columns}
                data={this.state.data}
                editable={{

                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const data = this.state.data;
                                    data.push(newData);
                                    // console.log(newData);
                                    let n = newData;
                                    console.log(n);
                                    this.setState(
                                        { 
                                          id:n.id,
                                          Name:n.Name, 
                                          Date:n.Date,
                                          Time:n.Time,
                                          Phone_Number:n.Phone_Number,
                                          Email:n.Email
                                        })
                                    // Adding the Add API
                                    let id = localStorage.getItem("id");
                                    let token = localStorage.getItem("token");
                                    let da = moment(this.state.Date).format('YYYY-MM-DD');
                                    let ti = moment(this.state.Time).format('hh:mm:ss');
                                    let data_Send = JSON.stringify({
                                        Doctor_ID: Number(id),
                                        Name: this.state.Name,
                                        Date: da,
                                        Time:ti,
                                        Phone_Number: this.state.Phone_Number,
                                        Email: this.state.Email
                                    })
                                    console.log(data_Send)
                                    fetch('http://127.0.0.1:8000/main/appointment', 
                                    {
                                        method: 'POST',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',
                                            'Authorization': token
                                        },
                                        body:data_Send
                                    }
                                    )
                                    .then((response) => {
                                            console.log(response);
                                            if(response.ok === true){
                                                this.setState({dummy:true});
                                            }
                                            return response.json()
                                        })
                                    .then( (result) => {
                                        console.log(result);
                                    })
                                    // Ends here
                                    this.setState({ data }, () => resolve());
                                }
                                resolve()
                            }, 1000)
                        }),


                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const data = this.state.data;
                                    const index = data.indexOf(oldData);
                                    data[index] = newData;
                                    let n = newData;
                                    console.log(n);
                                    this.setState(
                                        {
                                          id:n.id,
                                          Name:n.Name, 
                                          Date:n.Date,
                                          Time:n.Time,
                                          Phone_Number:n.Phone_Number,
                                          Email:n.Email
                                        })
                                    // Adding the Add API
                                    let id = localStorage.getItem("id");
                                    let token = localStorage.getItem("token");
                                    let da = moment(this.state.Date).format('YYYY-MM-DD');
                                    let ti = moment(this.state.Time).format('hh:mm');
                                    console.log(this.state.Date);
                                    console.log(this.state.Time);
                                    let data_Send = JSON.stringify({
                                        Doctor_ID: Number(id),
                                        Name: this.state.Name,
                                        Date: da,
                                        Time: ti,
                                        Phone_Number: this.state.Phone_Number,
                                        Email: this.state.Email
                                    })
                                    console.log(data_Send)
                                    fetch("http://127.0.0.1:8000/main/appointment/"+(n.id), 
                                    {
                                        method: 'PUT',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',
                                            'Authorization': token
                                        },
                                        body:data_Send
                                    }
                                    )
                                    .then((response) => {
                                            console.log(response);
                                            if(response.ok === true){
                                                this.setState({dummy:true});
                                            }
                                            return response.json()
                                        })
                                    .then( (result) => {
                                        console.log(result);
                                    })
                                    // Ends here
                                    this.setState({ data }, () => resolve());
                                }
                                resolve()
                            }, 1000)
                        }),


                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    let data = this.state.data;
                                    const index = data.indexOf(oldData);
                                    data.splice(index, 1);
                                    let n = oldData;
                                    console.log(n);
                                    this.setState(
                                        {
                                          id:n.id 
                                        })
                                    // Adding the Add API
                                    let token = localStorage.getItem("token");
                                    fetch("http://127.0.0.1:8000/main/appointment/"+(n.id), 
                                    {
                                        method: 'DELETE',
                                        headers: {
                                            'Authorization': token
                                        }
                                    }
                                    )
                                    .then((response) => {
                                            console.log(response);
                                            if(response.ok === true){
                                                this.setState({dummy:true});
                                            }
                                            return response.json()
                                        })
                                    .then( (result) => {
                                        console.log(result);
                                    })
                                    // Ends here
                                    this.setState({ data }, () => resolve());
                                }
                                resolve()
                            }, 1000)
                        }),
                }}
            />
            

            </div>
            </div>
            
        )
    }
}