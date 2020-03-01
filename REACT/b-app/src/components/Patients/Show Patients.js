import React from 'react';
import MaterialTable from 'material-table';

export default class Editable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            dummy:true,
            id:"",
            FirstName:"",
            LastName:"",
            Email:"",
            CNIC:"",
            Phone_Number:"",
            Address:"",

            columns: [
                { title: 'First Name', field: 'FirstName' },
                { title: 'Last Name', field: 'LastName' },
                { title: 'Email', field: 'Email' },
                { title: 'CNIC', field: 'CNIC' },
                { title: 'Phone Number', field: 'Phone_Number' },
                { title: 'Address', field: 'Address' },
                { title: 'Date of Birth', field: 'DOB', type: 'date' },
            ],
            data: []
        }
    }

    componentDidMount() {
        let tok = localStorage.getItem("token");
        fetch("http://127.0.0.1:8000/main/patient",
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
                this.setState( { dummy : false } );
                this.setState({ data: resultFinal });
            }
            )
            .catch(error => console.log(error));
    }

    render() {
        return (
            <MaterialTable
                title="Patients"
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
                                          FirstName:n.FirstName, 
                                          LastName:n.LastName,
                                          Email:n.Email,
                                          CNIC:n.CNIC,
                                          Phone_Number:n.Phone_Number,
                                          Address:n.Address 
                                        })
                                    // Adding the Add API
                                    let id = localStorage.getItem("id");
                                    let token = localStorage.getItem("token");
                                    let data_Send = JSON.stringify({
                                        Doctor_ID: Number(id),
                                        FirstName: this.state.FirstName,
                                        LastName: this.state.LastName,
                                        Email: this.state.Email,
                                        CNIC: Number(this.state.CNIC),
                                        Phone_Number: Number(this.state.Phone_Number),
                                        Address: this.state.Address
                                    })
                                    console.log(data_Send)
                                    fetch('http://127.0.0.1:8000/main/patient', 
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
                                          FirstName:n.FirstName, 
                                          LastName:n.LastName,
                                          Email:n.Email,
                                          CNIC:n.CNIC,
                                          Phone_Number:n.Phone_Number,
                                          Address:n.Address 
                                        })
                                    // Adding the Add API
                                    let id = localStorage.getItem("id");
                                    let token = localStorage.getItem("token");
                                    let data_Send = JSON.stringify({
                                        Doctor_ID: Number(id),
                                        FirstName: this.state.FirstName,
                                        LastName: this.state.LastName,
                                        Email: this.state.Email,
                                        CNIC: Number(this.state.CNIC),
                                        Phone_Number: Number(this.state.Phone_Number),
                                        Address: this.state.Address
                                    })
                                    console.log(data_Send)
                                    fetch("http://127.0.0.1:8000/main/patient/"+(n.id), 
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
                                    fetch("http://127.0.0.1:8000/main/patient/"+(n.id), 
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
        )
    }
}