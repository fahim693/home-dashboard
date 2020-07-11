import React from 'react'
import Card from '../Card/Card'
import { AssessmentOutlined } from '@material-ui/icons'
import './total-sales.css'

const TotalSales = (props) => {
    return (
        <Card
            title="Total Sales"
            icon={<AssessmentOutlined className="main-title-icon" />}
            cardType={4}
            withEditIcon={true}
        >
            <div className='home-card-stat'>
                $6,400.00
            </div>
        </Card >
    )
}

export default TotalSales;