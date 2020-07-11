import React from 'react'
import Card from '../Card/Card'
import { ReceiptRounded } from '@material-ui/icons'

const OpenOnlineBookings = (props) => {
    return (
        <Card
            title="Open Online Bookings"
            icon={<ReceiptRounded className="main-title-icon" />}
            cardType={4}
            withEditIcon={true}
        >
            <div className='home-card-stat'>
                4
            </div>
        </Card >
    )
}

export default OpenOnlineBookings;