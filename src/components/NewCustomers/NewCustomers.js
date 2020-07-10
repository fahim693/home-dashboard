import React from 'react'
import Card from '../Card/Card'
import { FaceRounded } from '@material-ui/icons'

const NewCustomers = (props) => {
    return (
        <Card
            title="New Customers"
            icon={<FaceRounded className="main-title-icon" />}
            cardType={4}
            withEditIcon={true}
        >
            <div className='home-card-stat'>
                24
            </div>
        </Card >
    )
}

export default NewCustomers;