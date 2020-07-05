import React, { useState } from 'react'
import Card from '../Card/Card'
import { BusinessRounded } from '@material-ui/icons'
import { makeStyles, Typography, TextField, FormControl, Select, MenuItem, Grid } from '@material-ui/core';
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

const BusinessProfileEdit = (props) => {
    const classes = useStyles();
    const [temp, setTemp]=useState({
        type_of_business: props.data.type_of_business
    })

    const handleChange=(e)=>{
        setTemp({
            ...temp,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Card
            title="Business Profile"
            icon={<BusinessRounded className="main-title-icon" />}
            cardType={1}
        >
            <Grid container spacing={4} style={{ padding: '17px 0 22px 25px' }}>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Business Name
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Business Name"
                                // value={fieldValue.street_address}
                                defaultValue={props.data.business_name}
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
                            Website
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Website"
                                defaultValue={props.data.website}
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
                                placeholder="Enter email"
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
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Contact Number
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Contact Number"
                                defaultValue={props.data.contact}
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
                            Type of Business
                        </Typography>
                        <FormControl variant="outlined" margin="dense" classes={{
                            root: classes.quantityRoot
                        }}>
                            <Select
                                id="type_of_business"
                                // value={city}
                                value={temp.type_of_business}
                                MenuProps={{
                                    getContentAnchorEl: null,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }
                                }}
                                name="type_of_business"
                                onChange={handleChange}
                            >
                                <MenuItem value={0} style={{ display: 'none' }}>Select Type</MenuItem>
                                <MenuItem value={1}>Carpet Cleaning</MenuItem>
                                <MenuItem value={2}>Other</MenuItem>
                            </Select>
                        </FormControl>
                        {
                            temp.type_of_business === 2 ?
                            <FormControl variant="outlined" classes={{
                                root: classes.quantityRoot
                            }}>
                                <TextField
                                    id="street-address"
                                    variant="outlined"
                                    placeholder="Specify Other"
                                    // defaultValue={props.data.contact}
                                    // value={fieldValue.street_address}
                                    name='street_address'
                                    // value="Permanent Address"
                                    // onChange={handleOnChange}
                                    fullWidth
                                    margin='dense'
                                />
                            </FormControl>:''
                        }

                    </div>
                </Grid>
            </Grid>
        </Card >
    )
}

export default BusinessProfileEdit;