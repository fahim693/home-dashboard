import React from 'react'
import Card from '../Card/Card'
import { LockRounded } from '@material-ui/icons'
import { Typography } from '@material-ui/core';

const CredentialsFilled = (props) => {
    return (
        <Card
            title="Credentials"
            icon={<LockRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            <div style={{ padding: '17px 25px 17px 25px' }}>
                <Typography className="title-heads" variant="body2" component="p">
                    Email
                </Typography>
                <div className="contact-info-field-value">sophiadavis@mail.com</div>
                <br />
                <Typography className="title-heads" variant="body2" component="p">
                    Password
                </Typography>
                <div className="contact-info-field-value">•••••••••••••</div>
            </div>
        </Card >
    )
}

export default CredentialsFilled;