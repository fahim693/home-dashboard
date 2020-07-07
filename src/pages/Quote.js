import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { Typography } from '@material-ui/core';
import { EventNoteRounded, RoomRounded, LabelImportantRounded, MonetizationOnRounded } from '@material-ui/icons';
import Invoice from '../components/Invoice Table/Invoice';
import BannerQuote from '../components/CustomerBanner/BannerQuote';
import { data } from '../data/UserData'
import Card from '../components/Card/Card'
import Schedule from '../components/Schedule/Schedule';
import OthersFilled from '../components/Others/OthersFilled';
import Details from '../components/Details.js/Details';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    }
}));

export default function Quote() {
    const classes = useStyles();

    return (
        <Layout active={3}>
            <div className={classes.root}>
                <BannerQuote
                    name="John Williams"
                />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>

                                <Details
                                    data={data}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Schedule"
                                    icon={<EventNoteRounded className="main-title-icon" />}
                                    withEditIcon={true}
                                >
                                    <Schedule
                                        data={data}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Others"
                                    icon={<LabelImportantRounded className="main-title-icon" />}
                                    withEditIcon={true}
                                >
                                    <OthersFilled data={data} />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Appointment Address"
                                    icon={<RoomRounded className="main-title-icon" />}
                                    withEditIcon={true}
                                >
                                    <Typography variant="body2" component="p" style={{ fontSize: 20 }}>
                                        {data.appointment_address}
                                    </Typography>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card
                                    title="Invoice"
                                    icon={<MonetizationOnRounded className="main-title-icon" />}
                                    cardType={0}
                                    withEditIcon={true}
                                >
                                    <Invoice />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
