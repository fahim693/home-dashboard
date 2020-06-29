import React from 'react'
import Card from '../Card/Card'
import { LabelImportantRounded } from '@material-ui/icons'
import { Typography } from '@material-ui/core';

const Details = (props) => {
    return (
        <Card
            title="Details"
            icon={<LabelImportantRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            {/* style={{ padding: '17px 0 17px 25px' }} */}
            <div style={{ padding: '17px 0 17px 25px' }}>
                <Typography className="title-heads" variant="body2" component="p">
                    Status
                </Typography>
                <div className="contact-info-field-value">Open</div>
            </div>
        </Card >
    )
}

export default Details;