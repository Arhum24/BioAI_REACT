import React, { Component } from "react";
import axios from 'axios';
import HP from '..//HomePage/HP';
// import ls from 'local-storage';
import './Registeration.css';
// import { Redirect } from "react-router-dom";

export default class Registeration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect:false,
            username: "",
            name: "",
            cnic: "",
            licence: "",
            email: "",
            password: "",
            re_password: "",
            qualification: "",
            phone_number: "",

            registrationErrors: [],
            is_error: false,
            password_error: "",
            username_error: "",
            cnin_error: "",
            licence_error: "",
            email_error: "",
            re_password_error: "",
            qualification_error: "",
            phone_number_error: "",
            name_error: "",

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    errorChanges() {
        const { registrationErrors } = this.state;
        var obj = registrationErrors[0];
        Object.keys(obj).map((key) => {
            if (key === 'password') {
                var pass_error = obj[key][0];
                this.setState({ password_error: pass_error });

            }
            if (key === 'name') {
                var name_error = obj[key][0];
                this.setState({ name_error: name_error });

            }
            if (key === 're_password') {
                var re_pass_error = obj[key][0];
                this.setState({ re_password_error: re_pass_error });

            }
            if (key === 'cnic') {
                var cnic_error = obj[key][0];
                this.setState({ cnic_error: cnic_error });

            }
            if (key === 'phone_number') {
                var phone_numb_error = obj[key][0];
                this.setState({ phone_number_error: phone_numb_error });

            }
            if (key === 'licence') {
                var licence_error = obj[key][0];
                this.setState({ licence_error: licence_error });

            }
            if (key === 'qualification') {
                var qual_error = obj[key][0];
                this.setState({ qualification_error: qual_error });

            }
            if (key === 'email') {
                var email_error = obj[key][0];
                this.setState({ email_error: email_error });

            }

        })


    }
    //{username:username,name:name,cnic:cnic,licence:licence,email:email,password:password,re_password:re_password,qualification:qualification,phone_number:phone_number},
    //"http://127.0.0.1:8000/auth/users/",        
    handleSubmit(event) {
        const { username, name, cnic, licence, email, password, re_password, qualification, phone_number } = this.state;

        fetch('http://127.0.0.1:8000/auth/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            
            body: JSON.stringify({
                username: username,
                name: name,
                cnic: Number(cnic),
                licence: Number(licence),
                email: email,
                password: password,
                re_password: re_password,
                qualification: qualification,
                phone_number: Number(phone_number)

            })

            }
            )
            .then(response => {

                // console.log(response.body)
                if (response.ok) {
                    this.setState({redirect:true});
                    let message = response.json();
                    // console.log(message);
                    // console.log(message.username);
                    axios.post(
                        "http://127.0.0.1:8000/auth/token/login/",
                        {
                            email: this.state.email,
                            password: this.state.password
                        }
                              )
                    .then((res) => {
                        console.log(res);
                        let tok = "Token "+res.data.auth_token;
                        localStorage.setItem("token", tok);
                        // Redirect("/dashboard");

                    }, 
                    (error) => {
                        console.log(error);
                    });
                    return message;
                } 
                else {
                    let message = response.json();
                    // console.log(message);
                    this.setState({ is_error: true });
                    alert("Please Enter correct Credentials");
                    console.log("Something Went Wrong....");

                    return message;

                }
            }
            ).then(result => {
                console.log(result);
                if(this.state.redirect === true)
                {
                localStorage.setItem("id",result.id);
                localStorage.setItem("username",result.username);
                localStorage.setItem("name",result.name);
                localStorage.setItem("cnic",result.cnic);
                localStorage.setItem("licence",result.licence);
                localStorage.setItem("email",result.email);
                localStorage.setItem("password",result.password);
                localStorage.setItem("qualification",result.qualification);
                localStorage.setItem("phone_number",result.phone_number);
                this.props.history.push('/dashboard');
                }
                const { is_error } = this.state;
                if (is_error) {
                    var temp = this.state.registrationErrors
                    temp.push(result)
                    this.setState({ registrationErrors: temp })
                    this.errorChanges();
                }
            }
            ).catch(
                error => 
                    alert("Enter Correct Credentials"));


        event.preventDefault();
    }

    render() {

        // const { registrationErrors } = this.state;


        return (
            <div>
                <HP/>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-offset-3 col-md-6">
                            <div class="form_warp">
                                <h1>Start Now your journey of Success</h1>
                                <div class="box">
                                    <form>


                                        <div></div>
                                        <div>
                                            <input
                                                type="text"
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <label>USERNAME</label>
                                            <p style={{ color: "red" }}>{this.state.username_error}</p>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                                required
                                            />

                                            <label>NAME</label>
                                            <p style={{ color: "red" }}>{this.state.name_error}</p>
                                        </div>
                                        <div>
                                            <input
                                                type="number"
                                                name="cnic"
                                                value={this.state.cnic}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <label>CNIC</label>
                                            <p style={{ color: "red" }}>{this.state.cnic_error}</p>
                                        </div>
                                        <div>
                                            <input
                                                type="number"
                                                name="phone_number"
                                                value={this.state.phone_number}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <label>PHONE NUMBER</label>
                                            <p style={{ color: "red" }}>{this.state.phone_number_error}</p>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="qualification"
                                                value={this.state.qualification}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <label>QUALIFICATION</label>
                                            <p style={{ color: "red" }}>{this.state.qualification_error}</p>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="licence"
                                                value={this.state.licence}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <label>LICENCE</label>
                                            <p style={{ color: "red" }}>{this.state.licence_error}</p>
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <label>EMAIL ADDRESS</label>
                                            <p style={{ color: "red" }}>{this.state.email_error}</p>
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
                                            <p style={{ color: "red" }}>{this.state.password_error}</p>
                                        </div>
                                        <div>
                                            <input
                                                type="password"
                                                name="re_password"
                                                value={this.state.re_password}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <label>PASSWORD CONFIRMATION</label>
                                            <p style={{ color: "red" }}>{this.state.re_password_error}</p>
                                        </div>
                                        <div>
                                            <input type="submit" class="blue_bg" value="Register" id="sendForm" onClick={this.handleSubmit} />
                                        </div>
                                    </form>
                                    <br />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}