import React from 'react'
import Card from '../Card/Card'
import { AttachMoneyRounded } from '@material-ui/icons'
import { Grid } from '@material-ui/core'
import './transactions.css'

const Transactions = (props) => {
    return (
        <Card
            title="Transactions"
            icon={<AttachMoneyRounded className="main-title-icon" />}
            cardType={4}
        >
            <Grid container>
                <Grid item xs={12} sm={6} >
                    <div style={{ backgroundColor: '#C8E6FF' }} className="transaction-flexbox">
                        <div className="transaction-title">Credit Card</div>
                        <div className="transaction-amount">$15,242.52</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <div style={{ backgroundColor: '#A7F5CE' }} className="transaction-flexbox">
                        <div className="transaction-title">Cash</div>
                        <div className="transaction-amount">$210.24</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <div style={{ backgroundColor: '#ECE6FF' }} className="transaction-flexbox">
                        <div className="transaction-title">Check</div>
                        <div className="transaction-amount">$236.00</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <div style={{ backgroundColor: '#F2F2F2' }} className="transaction-flexbox">
                        <div className="transaction-title">Other</div>
                        <div className="transaction-amount">$34.21</div>
                    </div>
                </Grid>
            </Grid>
        </Card >
    )
}

export default Transactions;
