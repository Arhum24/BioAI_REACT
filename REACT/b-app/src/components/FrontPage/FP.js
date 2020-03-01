import React, { Component } from "react";
// import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
import logo from './Front Icon.png';
import './FP.css';
import { Link } from "react-router-dom";

export default class HP extends Component {
    constructor(props) {
        super(props);

        this.Logout = this.Logout.bind(this);
    }

    Logout(){
        localStorage.clear();
    }
    
    render() {
        let person = localStorage.getItem("name");
        return (
            <div>

                <header id="header">

                    <div class="container">

                        <div id="logo" class="pull-left">
                            <h1><a href="#intro" class="scrollto">{person}</a></h1>

                            <a href="#intro"><img src={logo} alt="BioAI Logo" title="Logo" width='70' height='70' /></a>
                        </div>

                        <nav id="nav-menu-container">
                            <ul class="nav-menu">
                                <li class="menu-active">
                                    <Link to="/dashboard"> Dashboard </Link>
                                </li>
                                
                                <li>
                                    <Link to="/" onClick={this.Logout}> Logout </Link>
                                </li>
                            </ul>
                        </nav>

                </div>
                </header>

                <div id="sidebar">
                    
                    <a href="/" className="side"> Dashboard</a>
                    <p>--------------------------------------</p>
                    <Link to="/Patient" > Patient </Link>
                    <a href="/" className="side">Appointment</a>
                    {/* <label>About</label>
                    <p>We are here to help you not replace you. This is a tool, you are still the architect</p> */}
                </div>

            </div>

        );
    }
}