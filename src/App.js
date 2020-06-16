import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Appointment from './pages/Appointment'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Appointment} />
    </Router>
  )
}

export default App;
