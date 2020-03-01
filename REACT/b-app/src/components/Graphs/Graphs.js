import React, { Component } from 'react';
import FP from '../FrontPage/FP';
import GraphLine from '../Graphs/GraphLine';
import HorizontalLine from '../Graphs/HorizontalLine';
import Doughnut from '../Graphs/Doughnut';

export default class Graph extends Component{
    render(){
        return(
            <div>
                <FP/>
            <GraphLine/>
            <HorizontalLine/>
            <Doughnut/>
            </div>
        );
    }
}
