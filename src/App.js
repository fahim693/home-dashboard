import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Appointment from './pages/Appointment'
import AppointmentEdit from './pages/AppointmentEdit'
import AppointmentLists from './pages/AppointmentList';
import AppointmentAddNew from './pages/AppointmentAddNew';
import AppointmentAddNewInvoice from './pages/AppointmentAddNewInvoice';
import CenteredTabs from './components/Tabs/Tabs';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={AppointmentLists} />
      <Route exact path="/appointment" component={Appointment} />
      <Route exact path="/edit" component={AppointmentEdit} />
      <Route exact path="/add" component={AppointmentAddNew} />
      <Route exact path="/add-invoice" component={AppointmentAddNewInvoice} />
      <Route exact path="/tabs" component={CenteredTabs} />
    </Router>
  )
}

export default App;
