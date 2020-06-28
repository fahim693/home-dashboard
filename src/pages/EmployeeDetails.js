import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import EmployeeInfoFilled from '../components/EmployeeInfo/EmployeeInfoFilled';
import StatusPermissionsFilled from '../components/Status&Permissions/StatusPermissionsFilled';
import Addresses from '../components/Addresses/AddressFilled';
import CredentialsFilled from '../components/Credentials/CredentialsFilled';
import BannerEmployee from '../components/CustomerBanner/BannerEmployee';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    },
    formControl: {
        minWidth: 185,
    }
}));

export default function EmployeeDetails() {
    const classes = useStyles();

    return (
        <Layout active={5}>
            <div className={classes.root}>
                <BannerEmployee
                    withImage={true}
                />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} >
                        <EmployeeInfoFilled />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <CredentialsFilled/>
                            </Grid>
                            <Grid item xs={12} md={12} >
                                <StatusPermissionsFilled />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Addresses />
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
