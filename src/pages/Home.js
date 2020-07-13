import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import TotalSales from '../components/TotalSales/TotalSales';
import OpenOnlineBookings from '../components/OnlineBookings/OpenOnlineBookings';
import NewCustomers from '../components/NewCustomers/NewCustomers';
import Transactions from '../components/Transactions/Transactions';
import UpcomingAppointments from '../components/UpcomingAppointments/UpcomingAppointments';
import OpenInvoices from '../components/OpenInvoices/OpenInvoices';
import EmployeeOnCall from '../components/EmployeeOnCall/EmployeeOnCall';
import AppointmentsChart from '../components/Charts/AppointmentsChart';
import QuotesChart from '../components/Charts/QuotesChart';
import SalesChart from '../components/Charts/SalesChart';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
        marginTop: 70
    },
    formControl: {
        minWidth: 185,
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <Layout active={0}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} >
                        <TotalSales />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <OpenOnlineBookings />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <NewCustomers />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Transactions />
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <SalesChart />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <UpcomingAppointments />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <OpenInvoices />
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <EmployeeOnCall />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <AppointmentsChart />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <QuotesChart />
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
