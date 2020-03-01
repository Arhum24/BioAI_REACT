import React, { Component } from "react";
import HP from '..//HomePage/HP';
import background from './b3.png';
import './BI.css';

export default class BI extends Component {
    myFunction(){
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
    render() {
        return (
            <div>
                <HP/>
                <img class='back' src={background} alt='BioAI BackGround' />
                
                <div class="popup" onClick={this.myFunction.bind(this)}>About
                        <span class="popuptext" id="myPopup">Contact us on +91 LOL LMAO BioAI@technology.com.</span>
                </div>
            </div>
        );
    }
}