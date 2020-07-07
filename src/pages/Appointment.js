import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { Typography } from '@material-ui/core';
import { EventNoteRounded, RoomRounded, PersonAddRounded, LabelImportantRounded, MonetizationOnRounded, HistoryRounded } from '@material-ui/icons';
import '../styles/appointment.css'
import Invoice from '../components/Invoice Table/Invoice';
import AppointmentHistory from '../components/AppointmentHistory/AppointmentHistory';
import Timeline from '../components/Timeline/Timeline';
import Banner from '../components/CustomerBanner/Banner';
import { data, dataInit } from '../data/UserData'
import Card from '../components/Card/Card'
import Schedule from '../components/Schedule/Schedule';
import JobAssigned from '../components/JobAssigned/JobAssigned';
import OthersFilled from '../components/Others/OthersFilled';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [type, setType] = useState(0)

    const handleStep = () => {
        setType(type + 1)
    }

    return (
        <Layout active={2}>
            <div className={classes.root}>
                <Banner
                    type={type}
                    handleStep={handleStep}
                    balanceTypeText="Remaining Balance"
                    screenType='apt'
                />
                <Timeline step={type} />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card
                                    title="Schedule"
                                    icon={<EventNoteRounded className="main-title-icon" />}
                                    cardType={type > 0 ? 4 : ''}
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
                                    withEditIcon={true}
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
                                    withEditIcon={true}
                                >
                                    <JobAssigned data={type === 0 ? dataInit : data} />
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
                            <Grid item xs={12}>
                                <Card
                                    title="Appointment Feed"
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
