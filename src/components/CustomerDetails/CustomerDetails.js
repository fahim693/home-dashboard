import React from 'react'
import './customer-details.css'
import { Grid } from '@material-ui/core';

const CustomerDetails = (props) => {
    return (
        <div className='customer-details-card'>
            {
                props.data ?
                    <React.Fragment>
                        <div className='customer-details-title'>Customer Details:</div>
                        <div className='customer-details-card-container'>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={4} >
                                    <div className='customer-details-card-title'>Name</div>
                                    <div className='customer-details-card-value'>{props.data.name}</div>
                                </Grid>
                                <Grid item xs={12} sm={4} style={{ paddingLeft: 30 }}>
                                    <div className='customer-details-card-title'>Email</div>
                                    <div className='customer-details-card-value'>jamescook@mail.com</div>
                                </Grid>
                                <Grid item xs={12} sm={4} style={{ paddingLeft: 80 }}>
                                    <div className='customer-details-card-title'>Phone</div>
                                    <div className='customer-details-card-value'>+1 123 456 7890</div>
                                </Grid>
                                <Grid item xs={12} sm={4} >
                                    <div className='customer-details-card-title'>Street Address</div>
                                    <div className='customer-details-card-value'>{props.data.address}</div>
                                </Grid>
                                <Grid item xs={12} sm={4} style={{ paddingLeft: 30 }}>
                                    <div className='customer-details-card-title'>City</div>
                                    <div className='customer-details-card-value'>New York</div>
                                </Grid>
                                <Grid item xs={12} sm={4} style={{ paddingLeft: 80 }}>
                                    <div className='customer-details-card-title'>State</div>
                                    <div className='customer-details-card-value'>New York</div>
                                </Grid>
                            </Grid>
                        </div>
                    </React.Fragment> : ''
            }

        </div>
    )
}

export default CustomerDetails;