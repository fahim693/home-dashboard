import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Appointment from './pages/Appointment'
import AppointmentEdit from './pages/AppointmentEdit'
import AppointmentLists from './pages/AppointmentList';
import AppointmentAddNew from './pages/AppointmentAddNew';
import AppointmentAddNewInvoice from './pages/AppointmentAddNewInvoice';
import CustomerNew from './pages/CustomerNew';
import CustomerDetails from './pages/CustomerDetails'
import CustomerEdit from './pages/CustomerEdit'
import CustomerList from './pages/CustomerList';
import EmployeeNew from './pages/EmployeeNew';
import EmployeeDetails from './pages/EmployeeDetails';
import EmployeeEdit from './pages/EmployeeEdit';
import EmployeeList from './pages/EmployeeList';
import QuoteNew from './pages/QuoteNew';
import QuoteNewInvoice from './pages/QuoteNewInvoice';
import Quote from './pages/Quote';
import QuoteEdit from './pages/QuoteEdit';
import QuoteList from './pages/QuoteList';
import More from './pages/More';
import BusinessProfile from './pages/BusinessProfile';
import BusinessProfileEdit from './pages/BusinessProfileEdit';
import ItemTable from './pages/PriceBookTables/ItemTable';
import ServiceTable from './pages/PriceBookTables/ServiceTable';
// import test from './pages/Reports';
import Hours from './pages/Hours';
import Home from './pages/Home';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import SettingUpAccount from './pages/SettingUpAccount';
import ExistingSubscriptionPlan from './pages/ExistingSubscriptionPlan';
import Invoice from './pages/Invoice';
import Schedule from './pages/Schedule';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Reports from './pages/Reports';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/appointment-list" component={AppointmentLists} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/edit" component={AppointmentEdit} />
        <Route exact path="/add" component={AppointmentAddNew} />
        <Route exact path="/add-invoice" component={AppointmentAddNewInvoice} />
        <Route exact path="/customer-new" component={CustomerNew} />
        <Route exact path="/customer" component={CustomerDetails} />
        <Route exact path="/customer-edit" component={CustomerEdit} />
        <Route exact path="/customer-list" component={CustomerList} />
        <Route exact path="/employee-new" component={EmployeeNew} />
        <Route exact path="/employee" component={EmployeeDetails} />
        <Route exact path="/employee-edit" component={EmployeeEdit} />
        <Route exact path="/employee-list" component={EmployeeList} />
        <Route exact path="/quote-new" component={QuoteNew} />
        <Route exact path="/quote-new-invoice" component={QuoteNewInvoice} />
        <Route exact path="/quote" component={Quote} />
        <Route exact path="/quote-edit" component={QuoteEdit} />
        <Route exact path="/quote-list" component={QuoteList} />
        <Route exact path="/more" component={More} />
        <Route exact path="/business-profile" component={BusinessProfile} />
        <Route exact path="/business-profile-edit" component={BusinessProfileEdit} />
        <Route exact path="/service-table" component={ServiceTable} />
        <Route exact path="/item-table" component={ItemTable} />
        <Route exact path="/hours" component={Hours} />
        {/* <Route exact path="/test" component={test} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/setting-up" component={SettingUpAccount} />
        <Route exact path="/existing-plan" component={ExistingSubscriptionPlan} />
        <Route exact path="/generate-invoice" component={Invoice} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/reports" component={Reports} />

      </Router>
    </DndProvider>
  )
}

export default App;
