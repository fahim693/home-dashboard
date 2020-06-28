import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import BannerEmployee from '../components/CustomerBanner/BannerEmployee';
import Addresses from '../components/Addresses/Addresses';
import EmployeeInfo from '../components/EmployeeInfo/EmployeeInfo';
import Credentials from '../components/Credentials/Credentials';
import StatusPermissions from '../components/Status&Permissions/StatusPermissions';
import { employeeData } from '../data/EmployeeInfo';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    }
}));

export default function EmployeeEdit() {
    const classes = useStyles();

    return (
        <Layout active={5}>
            <div className={classes.root}>
                <BannerEmployee
                    edit={true}
                    withImage={true}
                    confirmUrl="/employee"
                />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} >
                        <EmployeeInfo data={employeeData} />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <Credentials data={employeeData} isEdit={true} />
                            </Grid>
                            <Grid item xs={12} md={12} >
                                <StatusPermissions data={employeeData} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Addresses isEdit={true} data={employeeData} />
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
