import React from 'react'
import Card from '../Card/Card'
import { SecurityRounded } from '@material-ui/icons'
import './status-permission.css'
import { Typography } from '@material-ui/core';

const StatusPermissionsFilled = (props) => {

    return (
        <Card
            title="Status And Permissions"
            icon={<SecurityRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            <div style={{ padding: '17px 25px 17px 25px' }}>
                <Typography className="title-heads" variant="body2" component="p">
                    Status
                </Typography>
                <div className="contact-info-field-value">Active</div>
                <br />
                <Typography className="title-heads" variant="body2" component="p">
                    Permissions
                </Typography>
                <div className="contact-info-field-value">Admin</div>
            </div>
        </Card >
    )
}

export default StatusPermissionsFilled;