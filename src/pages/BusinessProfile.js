import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import BusinessProfileFilled from '../components/BusinessProfile/BusinessProfileFilled';
import BusinessAddresses from '../components/BusinessAddresses/BusinessAddresses';
import TaxRates from '../components/TaxRates/TaxRates';
import BannerMore from '../components/CustomerBanner/BannerMore';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    }
}));

export default function BusinessProfile() {
    const classes = useStyles();

    return (
        <Layout active={6}>
            <div className={classes.root}>
                <BannerMore
                    withImage={true}
                />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} >
                        <BusinessProfileFilled />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <BusinessAddresses />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <TaxRates />
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
