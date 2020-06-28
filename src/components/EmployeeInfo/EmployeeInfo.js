import React from 'react'
import Card from '../Card/Card'
import { AssignmentIndRounded } from '@material-ui/icons'
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

const EmployeeInfo = (props) => {
    const classes = useStyles();
    return (
        <Card
            title="Employee Information"
            icon={<AssignmentIndRounded className="main-title-icon" />}
            cardType={1}
        >
            <Grid container spacing={4} style={{ padding: '17px 0 22px 25px' }}>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            First Name
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter First Name"
                                // value={fieldValue.street_address}
                                defaultValue={props.data.first_name}
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
                            Last Name
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Last Name"
                                defaultValue={props.data.last_name}
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
                            Designation
                        </Typography>
                        <FormControl variant="outlined" margin="dense" classes={{
                            root: classes.quantityRoot
                        }}>
                            <Select
                                id="city"
                                // value={city}
                                defaultValue={props.data.designation}
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
                                <MenuItem value={0} style={{ display: 'none' }}>Select Designation</MenuItem>
                                <MenuItem value={1}>Engineer</MenuItem>
                                <MenuItem value={2}>Technician</MenuItem>
                                <MenuItem value={3}>Project Manager</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Contact #
                        </Typography>
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Contact #"
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
            </Grid>
        </Card >
    )
}

export default EmployeeInfo;