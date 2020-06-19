import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { Card, CardContent, Typography, Chip } from '@material-ui/core';
import { EventNoteRounded, RoomRounded, PersonAddRounded, LabelImportantRounded, ImageRounded, GetAppRounded, MonetizationOnRounded, HistoryRounded } from '@material-ui/icons';
import '../styles/appointment.css'
import Invoice from '../components/Invoice Table/Invoice';
import AppointmentHistory from '../components/AppointmentHistory/AppointmentHistory';
import Timeline from '../components/Timeline/Timeline';
import Banner from '../components/CustomerBanner/Banner';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import { data } from '../data/UserData'

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
    return (
        <Layout>
            <div className={classes.root}>
                <Breadcrumbs />
                <Banner />
                <Timeline />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <EventNoteRounded className="main-title-icon" />
                                            <div>
                                                Schedule
                                            </div>
                                        </Typography>
                                        <div className="card-content">
                                            <div className="start">
                                                <div className="step-status-drawing">
                                                    <span className="step-status-dot"></span>
                                                    <span className="step-status-line"></span>
                                                </div>
                                                <div>
                                                    <Typography className="title-heads" variant="body2" component="p">
                                                        Start Date and Time
                                                </Typography>
                                                    <div className="subtitle-dark">
                                                        <Typography variant="body2" component="p" style={{ fontSize: '1.125rem', marginBottom: 6 }} >
                                                            {data.start_date}
                                                        </Typography>
                                                        <Typography variant="body2" component="p" style={{ fontSize: '1.125rem' }}>
                                                            {data.start_time}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="end">
                                                <div className="step-status-drawing">
                                                    <span className="step-status-dot"></span>
                                                </div>
                                                <div>
                                                    <Typography className="title-heads" variant="body2" component="p">
                                                        End Date and Time
                                            </Typography>
                                                    <div className="subtitle-dark">
                                                        <Typography variant="body2" component="p" style={{ fontSize: '1.125rem', marginBottom: 6 }}>
                                                            {data.end_date}
                                                        </Typography>
                                                        <Typography variant="body2" component="p" style={{ fontSize: '1.125rem' }}>
                                                            {data.end_time}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <RoomRounded className="main-title-icon" />
                                            <div>
                                                Appointment Address
                                            </div>
                                        </Typography>
                                        <div className="card-content">
                                            <Typography variant="body2" component="p" style={{ fontSize: 20 }}>
                                                {data.appointment_address}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <PersonAddRounded className="main-title-icon" />
                                            <div>
                                                Job Assigned To
                                            </div>
                                        </Typography>
                                        <div className="card-content">
                                            <div style={{ padding: 0 }} className="logged-in-user">
                                                <img src="/profile-img.png" alt="" />
                                                <div>
                                                    <div style={{ fontSize: 22, marginBottom: 6 }} className="name">Ray Wilson</div>
                                                    <div className="subtitle-dark">Project Manager</div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <LabelImportantRounded className="main-title-icon" />
                                            <div>
                                                Others
                                            </div>
                                        </Typography>
                                        <div className="card-content">
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Tags
                                            </Typography>
                                            <div className="chips">
                                                {
                                                    data.tags.map(tag => (
                                                        <Chip key={tag} className="chip" label={tag} />
                                                    ))
                                                }
                                            </div>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Source
                                            </Typography>
                                            <Typography variant="body2" component="p" style={{ fontSize: 20 }}>{data.source}</Typography>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Notes
                                            </Typography>
                                            <Typography variant="body2" component="p" style={{ fontSize: 20 }}>{data.notes}</Typography>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Attachments
                                            </Typography>
                                            {
                                                data.attachments.map((attachment, idx) => (
                                                    <div key={idx} className="attachment-card">
                                                        <div>
                                                            <ImageRounded style={{ marginRight: 10 }} />
                                                            <Typography variant="body2" component="p" >{attachment}</Typography>
                                                        </div>
                                                        <GetAppRounded />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <MonetizationOnRounded className="main-title-icon" />
                                            <div>
                                                Invoice
                                            </div>
                                        </Typography>
                                        <div className="card-content-inv">
                                            <Invoice />
                                        </div>
                                    </CardContent>

                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <HistoryRounded className='main-title-icon' />
                                            <div>
                                                Appointment History
                                            </div>
                                        </Typography>
                                        <AppointmentHistory />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
