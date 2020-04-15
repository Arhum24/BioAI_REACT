import React, { Component } from 'react';
import FP from '../FrontPage/FP';
import './SPD.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DietPlan from '../Diet Plan/DietPlan';
import Pres from '../Prescriptions/Prescription';
import { Link } from "react-router-dom";
import './dia.css';
import axios from 'axios'
export default class Diagnosis extends Component {
    constructor(props){
        super(props);
        this.state = {
            DiagnosisType : [
                {title : "X-Ray Image Upload"},
                {title : "Biopsy Image Upload"}
            ],
            show : false,
            type : "",
            file : null,
            Result : "nfiltration",
            other : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSD = this.handleSD.bind(this);
        this.handleImage = this.handleImage.bind(this);
        // this.sendImage = this.sendImage.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        
      }

    handleImage(event){
        this.setState({
            file: event.target.files[0]
          })
       }

       sendImage(event){
        const ima = new FormData();
        ima.append('image', this.state.file,this.state.file.name);

        axios.post('http://192.168.0.100:3004/predict/',
         ima, 
         {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
        }
        )
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err))
        }

    handleSD(event){
        event.preventDefault();
        let token = localStorage.getItem("token");
        let pid = localStorage.getItem("pid");
        let id = localStorage.getItem("id");
        console.log(this.state.file);
        const Ifd = new FormData();
        Ifd.append("Doctor_ID",id);
        Ifd.append("Patient_ID",pid);
        Ifd.append("DiseaseName",this.state.Result);
        Ifd.append("Image", this.state.file,this.state.file.name);
        console.log(Ifd);

    
    axios.post('http://127.0.0.1:8000/main/diagnose', Ifd, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization : token
        }
      })
          .then(res => {
            console.log(res.data);
            localStorage.setItem("did",res.data.id);
            this.setState({show:true});
          })
          .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <FP/>
            <div className="moveD">
                <label className="l">
                    Start Diagnosis
                </label>

                
                <div className="imagebox">
                    <img src={this.state.file}
                         className="img"
                         name="image" 
                         alt="Your Upload will Show Here"/>
                </div>
                
                <input type="text" className="result" value={this.state.Result} style={{outline: "none"}}/>                
                
                <div className="cbox">
                <Autocomplete
                    id="combo-box-demo"
                    options={this.state.DiagnosisType}
                    getOptionLabel={option => option.title}
                    style={{ width: 250 }}
                    renderInput={params => <TextField {...params} onChange={this.handleChange} name="type" label="Diagnosis Type" variant="outlined" />}
                />
                </div>

               <form className="formbox">
                    <input 
                        type="file"  
                        className="file" 
                        onChange={this.handleImage}
                    />
                    <button class="btn btn-warning" className="bt" onClick={this.sendImage}> Start Diagnosis </button>
                    <br/>
                    <input type="submit" className="sub" value="Save Changes" onClick={this.handleSD}/>
                </form>

                { this.state.show && <Pres /> }
                { this.state.show && <DietPlan /> }

                <Link to="/ShowDiagnosis" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" style={{marginLeft:"-55%", marginTop:"-3%"}}> Go Back </Link>
            </div>
            </div>
        );
    }

}