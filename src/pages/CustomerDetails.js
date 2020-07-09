import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import Banner from '../components/CustomerBanner/Banner';
import ContactInfo from '../components/ContactInfo/ContactInfoFilled';
import Addresses from '../components/Addresses/AddressFilled';
import Notes from '../components/Notes/NotesFilled';
import Tags from '../components/Tags/TagsFilled';
import AppointmentExapansionTable from '../components/ExpansionTable/AppointmentExapansionTable';
import InvoiceExpansionTable from '../components/ExpansionTable/InvoiceExpansionTable';
import { rows } from '../data/AppointmentData'
import { invoiceData } from '../data/InvoicesTableData';
import QuotesExpansionTable from '../components/ExpansionTable/QuotesExpansionTable';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    },
    formControl: {
        minWidth: 185,
    }
}));

export default function CustomerDetails() {
    const classes = useStyles();

    return (
        <Layout active={1}>
            <div className={classes.root}>
                <Banner
                    balanceTypeText="Total Revenue"
                    screenType='cust'
                />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} >
                        <ContactInfo />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <Notes />
                            </Grid>
                            <Grid item xs={12} md={12} >
                                <Tags />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Addresses />
                    </Grid>
                    <Grid item xs={12} md={12} >
                        <AppointmentExapansionTable data={rows} />
                    </Grid>
                    <Grid item xs={12} md={12} >
                        <InvoiceExpansionTable data={invoiceData} />
                    </Grid>
                    <Grid item xs={12} md={12} >
                        <QuotesExpansionTable data={rows} />
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
