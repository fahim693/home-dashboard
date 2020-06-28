import React from 'react'
import Card from '../Card/Card'
import { AssignmentIndRounded } from '@material-ui/icons'
import { Typography, Grid } from '@material-ui/core';

const EmployeeInfoFilled = (props) => {
    return (
        <Card
            title="Employee Information"
            icon={<AssignmentIndRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            <Grid container spacing={4} style={{ padding: '17px 0 17px 25px' }}>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            First Name
                        </Typography>
                        <div className="contact-info-field-value">Sophia</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Last Name
                        </Typography>
                        <div className="contact-info-field-value">Davis</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Designation
                        </Typography>
                        <div className="contact-info-field-value">Project Manager</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Contact #
                        </Typography>
                        <div className="contact-info-field-value">+1 123 456 7890</div>
                    </div>
                </Grid>
            </Grid>
        </Card >
    )
}

export default EmployeeInfoFilled;