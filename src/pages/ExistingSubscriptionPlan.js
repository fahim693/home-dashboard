import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { Button, Card, CardContent, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
        paddingTop: 20
    }
}));


export default function ExistingSubscriptionPlan() {
    const classes = useStyles();

    return (
        <Layout active={6}>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item sm={6} xs={12}>
                        <Card style={{ padding: '25px 30px 30px 30px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.17)' }}>
                            <CardContent>
                                <div>
                                    <div style={{ fontSize: 28, fontWeight: 500, marginBottom: 30 }}>Existing Plan</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, fontWeight: 500, marginBottom: 14 }}>
                                        <div>Professional</div>
                                        <div>$100 Billed Monthly</div>
                                    </div>
                                    <div style={{ paddingLeft: 8, marginBottom: 25 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 9 }}>
                                            <div>Scheduling</div>
                                            <div>6+ Users</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 9 }}>
                                            <div>Dispatching</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 9 }}>
                                            <div>Appointment Management</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 9 }}>
                                            <div>Quotes Management</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 9 }}>
                                            <div>Invoicing</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 9 }}>
                                            <div>Payments</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 9 }}>
                                            <div>Notifications and Alerts</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 9 }}>
                                            <div>Reporting and Dashboard</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 9 }}>
                                            <div>Follow-up Marketing</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282' }}>
                                            <div>Online Booking</div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 18, color: '#828282' }}>
                                            <div>Mobile App</div>
                                            <Button style={{ borderColor: '#2A95C5', color: '#2A95C5' }} variant='outlined'>Change Plan</Button>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, fontWeight: 500, marginBottom: 12, marginTop: 16 }}>
                                        <div>Amount due on next renewal date</div>
                                        <div>$100.00</div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 10 }}>
                                        <div>Next Renewal Date</div>
                                        <div>Nov 14, 2021</div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right', marginTop: 35 }}>
                                    <Button style={{ color: '#fff', backgroundColor: '#2A95C5', width: 170 }} variant="contained">RENEW NOW</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Card style={{ padding: '25px 30px 30px 30px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.17)' }}>
                            <CardContent>
                                <div>
                                    <div style={{ fontSize: 28, fontWeight: 500, marginBottom: 30 }}>Credit Card Information</div>
                                    <div style={{ display: 'flex', fontSize: 20, fontWeight: 500, marginBottom: 42 }}>
                                        <div style={{ flex: 1 }}>
                                            <div>Credit Card</div>
                                            <div style={{ fontSize: 18, color: '#828282', fontWeight: 400, marginTop: 10 }}>1234 1234 1234 1234</div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div>Expiration Date</div>
                                            <div style={{ fontSize: 18, color: '#828282', fontWeight: 400, marginTop: 10 }}>Jan 26, 2021</div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <Button style={{ color: '#fff', backgroundColor: '#2A95C5' }} variant="contained">UPDATE CREDIT CARD</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
