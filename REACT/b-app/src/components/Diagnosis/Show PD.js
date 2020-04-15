import React, { useEffect } from 'react';
import FP from '../FrontPage/FP';
import './SPD.css';
import MaterialTable from 'material-table';
import { Link } from "react-router-dom";


export default function SimpleAction(props) {

    const [Pdata, setPdata] = React.useState([]);

    useEffect(() => {
        let tok = localStorage.getItem("token");
        fetch( "http://127.0.0.1:8000/main/patient" ,
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
                .then((resultFinal) => {
                   console.log(resultFinal);
                   setPdata(resultFinal)
                  }
                  )
                .catch(error => console.log(error));
      },[]
      );
    
    const constRedirectTo = () =>{
        props.history.push("/ShowDiagnosis");
    }

    return (
      <div>
        <FP/>
        <div className="moveT">
      <Link to="/dashboard" class="btn btn-secondary btn-lg active" aria-pressed="true"> Go Back </Link>
      <MaterialTable
        title="Patients for Diagnosis"
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'First Name', field: 'FirstName' },
          { title: 'Last Name', field: 'LastName' },
          { title: 'Email', field: 'Email' },
          { title: 'CNIC', field: 'CNIC' },
          { title: 'Phone Number', field: 'Phone_Number' },
          { title: 'Address', field: 'Address' },
          { title: 'Birth Year', field: 'DOB', type: 'date' },
        ]}
        data={Pdata}        
        actions={[
          {
            icon: 'save',
            tooltip: 'Save',
            onClick: (event, rowData) => {
                console.log(rowData.id)
                localStorage.setItem("pid",rowData.id)
                constRedirectTo()
            }
          }
        ]}
      />
      </div>
      </div>
    )
  }