import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import Banner from '../components/CustomerBanner/BannerButtonConfirm';
import ContactInfo from '../components/ContactInfo/ContactInfo';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    },
    formControl: {
        minWidth: 185,
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [type, setType] = useState(0)

    const handleStep = () => {
        setType(type + 1)
    }

    return (
        <Layout>
            <div className={classes.root}>
                <Banner
                    edit={true}
                    handleStep={handleStep}
                />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} >
                        <ContactInfo />
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
