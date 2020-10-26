import { Card, CardContent, Divider, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import InputMask from 'react-input-mask';

const Billing = () => {
    const [cardInfo, setCardInfo] = useState({
        name: '',
        number: '',
        cvc: '',
        postalCode: '',
        expDate: ''
    })

    const handleChangeCardInfo = (e) => {
        setCardInfo({
            ...cardInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Grid container spacing={4}>
            <Grid item sm={6} xs={12}>
                <div style={{ fontSize: 28, fontWeight: 500, marginBottom: 40, marginTop: 34 }}>Payment Information</div>
                <div style={{ fontWeight: 500, fontSize: 20, color: '#333' }}>
                    <div>Name on card</div>
                    <TextField style={{ width: 380, marginTop: 8 }} variant="outlined" size='small' name="name" placeholder="Enter Name" value={cardInfo.name} onChange={handleChangeCardInfo} />
                    <br />
                    <br />
                    <div>Card Number</div>
                    <InputMask mask="9999 9999 9999 9999" value={cardInfo.number} maskChar=" " onChange={(e) => setCardInfo({
                        ...cardInfo,
                        number: e.target.value
                    })} >
                        {(inputProps) => <TextField style={{ width: 380, marginTop: 8 }} variant="outlined" size='small' placeholder="1234 1234 1234 1234" />}
                    </InputMask>
                    <br />
                    <br />
                    <div style={{ display: 'flex' }}>
                        <div>
                            <div>Exp Date</div>
                            <InputMask mask="99/99" value={cardInfo.expDate} maskChar=" " onChange={(e) => setCardInfo({
                                ...cardInfo,
                                expDate: e.target.value
                            })} >
                                {(inputProps) => <TextField style={{ width: 95, marginTop: 8 }} variant="outlined" size='small' placeholder="MM/YY" />}
                            </InputMask>
                        </div>
                        <div style={{ margin: '0 16px' }}>
                            <div>CVC</div>
                            <InputMask mask="999" value={cardInfo.cvc} maskChar=" " onChange={(e) => setCardInfo({
                                ...cardInfo,
                                cvc: e.target.value
                            })} >
                                {(inputProps) => <TextField style={{ width: 95, marginTop: 8 }} variant="outlined" size='small' placeholder="CVC" />}
                            </InputMask>
                        </div>
                        <div>
                            <div>Postal Code</div>
                            <TextField style={{ width: 155, marginTop: 8 }} variant="outlined" size='small' name="postalCode" placeholder="Postal Code" value={cardInfo.postalCode} onChange={handleChangeCardInfo} />
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Card style={{ padding: 34, boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.17)' }}>
                    <CardContent>
                        <div style={{ fontSize: 28, fontWeight: 500, marginBottom: 34 }}>Plan Details</div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, fontWeight: 500, marginBottom: 10 }}>
                                <div>Professional</div>
                                <div>$100 Billed Monthly</div>
                            </div>
                            <div style={{ paddingLeft: 8 }}>
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

                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 9 }}>
                                    <div>Online Booking</div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 11 }}>
                                    <div>Mobile App</div>
                                </div>
                            </div>
                            <Divider />
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, fontWeight: 500, marginBottom: 10, marginTop: 11 }}>
                                <div>Subtotal</div>
                                <div>$100</div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, fontWeight: 500, marginBottom: 10 }}>
                                <div>Activation Fee</div>
                                <div>$20</div>
                            </div>

                            <Divider />
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, fontWeight: 500, marginBottom: 12, marginTop: 11 }}>
                                <div>Amount due today</div>
                                <div>$100</div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#828282', marginBottom: 10 }}>
                                <div>Amount due on your renewal date (Nov 14, 2021)</div>
                                <div>$100.00</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Billing;