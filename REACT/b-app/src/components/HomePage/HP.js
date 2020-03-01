import React, { Component } from "react";
import logo from './Front Icon.png';
import { Link } from 'react-router-dom';
import './HP.css';


export default class HP extends Component {
    
    
    render() {
        return (
            <div>

                <header id="header">

                    <div class="container">

                        <div id="logo" class="pull-left">
                            <h1><a href="#intro" class="scrollto">BioAI</a></h1>

                            <a href="#intro"><img src={logo} alt="BioAI Logo" title="Logo" width='70' height='70' /></a>
                        </div>

                        <nav id="nav-menu-container">
                            <ul class="nav-menu">
                                <li class="menu-active">
                                    <Link to={'/'}> Home </Link>
                                </li>
                                <li>
                                    <Link to={'/login'}> Login </Link>
                                </li>
                                <li>
                                    <Link to={'/registeration'} > Sign-Up </Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </header>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>


        );
    }
}