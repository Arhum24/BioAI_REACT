import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import HP from '../components/HomePage/HP';
// import FP from '../components/FrontPage/FP';
import BI from '../components/BackgroundImage/BI';
// import FrontPage from '../components/FrontPage/FrontPage';
// import Graph1 from '../components/Graphs/GraphLine';
// import Graph2 from '../components/Graphs/HorizontalLine';
// import Graph3 from '../components/Graphs/Bar';
// import Graph4 from '../components/Graphs/Line';
// import Graph5 from '../components/Graphs/Doughnut';
import RG from '../components/Registeration/Registeration';
import LT from '../components/Login/Login';
import DA from '../components/Graphs/Graphs';
import SearchAppoi from '../components/Appointments/Show Appointment';
import AddAppoi from '../components/Appointments/Add Appointments';
import EditAppoi from '../components/Appointments/Edit Appointments';
import PA from '../components/Patients/Show Patients';
// import AddPatient from '../components/Appointments/Edit Appointments';
// import SearchPatient from '../components/Appointments/Edit Appointments';
// import EditPatient from '../components/Appointments/Edit Appointments';
import NotFoundPage from '../components/PageNotFound';



const AppH = () => (
    
    

    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={BI} exact={true}/>
        <Route path="/login" component={LT} />
        <Route path="/registeration" component={RG} />
        <Route path="/dashboard" component={DA} />
        <Route path="/Patient" component={PA}/>
        {/* <Route path="/AddPatient" component={AddPatient}/> */}
        {/* <Route path="/SearchPatient" component={SearchPatient}/> */}
        {/* <Route path="/EditPatient" component={EditPatient}/> */}
        <Route path="/AddApponitment" component={AddAppoi}/>
        <Route path="/SearchAppointment" component={SearchAppoi}/>
        <Route path="/EditAppointment" component={EditAppoi}/>
        <Route component={NotFoundPage} />
      </Switch>
      </div>  
    </BrowserRouter>
  );

  export default AppH;