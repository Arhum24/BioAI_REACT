import React, { Component } from "react";
import HP from '..//HomePage/HP';
// import background from './b3.png';
import ba1 from './Ste2.jpg';
import ba2 from './Appoi.jpg';
import ba3 from './Bact.jpg';

import './BI.css';

export default class BI extends Component {
    myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
    render() {
        return (
            <div>
                <HP />
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="3000" pause="false" >
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="h-25 d-inline-block" style={{width: "1800px", height:"500px"}} src={ba1} alt="First slide"/>
                        </div>
                            <div class="carousel-item">
                                <img class="h-25 d-inline-block" style={{width: "1800px", height:"500px"}} src={ba2} alt="Second slide"/>
                            </div>
                                <div class="carousel-item">
                                    <img class="h-25 d-inline-block" style={{width: "1800px", height:"500px"}} src={ba3} alt="Third slide"/>
                                </div>
                                </div>
                            </div>

                            <div class="popup" onClick={this.myFunction.bind(this)}>About
                        <span class="popuptext" id="myPopup">Contact us on +91 LOL LMAO BioAI@technology.com.</span>
                            </div>
                        </div>
                        );
                    }
}