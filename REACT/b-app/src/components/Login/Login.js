import React, { Component } from "react";
import axios from 'axios';
import HP from '..//HomePage/HP';
// import Registeration from '../Registeration/Registeration';
import { BrowserRouter as  Link} from 'react-router-dom';

export default class LT extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
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
        const { email, password } = this.state;

        axios.post(
                "http://127.0.0.1:8000/auth/token/login/",
                {
                    email : email,
                    password : password
                }
                
            )
        .then((response) => {
                console.log(response);
                console.log(response.data.auth_token);
                let tok = "Token "+response.data.auth_token;
                localStorage.setItem("token",tok);
                console.log(tok);
                fetch( "http://127.0.0.1:8000/auth/users/me/" ,
                {
                    method:'GET',
                    headers:{
                        'Authorization': tok ,
                        'Content-Type':'application/x-www-form-urlencoded'
                    }
                })
                .then(result => {
                    return result.json()
                })
                .then((response) => {
                    console.log(response)
                    localStorage.setItem("id",response.id);
                    localStorage.setItem("name",response.name);
                    this.props.history.push('/dashboard');
                })
                .catch(error => console.log(error));
                
              },
                (error) => {
                console.log(error);
              });
        
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <HP/>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-offset-3 col-md-6">
                            <div class="form_warp">
                                <h1>Experience joy in your work</h1>
                                <br/>
                                <div class="box">
                                    <form>
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <label>EMAIL ADDRESS</label>
                                        </div>
                                        <div>
                                            <input
                                                type="password"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <label>PASSWORD</label>
                                        </div>
                                        <div>
                                            <input type="submit" class="blue_bg" value="Login" id="sendEmail" onClick={this.handleSubmit}/> </div>
                                    </form>
                                    <br />

                                    <div class="reg">

                                        <Link to={'/registeration'}> If you don't have an Account Already. </Link>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

            );
    }
}