import React, { useEffect } from 'react';
import MaterialTable from 'material-table';

export default function Patient() {

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

  const [state, setState] = React.useState({
    columns: [
      { title: 'First Name', field: 'FirstName' },
      { title: 'Last Name', field: 'LastName' },
      { title: 'Email', field: 'Email' },
      { title: 'CNIC', field: 'CNIC' },
      { title: 'Phone Number', field: 'Phone_Number' },
      { title: 'Address', field: 'Address' },
      { title: 'Date of Birth', field: 'DOB', type: 'date' },
    ],
    // data: [
    //   [Pdata]
    // ],
  });

  return (
    <MaterialTable
      title="Patient"
      columns={state.columns}
      data={Pdata}
      editable={{

        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),


        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),


        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}