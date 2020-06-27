import React from 'react'
import Card from '../Card/Card'
import './contact-info.css'
import { AlternateEmailRounded } from '@material-ui/icons'
import { makeStyles, Typography, TextField, FormControl, Select, MenuItem, Switch, Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        minWidth: 195,
        "& .MuiSelect-select": {
            '&:focus': {
                backgroundColor: '#fff',
            }
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #000"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf",
        },
    }
}));

const ContactInfo = (props) => {
    const classes = useStyles();
    return (
        <Card
            title="Contact Information"
            icon={<AlternateEmailRounded className="main-title-icon" />}
            cardType={1}
        >
            <Grid container spacing={4} style={{ padding: '17px 0 0 25px' }}>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Mobile Phone
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Mobile Phone"
                                // value={fieldValue.street_address}
                                defaultValue={props.data.mobile_phone}
                                name='street_address'
                                // value="Permanent Address"
                                // onChange={handleOnChange}
                                fullWidth
                                margin='dense'
                            />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Work Phone
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Work Phone"
                                defaultValue={props.data.work_phone}
                                // value={fieldValue.street_address}
                                name='street_address'
                                // value="Permanent Address"
                                // onChange={handleOnChange}
                                fullWidth
                                margin='dense'
                            />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Home Phone
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Home Phone"
                                defaultValue={props.data.home_phone}
                                // value={fieldValue.street_address}
                                name='street_address'
                                // value="Permanent Address"
                                // onChange={handleOnChange}
                                fullWidth
                                margin='dense'
                            />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >

                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Email
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Email ID"
                                defaultValue={props.data.email}
                                // value={fieldValue.street_address}
                                name='street_address'
                                // value="Permanent Address"
                                // onChange={handleOnChange}
                                fullWidth
                                margin='dense'
                            />
                        </FormControl>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={4} style={{ padding: '0 0 25px 25px' }}>
                <Grid style={{ padding: '0px !important' }} item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Company
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Company Name"
                                defaultValue={props.data.company}
                                // value={fieldValue.street_address}
                                name='street_address'
                                // value="Permanent Address"
                                // onChange={handleOnChange}
                                fullWidth
                                margin='dense'
                            />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >

                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Title
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Title"
                                defaultValue={props.data.title}
                                // value={fieldValue.street_address}
                                name='street_address'
                                // value="Permanent Address"
                                // onChange={handleOnChange}
                                fullWidth
                                margin='dense'
                            />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Type
                        </Typography>
                        <FormControl variant="outlined" margin="dense" classes={{
                            root: classes.quantityRoot
                        }}>
                            <Select
                                id="city"
                                // value={city}
                                defaultValue={1}
                                MenuProps={{
                                    getContentAnchorEl: null,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }
                                }}
                            // name="city"
                            // onChange={handleChange}
                            >
                                <MenuItem value={0} style={{ display: 'none' }}>Select Type</MenuItem>
                                <MenuItem value={1}>Business</MenuItem>
                                <MenuItem value={2}>Type</MenuItem>
                                <MenuItem value={3}>Type</MenuItem>
                                <MenuItem value={4}>Type</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Send Notifications
                        </Typography>
                        <FormControl variant="outlined" style={{ marginTop: 6, marginLeft: -12 }} classes={{
                            root: classes.quantityRoot
                        }}>
                            <Switch
                                // checked={state.checkedB}
                                // onChange={handleChange}
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