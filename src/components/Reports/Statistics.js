import React from 'react'
import { Card, CardContent, Grid } from '@material-ui/core'

const Statistics = () => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3} style={{ padding: 22 }}>
                    <Grid item sm={4}>
                        <div style={{ display: 'flex', borderRight: '2px solid #E2E2E2', }}>
                            <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="60" height="60" rx="6" fill="#DFECFF" />
                                <path d="M25.3333 35.8333C24.6917 35.8333 24.1667 35.3083 24.1667 34.6667V28.8333C24.1667 28.1917 24.6917 27.6667 25.3333 27.6667C25.975 27.6667 26.5 28.1917 26.5 28.8333V34.6667C26.5 35.3083 25.975 35.8333 25.3333 35.8333ZM30 35.8333C29.3583 35.8333 28.8333 35.3083 28.8333 34.6667V25.3333C28.8333 24.6917 29.3583 24.1667 30 24.1667C30.6417 24.1667 31.1667 24.6917 31.1667 25.3333V34.6667C31.1667 35.3083 30.6417 35.8333 30 35.8333ZM34.6667 35.8333C34.025 35.8333 33.5 35.3083 33.5 34.6667V32.3333C33.5 31.6917 34.025 31.1667 34.6667 31.1667C35.3083 31.1667 35.8333 31.6917 35.8333 32.3333V34.6667C35.8333 35.3083 35.3083 35.8333 34.6667 35.8333ZM37 38.1667H23C22.3583 38.1667 21.8333 37.6417 21.8333 37V23C21.8333 22.3583 22.3583 21.8333 23 21.8333H37C37.6417 21.8333 38.1667 22.3583 38.1667 23V37C38.1667 37.6417 37.6417 38.1667 37 38.1667ZM38.1667 19.5H21.8333C20.55 19.5 19.5 20.55 19.5 21.8333V38.1667C19.5 39.45 20.55 40.5 21.8333 40.5H38.1667C39.45 40.5 40.5 39.45 40.5 38.1667V21.8333C40.5 20.55 39.45 19.5 38.1667 19.5Z" fill="#468DF6" />
                            </svg>
                            <div style={{ marginLeft: 18 }}>
                                <div style={{ fontSize: 17, fontWeight: 500, color: '#4F4F4F', marginBottom: 16 }}>TOTAL SALES</div>
                                <div style={{ color: '#468DF7', fontSize: 34, fontWeight: 500 }}>$6,400.00</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                        <div style={{ display: 'flex', borderRight: '2px solid #E2E2E2' }}>
                            <svg width="50" height="50" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.333374" width="60" height="60" rx="6" fill="#D8FFE8" />
                                <path d="M30.1 28.7167C27.4517 28.0283 26.6 27.3167 26.6 26.2083C26.6 24.9367 27.7784 24.05 29.75 24.05C31.4067 24.05 32.235 24.68 32.5384 25.6833C32.6784 26.15 33.0634 26.5 33.5534 26.5H33.9034C34.6734 26.5 35.2217 25.7417 34.9534 25.0183C34.4634 23.6417 33.32 22.4983 31.5 22.055V21.25C31.5 20.2817 30.7184 19.5 29.75 19.5C28.7817 19.5 28 20.2817 28 21.25V22.02C25.7367 22.51 23.9167 23.98 23.9167 26.2317C23.9167 28.9267 26.145 30.2683 29.4 31.05C32.3167 31.75 32.9 32.7767 32.9 33.8617C32.9 34.6667 32.3284 35.95 29.75 35.95C27.825 35.95 26.8334 35.2617 26.4484 34.2817C26.2734 33.8267 25.8767 33.5 25.3984 33.5H25.0717C24.29 33.5 23.7417 34.2933 24.0334 35.0167C24.6984 36.6383 26.25 37.595 28 37.9683V38.75C28 39.7183 28.7817 40.5 29.75 40.5C30.7184 40.5 31.5 39.7183 31.5 38.75V37.9917C33.775 37.56 35.5834 36.2417 35.5834 33.85C35.5834 30.5367 32.7484 29.405 30.1 28.7167Z" fill="#4BCA81" />
                            </svg>
                            <div style={{ marginLeft: 18 }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                                    <div style={{ fontSize: 17, fontWeight: 500, color: '#4F4F4F', marginRight: 9 }}>PAID APPOINTMENTS</div>
                                    <div style={{ backgroundColor: '#2A95C5', color: "#fff", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 6, height: 26, fontWeight: 500, minWidth: 27 }}>
                                        12
                                    </div>
                                </div>
                                <div style={{ color: '#4BCA81', fontSize: 34, fontWeight: 500 }}>$320.00</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                        <div style={{ display: 'flex' }}>
                            <svg width="50" height="50" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.666748" width="60" height="60" rx="6" fill="#FFE6E6" />
                                <path d="M30.4334 28.7167C27.7851 28.0283 26.9334 27.3167 26.9334 26.2083C26.9334 24.9367 28.1118 24.05 30.0834 24.05C31.7401 24.05 32.5684 24.68 32.8718 25.6833C33.0118 26.15 33.3968 26.5 33.8868 26.5H34.2368C35.0068 26.5 35.5551 25.7417 35.2868 25.0183C34.7968 23.6417 33.6534 22.4983 31.8334 22.055V21.25C31.8334 20.2817 31.0518 19.5 30.0834 19.5C29.1151 19.5 28.3334 20.2817 28.3334 21.25V22.02C26.0701 22.51 24.2501 23.98 24.2501 26.2317C24.2501 28.9267 26.4784 30.2683 29.7334 31.05C32.6501 31.75 33.2334 32.7767 33.2334 33.8617C33.2334 34.6667 32.6618 35.95 30.0834 35.95C28.1584 35.95 27.1668 35.2617 26.7818 34.2817C26.6068 33.8267 26.2101 33.5 25.7318 33.5H25.4051C24.6234 33.5 24.0751 34.2933 24.3668 35.0167C25.0318 36.6383 26.5834 37.595 28.3334 37.9683V38.75C28.3334 39.7183 29.1151 40.5 30.0834 40.5C31.0518 40.5 31.8334 39.7183 31.8334 38.75V37.9917C34.1084 37.56 35.9168 36.2417 35.9168 33.85C35.9168 30.5367 33.0818 29.405 30.4334 28.7167Z" fill="#EB5757" />
                            </svg>
                            <div style={{ marginLeft: 18 }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                                    <div style={{ fontSize: 17, fontWeight: 500, color: '#4F4F4F', marginRight: 9 }}>UNPAID APPOINTMENTS</div>
                                    <div style={{ backgroundColor: '#2A95C5', color: "#fff", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 6, height: 26, fontWeight: 500, minWidth: 27 }}>
                                        6
                                    </div>
                                </div>
                                <div style={{ color: '#EB5757', fontSize: 34, fontWeight: 500 }}>$80.00</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Statistics;