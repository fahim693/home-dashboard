import React from 'react'
import Card from '../Card/Card'
import { MonetizationOnRounded } from '@material-ui/icons'

const data = [
    {
        name: "Albert Flores",
        amount: "219.78"
    },
    {
        name: "Savannah Nguyen",
        amount: "328.85"
    },
    {
        name: "Leslie Alexander",
        amount: "446.61"
    },
    {
        name: "Annette Black",
        amount: "178.35"
    },
    {
        name: "Devon Lane",
        amount: "202.87"
    },
    {
        name: "Jerome Bell",
        amount: "267.50"
    },
]

const OpenInvoices = (props) => {
    return (
        <Card
            title="Open Invoices"
            icon={<MonetizationOnRounded className="main-title-icon" />}
            noBoxShadow={true}
        >
            <div className="upcoming-appointments-container">
                {
                    data.map((row, idx) => (
                        <div key={idx} className="appointment-flexbox">
                            <div>{row.name}</div>
                            <div style={{color: '#EB5757'}}>${row.amount}</div>
                        </div>
                    ))
                }
            </div>
        </Card >
    )
}

export default OpenInvoices;