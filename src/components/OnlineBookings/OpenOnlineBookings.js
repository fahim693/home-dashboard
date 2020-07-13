import React from 'react'
import Card from '../Card/Card'
import { ShoppingCartRounded } from '@material-ui/icons'

const OpenOnlineBookings = (props) => {
    return (
        <Card
            title="Online Bookings"
            icon={<ShoppingCartRounded className="main-title-icon" />}
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