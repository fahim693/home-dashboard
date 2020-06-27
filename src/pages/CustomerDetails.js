import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import Banner from '../components/CustomerBanner/Banner';
import ContactInfo from '../components/ContactInfo/ContactInfoFilled';
import Addresses from '../components/Addresses/AddressFilled';
import Notes from '../components/Notes/NotesFilled';
import Tags from '../components/Tags/TagsFilled';
import ExpansionTable from '../components/ExpansionTable/ExpansionTable';
import InvoiceExpansionTable from '../components/ExpansionTable/InvoiceExpansionTable';
import { rows, headerData } from '../data/AppointmentData'
import { WorkRounded, ReceiptRounded } from '@material-ui/icons';
import { invoiceData, invoiceHeader } from '../data/InvoicesTableData';

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
                        <ExpansionTable type='apt' headerData={headerData} data={rows} cardTitle="Appointments" icon={<WorkRounded className="main-title-icon" />} />
                    </Grid>
                    <Grid item xs={12} md={12} >
                        <InvoiceExpansionTable headerData={invoiceHeader} data={invoiceData} />
                    </Grid>
                    <Grid item xs={12} md={12} >
                        <ExpansionTable type='qts' headerData={headerData} data={rows} cardTitle="Quotes" icon={<ReceiptRounded className="main-title-icon" />} />
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
