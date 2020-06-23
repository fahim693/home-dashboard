import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { Typography, Chip } from '@material-ui/core';
import { EventNoteRounded, RoomRounded, PersonAddRounded, LabelImportantRounded, ImageRounded, GetAppRounded, MonetizationOnRounded, HistoryRounded } from '@material-ui/icons';
import '../styles/appointment.css'
import Invoice from '../components/Invoice Table/Invoice';
import AppointmentHistory from '../components/AppointmentHistory/AppointmentHistory';
import Timeline from '../components/Timeline/Timeline';
import Banner from '../components/CustomerBanner/Banner';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import { data } from '../data/UserData'
import Card from '../components/Card/Card'

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
                                <Card
                                    title="Schedule"
                                    icon={<EventNoteRounded className="main-title-icon" />}
                                >
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
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Appointment Address"
                                    icon={<RoomRounded className="main-title-icon" />}
                                >
                                    <Typography variant="body2" component="p" style={{ fontSize: 20 }}>
                                        {data.appointment_address}
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Job Assigned To"
                                    icon={<PersonAddRounded className="main-title-icon" />}
                                >
                                    <div style={{ padding: 0 }} className="logged-in-user">
                                        <img src="/profile-img.png" alt="" />
                                        <div>
                                            <div style={{ fontSize: 22, marginBottom: 6 }} className="name">Ray Wilson</div>
                                            <div className="subtitle-dark">Project Manager</div>
                                        </div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Others"
                                    icon={<LabelImportantRounded className="main-title-icon" />}
                                >
                                    <React.Fragment>
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
                                        <Typography variant="body2" component="p" style={{ fontSize: 20 }}>{data.source_name}</Typography>
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
                                    </React.Fragment>
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
                                >
                                    <Invoice />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Appointment History"
                                    icon={<HistoryRounded className='main-title-icon' />}
                                    cardType={1}
                                >
                                    <AppointmentHistory />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
