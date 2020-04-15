import React, { Component } from 'react';
import './dp.css';

export default class DietPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Food: "",
            Instruction: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { Food, Instruction } = this.state;
        let tok = localStorage.getItem("token");
        let di = localStorage.getItem("did");
        fetch("",
            {
                method : 'POST',
                headers : {
                    'Authorization': tok,
                    'Content-Type': 'application/json'
                },
                body : {
                    Diagnosis_ID:di,
                    Food:Food,
                    Instruction:Instruction
                }
            }
        )
        .then( response => {
            return response.json()
        }

        )
        .then( result => {
            console.log(result);
        }

        )
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div className="con">
                    <label className="lab">
                        Diet Plan
                    </label>
                    <p>Add Diet Plan accordingly:</p>
                    <form>
                        <div class="form-group">
                            <label for="comment">Foods:</label>
                            <textarea class="form-control" rows="5" id="Food" value={this.state.Food} name="Food" onChange={this.handleChange}></textarea>


                            <label for="comment">Instruction:</label>
                            <textarea class="form-control" rows="5" id="Instruction" value={this.state.Instruction} name="Instruction" onChange={this.handleChange}></textarea>

                            <button onClick={this.handleSubmit}>Save</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}