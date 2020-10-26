import { Button, Card, CardContent, Grid } from '@material-ui/core';
import React from 'react';

const packs = [
    {
        name: 'BEGINNER',
        price: '29.99',
        user: '1 User',
    },
    {
        name: 'INTERMEDIATE',
        price: '575.90',
        user: '2-5 Users',
    },
    {
        name: 'PROFESSIONAL',
        price: '959.90',
        user: '6+ Users',
    },
]

const Packages = () => {
    return (
        <div style={{ backgroundColor: '#F3F4F6', padding: '50px 60px' }}>
            <Grid container spacing={5}>
                {
                    packs.map((item, idx) => {
                        if (idx === 1)
                            return (
                                <Grid key={idx} item sm={4} xs={12}>
                                    <Card style={{ padding: '0 0 34px' }}>
                                        <div style={{ color: '#fff', backgroundColor: '#2A95C5', height: 48, fontSize: 18, marginBottom: 29, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Most Popular
                                    </div>
                                        <CardContent style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', fontWeight: 500 }}>
                                            <div style={{ fontSize: 20, color: '#2A95C5', marginBottom: 26 }}>{item.name}</div>
                                            <div style={{ color: '#4F4F4F', fontSize: 39, marginBottom: 6 }}>${item.price}</div>
                                            <div style={{ color: '#828282', fontSize: 17, marginBottom: 20 }}>per month</div>
                                            <div style={{ color: '#219653', fontSize: 20, marginBottom: 38 }}>{item.user}</div>
                                            <Button variant='contained' style={{ backgroundColor: '#2A95C5', color: '#fff', width: 230 }}>SELECT PLAN</Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        else
                            return (
                                <Grid key={idx} item sm={4} xs={12}>
                                    <Card style={{ padding: '29px 0 34px', marginTop: 48 }}>
                                        <CardContent style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', fontWeight: 500 }}>
                                            <div style={{ fontSize: 20, color: '#2A95C5', marginBottom: 26 }}>{item.name}</div>
                                            <div style={{ color: '#4F4F4F', fontSize: 39, marginBottom: 6 }}>${item.price}</div>
                                            <div style={{ color: '#828282', fontSize: 17, marginBottom: 20 }}>per month</div>
                                            <div style={{ color: '#219653', fontSize: 20, marginBottom: 38 }}>{item.user}</div>
                                            <Button variant='contained' style={{ backgroundColor: '#2A95C5', color: '#fff', width: 230 }}>SELECT PLAN</Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                    })
                }
            </Grid>
        </div>
    )
}

export default Packages;