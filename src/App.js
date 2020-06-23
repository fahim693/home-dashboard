import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Appointment from './pages/Appointment'
import AppointmentEdit from './pages/AppointmentEdit'
import AppointmentLists from './pages/AppointmentList';
import AppointmentAddNew from './pages/AppointmentAddNew';
import AppointmentAddNewInvoice from './pages/AppointmentAddNewInvoice';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Appointment} />
      <Route exact path="/edit" component={AppointmentEdit} />
      <Route exact path="/appointments" component={AppointmentLists} />
      <Route exact path="/add" component={AppointmentAddNew} />
      <Route exact path="/add-invoice" component={AppointmentAddNewInvoice} />
    </Router>
  )
}

export default App;
