import React, { useState } from 'react';
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
import { data, dataInit } from '../data/UserData'
import Card from '../components/Card/Card'
import Schedule from '../components/Schedule/Schedule';
import JobAssigned from '../components/JobAssigned/JobAssigned';

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
                    type={type}
                    handleStep={handleStep}
                />
                <Timeline step={type} />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card
                                    title="Schedule"
                                    icon={<EventNoteRounded className="main-title-icon" />}
                                >
                                    <Schedule
                                        data={type === 0 ? dataInit : data}
                                    />
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
                                    <JobAssigned data={type === 0 ? dataInit : data} />
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
