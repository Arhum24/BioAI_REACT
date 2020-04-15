import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import './graph.css'



export default class HL extends React.Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      labels: [],
	  datasets: [
		{
		  label: '14 Disease Freqency',
		  backgroundColor: '#3c8dbc',
		  borderColor: '#ffffff',
		  borderWidth: 1,
		  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		  hoverBorderColor: 'rgba(255,99,132,1)',
		  data: []
		}
	  ]
  
      
     
     
    };
  }
  componentDidMount() {
    
	let tok = localStorage.getItem("token");
        fetch("http://127.0.0.1:8000/main/graphDisease",
            {
                method: 'GET',
                headers: {
                    'Authorization': tok,
                }
            })
        .then(response => {return response.json()})
        .then(res=>{
		  console.log(res);
         
          var labels_ = this.state.labels
          var data_ = this.state.datasets
          res.map((key,index) =>{            
            labels_.push(key._id.disease);
            data_[0].data.push(key.count)
           
		  })
		  console.log(data_[0].data)
		  console.log(labels_)
          this.setState({labels:labels_})
          this.setState({datasets:data_})
        
        })
        .catch(function(error) {
            console.log(error)
        })
}
  render() {
   
 
    return (
      <div>
		  
		  <div className='chart-container-bar'>
        <HorizontalBar data={this.state} options={{maintainAspectRatio:false}}/>
        </div>

      </div>
    );
  }
}