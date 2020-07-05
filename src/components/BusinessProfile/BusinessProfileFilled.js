import React from 'react'
import Card from '../Card/Card'
import { BusinessRounded } from '@material-ui/icons'
import { Typography, Grid } from '@material-ui/core';

const BusinessProfileFilled = (props) => {
    return (
        <Card
            title="Business Profile"
            icon={<BusinessRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            <Grid container spacing={4} style={{ padding: '17px 0 17px 25px' }}>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Business Name
                        </Typography>
                        <div className="contact-info-field-value">Expert Carpetz LLC</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Website
                        </Typography>
                        <div className="contact-info-field-value">businessname.com</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Email
                        </Typography>
                        <div className="contact-info-field-value">email@businessname.com</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Contact Number
                        </Typography>
                        <div className="contact-info-field-value">(630) 515-0201</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Type of Business
                        </Typography>
                        <div className="contact-info-field-value">Carpet Cleaning</div>
                    </div>
                </Grid>
            </Grid>
        </Card >
    )
}

export default BusinessProfileFilled;