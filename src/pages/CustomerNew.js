import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import Banner from '../components/CustomerBanner/BannerButtonConfirm';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import Addresses from '../components/Addresses/Addresses';
import Notes from '../components/Notes/Notes';
import Tags from '../components/Tags/Tags';

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
        <Layout active={1}>
            <div className={classes.root}>
                <Banner
                    edit={true}
                    handleStep={handleStep}
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
                </Grid>
            </div>
        </Layout >
    );
}
