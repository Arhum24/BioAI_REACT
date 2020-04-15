import React, { useEffect } from 'react';
import FP from '../FrontPage/FP';
import './SPD.css';
import MaterialTable from 'material-table';
import { Link } from "react-router-dom";

export default function ShowDiagnosis() {

    const [Ddata, setDdata] = React.useState([]);
    const [Pdata, setPdata] = React.useState([]);
    const [Didata, setDidata] = React.useState([]);

    useEffect(() => {
        let tok = localStorage.getItem("token");
        let pid = localStorage.getItem("pid");
        console.log(pid)
        // Diagnose Data
        try {
            fetch("http://127.0.0.1:8000/main/getDiagnosis/" + pid,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': tok
                    }
                })
                .then(result => {

                    return result.json()

                })
                .then((resultFinal) => {

                    console.log(resultFinal);
                    setDdata(resultFinal)
                }
                )
                .catch(error => console.log(error));
        }
        catch (err) {
            console.log(err)
        }

    }, []
    );




    return (
        <div>
            <FP/>
            <div className="moveT">
        <Link to="/ShowPatientforDiagnosis" class="btn btn-secondary btn-lg active" aria-pressed="true"> Go Back</Link>
        <MaterialTable
            title="Diagnosis"
            columns={[
                { title: 'Diagnosis ID', field: 'id', type: 'numeric' },
                { title: 'Patient ID', field: 'Patient_ID', type: 'numeric' },
                { title: 'Date', field: 'Date' },
                { title: 'Disease Name', field: 'DiseaseName' },
                { title: 'Image URL', field: 'Image' },
            ]}
            data={Ddata}
            detailPanel={rowData => {
                let tok = localStorage.getItem("token");
                // Prescription Data
                try {
                    fetch("http://127.0.0.1:8000/main/prescription/" + rowData.id,
                        {
                            method: 'GET',
                            headers: {
                                'Authorization': tok
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
                }
                catch (err) {
                    console.log(err)
                }
                // Diet Plan Data
                try {
                    fetch("http://127.0.0.1:8000/main/dietplan/" + rowData.id,
                        {
                            method: 'GET',
                            headers: {
                                'Authorization': tok
                            }
                        })
                        .then(result => {

                            return result.json()

                        })
                        .then((resultFinal) => {

                            console.log(resultFinal);
                            setDidata(resultFinal)
                        }
                        )
                        .catch(error => console.log(error));
                }
                catch (err) {
                    console.log(err)
                }
                // End
                return (
                    <div>
                        <h1>Hello this is the Dropdown Detail Panel</h1>
                        {Pdata} {Didata}
                    </div>
                )
            }}
        />
        <Link to="/AddDiagnosis" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Add Diagnosis </Link>
        </div>
        </div>
    )
}