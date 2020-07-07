import React from 'react'
import Card from '../Card/Card'
import './contact-info.css'
import { AlternateEmailRounded } from '@material-ui/icons'
import { Typography, FormControl, Switch, Grid } from '@material-ui/core';

const ContactInfo = () => {
    return (
        <Card
            title="Contact Information"
            icon={<AlternateEmailRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            <Grid container spacing={4} style={{ padding: '17px 0 0 25px' }}>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Mobile Phone
                        </Typography>
                        <div className="contact-info-field-value">+1 123 456 7890</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Work Phone
                        </Typography>
                        <div className="contact-info-field-value">+1 123 456 7890</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Home Phone
                        </Typography>
                        <div className="contact-info-field-value">+1 212 200 0606</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >

                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Email
                        </Typography>
                        <div className="contact-info-field-value">johndoe@mail.com</div>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={4} style={{ padding: '0 0 14px 25px' }}>
                <Grid style={{ padding: '0px !important' }} item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Company
                        </Typography>
                        <div className="contact-info-field-value">LoremIpsum</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >

                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Title
                        </Typography>
                        <div className="contact-info-field-value">Project Manager</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Type
                        </Typography>
                        <div className="contact-info-field-value">Business</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Send Notifications
                        </Typography>
                        <FormControl variant="outlined" style={{ marginTop: 0, marginLeft: -12 }} >
                            <Switch
                                // checked={state.checkedB}
                                // onChange={handleChange}
                                className="checked-hover"
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </FormControl>
                    </div>
                </Grid>
            </Grid>
        </Card >
    )
}

export default ContactInfo;