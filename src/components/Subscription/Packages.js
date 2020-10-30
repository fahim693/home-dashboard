import { Button, Card, CardContent, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import PackageDetails from './PackageDetails';
var numeral = require('numeral');

const packsYearly = [
    {
        name: 'BEGINNER',
        price: '479.99',
        user: '1 User',
    },
    {
        name: 'INTERMEDIATE',
        price: '767.99',
        user: '2-5 Users',
    },
    {
        name: 'PROFESSIONAL',
        price: '1247.99',
        user: '6+ Users',
    },
]

const packsMonthly = [
    {
        name: 'BEGINNER',
        price: '49.99',
        user: '1 User',
    },
    {
        name: 'INTERMEDIATE',
        price: '79.99',
        user: '2-5 Users',
    },
    {
        name: 'PROFESSIONAL',
        price: '129.99',
        user: '6+ Users',
    },
]


const Packages = (props) => {
    const [selected, setSelected] = useState(1)
    return (
        <div style={{ backgroundColor: '#F3F4F6' }}>
            <Grid container spacing={5}>
                {
                    packsMonthly.map((item, idx) => {
                        if (idx === 1)
                            return (
                                <Grid key={idx} item sm={4} xs={12}>
                                    <Card style={{ border: selected === 1 ? '1px solid #4BCA81' : '1px solid #E0E0E0', padding: '0 0 34px' }}>
                                        <div style={{ color: '#fff', backgroundColor: selected === 1 ? "#4BCA81" : '#2A95C5', height: 48, fontSize: 18, marginBottom: 29, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Most Popular
                                        </div>
                                        <CardContent style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', fontWeight: 500 }}>
                                            <div style={{ fontSize: 20, color: '#2A95C5', marginBottom: 23 }}>{item.name}</div>
                                            <div style={{ color: '#4F4F4F', fontSize: 39, marginBottom: 4 }}>${props.checked ? numeral(packsYearly[idx].price).format('0,0.00') : numeral(item.price).format('0,0.00')}</div>
                                            <div style={{ color: '#828282', fontSize: 17, marginBottom: 18 }}>per {props.checked ? 'year' : 'month'}</div>
                                            <div style={{ color: '#219653', fontSize: 20, marginBottom: 35 }}>{item.user}</div>
                                            {
                                                selected === 1 ?
                                                    <Button variant='contained' style={{ backgroundColor: '#4BCA81', color: '#fff', width: 230 }} startIcon={
                                                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.49896 8.5013L1.58229 5.58463C1.25729 5.25963 0.740625 5.25963 0.415625 5.58463C0.090625 5.90963 0.090625 6.4263 0.415625 6.7513L3.90729 10.243C4.23229 10.568 4.75729 10.568 5.08229 10.243L13.9156 1.41796C14.2406 1.09296 14.2406 0.576295 13.9156 0.251295C13.5906 -0.0737045 13.074 -0.0737045 12.749 0.251295L4.49896 8.5013Z" fill="white" />
                                                        </svg>
                                                    }>
                                                        SELECTED
                                                    </Button> :
                                                    <Button onClick={() => setSelected(idx)} variant='contained' style={{ backgroundColor: '#2A95C5', color: '#fff', width: 230 }}>SELECT PLAN</Button>
                                            }
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        else
                            return (
                                <Grid key={idx} item sm={4} xs={12}>
                                    <Card style={{ border: idx === selected ? '1px solid #4BCA81' : '1px solid #E0E0E0', padding: '29px 0 34px', marginTop: 48 }}>
                                        <CardContent style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', fontWeight: 500 }}>
                                            <div style={{ fontSize: 20, color: '#2A95C5', marginBottom: 23 }}>{item.name}</div>
                                            <div style={{ color: '#4F4F4F', fontSize: 39, marginBottom: 4 }}>${props.checked ? numeral(packsYearly[idx].price).format('0,0.00') : numeral(item.price).format('0,0.00')}</div>
                                            <div style={{ color: '#828282', fontSize: 17, marginBottom: 18 }}>per {props.checked ? 'year' : 'month'}</div>
                                            <div style={{ color: '#219653', fontSize: 20, marginBottom: 35 }}>{item.user}</div>
                                            {
                                                selected === idx ?
                                                    <Button variant='contained' style={{ backgroundColor: '#4BCA81', color: '#fff', width: 230 }} startIcon={
                                                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.49896 8.5013L1.58229 5.58463C1.25729 5.25963 0.740625 5.25963 0.415625 5.58463C0.090625 5.90963 0.090625 6.4263 0.415625 6.7513L3.90729 10.243C4.23229 10.568 4.75729 10.568 5.08229 10.243L13.9156 1.41796C14.2406 1.09296 14.2406 0.576295 13.9156 0.251295C13.5906 -0.0737045 13.074 -0.0737045 12.749 0.251295L4.49896 8.5013Z" fill="white" />
                                                        </svg>
                                                    }>
                                                        SELECTED
                                                    </Button> :
                                                    <Button onClick={() => setSelected(idx)} variant='contained' style={{ backgroundColor: '#2A95C5', color: '#fff', width: 230 }}>SELECT PLAN</Button>
                                            }
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                    })
                }
                <Grid item sm={12}>
                    <PackageDetails />
                </Grid>
            </Grid>
        </div>
    )
}

export default Packages;