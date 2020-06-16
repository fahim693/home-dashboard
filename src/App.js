import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Appointment from './pages/Appointment'
import AppointmentEdit from './pages/AppointmentEdit'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Appointment} />
      <Route exact path="/edit" component={AppointmentEdit} />
    </Router>
  )
}

export default App;
