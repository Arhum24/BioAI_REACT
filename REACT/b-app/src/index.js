import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import AppH from './routers/AppH';
// import Appo from './components/Appointments/Add Appointments';
import * as serviceWorker from './serviceWorker';






// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render( <AppH/> , document.getElementById('root'));







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
