import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import BannerEmployee from '../components/CustomerBanner/BannerEmployee';
import BusinessProfile from '../components/BusinessProfile/BusinessProfileEdit'
import { businessProfileData } from '../data/BusinessProfileData';
import Card from '../components/Card/Card'
import AppointmentAddressEdit from '../components/AppointmentAddressEdit/AppointmentAddressEdit';
import { LocationOnRounded } from '@material-ui/icons';
import TaxRates from '../components/TaxRates/TaxRatesEdit';
import { taxRateData } from '../data/TaxRateData';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    }
}));

export const customerData = {
    street_address: "941 Baker's Street",
    city: 4,
    state: 4,
    zip: 50008
}

export default function BusinessProfileEdit() {
    const classes = useStyles();

    return (
        <Layout active={6}>
            <div className={classes.root}>
                <BannerEmployee
                    edit={true}
                    withImage={false}
                    confirmUrl="/business-profile"
                />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} >
                        <BusinessProfile data={businessProfileData} />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <Card
                                    title="Business Address"
                                    icon={<LocationOnRounded className="main-title-icon" />}
                                >
                                    <AppointmentAddressEdit data={customerData} />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <TaxRates data={taxRateData}/>
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
