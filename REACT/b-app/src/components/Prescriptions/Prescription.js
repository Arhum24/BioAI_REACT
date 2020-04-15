import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './pres.css'

export default class Prescription extends Component {
    constructor(props){
        super(props)
        this.state = {
            Medicines : [],
            medicineName : "",
            startDate: new Date(),
            Comment : ""
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    

    componentDidMount(){
        fetch("http://127.0.0.1:8000/main/medicine",
            {
                method: 'GET'
            })
            .then(result => {
                return result.json()
            }
            )
            .then((resultFinal) => {
                console.log(resultFinal);

                let med = this.state.Medicines
                var t = resultFinal.map((key) => {
                    console.log(key.Name)
                    med.push(key.Name)
                    return 0
                }
                
                );
                
                this.setState({Medicines:med});
                console.log("Final Medicines = "+ med)
            }
            )
            .catch(error => console.log(error));
    }

    handleChangeDate(date){
        let d =date.toISOString();
        this.setState({
            startDate : d
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event){
        event.preventDefault();
        let token = localStorage.getItem("token")
        let did = localStorage.getItem("did")
        fetch("http://127.0.0.1:8000/main/prescription",
            {
                method : 'POST',
                headers : {
                    Authorization : token,
                    "Content-Type" : "application/x-www-form-urlencoded"
                },
                body : {
                    Diagnosis_ID : did,
                    Medicines : this.state.medicineName,
                    Date : this.state.startDate,
                    Comment : this.state.Comment
                }
            })
            .then(result => {
                return result.json()
            }
            )
            .then((resultFinal) => {
                console.log(resultFinal)
            }
            )
            .catch(error => console.log(error));
    }

    render(){
        return(
            <div className="container">
                <div className="con">
                <label className="Pl">
                    Prescription
                </label>

                <Autocomplete
                    id="combo-box-demo"
                    options={this.state.Medicines}
                    getOptionLabel={option => option.title}
                    style={{ width: 250 }}
                    renderInput={params =>  <TextField {...params} onChange={this.handleChange} name="medicineName" label="Diagnosis Type" variant="outlined" />}
                />

                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChangeDate}
                    showTimeSelect
                    dateFormat="yyyy/MM/dd"
                />

                <form>
                <label for="comment">Comments:</label>
                <textarea class="form-control" rows="5" id="Food" value={this.state.Comment} name="Comment" onChange={this.handleChange}>
                </textarea>
                <button onClick={this.onSubmit}>Save</button>
                </form>

            </div>

            </div>
        );
    }

    
}