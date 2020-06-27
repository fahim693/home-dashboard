import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import Banner from '../components/CustomerBanner/Banner';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import Addresses from '../components/Addresses/Addresses';
import Notes from '../components/Notes/Notes';
import Tags from '../components/Tags/Tags';
import { customerData } from '../data/CustomerInfo';
import ExpansionTable from '../components/ExpansionTable/ExpansionTable';
import InvoiceExpansionTable from '../components/ExpansionTable/InvoiceExpansionTable';
import { rows, headerData } from '../data/AppointmentData'
import { WorkRounded, ReceiptRounded } from '@material-ui/icons';
import { invoiceData, invoiceHeader } from '../data/InvoicesTableData';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    }
}));

export default function CustomerEdit() {
    const classes = useStyles();

    return (
        <Layout active={1}>
            <div className={classes.root}>
                <Banner
                    edit={true}
                    confirmUrl="/customer"
                    balanceTypeText="Total Revenue"
                />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} >
                        <ContactInfo
                            data={customerData}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <Notes data={customerData} />
                            </Grid>
                            <Grid item xs={12} md={12} >
                                <Tags data={customerData} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Addresses data={customerData} isEdit={true} />
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
