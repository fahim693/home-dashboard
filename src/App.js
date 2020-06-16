import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Appointment from './pages/Appointment'
import AppointmentEdit from './pages/AppointmentEdit'
import AppointmentLists from './pages/AppointmentList';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Appointment} />
      <Route exact path="/edit" component={AppointmentEdit} />
      <Route exact path="/appointments" component={AppointmentLists} />
    </Router>
  )
}

export default App;
