import React from 'react'
import { Typography, FormControl, Select, TextField, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        minWidth: 195,
        marginBottom: 10,
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
            // backgroundColor: "#fff"
        },
    }
}));

const AppointmentAddressEdit = (props) => {
    const classes = useStyles();
    return (
        <div>
            {
                props.withAddressType ?
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Address Name
                        </Typography>
                        <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="street-address"
                                variant="outlined"
                                placeholder="Enter Street Address"
                                // value={fieldValue.street_address}
                                name='street_address'
                                value="Permanent Address"
                                // onChange={handleOnChange}
                                fullWidth
                                margin='dense'
                            />
                        </FormControl>
                    </div> : ''
            }
            <Typography className="title-heads" variant="body2" component="p">
                Street Address
            </Typography>
            <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                root: classes.quantityRoot
            }}>
                <TextField
                    id="street-address"
                    variant="outlined"
                    placeholder="Enter Street Address"
                    defaultValue={props.data.street_address}
                    // value={fieldValue.street_address}
                    name='street_address'
                    // onChange={handleOnChange}
                    fullWidth
                    margin='dense'
                />
            </FormControl>
            <Typography className="title-heads" variant="body2" component="p">
                City
                                            </Typography>
            <FormControl variant="outlined" margin="dense" classes={{
                root: classes.quantityRoot
            }}>
                <Select
                    id="city"
                    // value={city}
                    defaultValue={props.data.city}
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
                    <MenuItem value={0} style={{ display: 'none' }}>Select City</MenuItem>
                    <MenuItem value={1}>Los Angeles</MenuItem>
                    <MenuItem value={4}>New York</MenuItem>
                    <MenuItem value={2}>San Diego</MenuItem>
                    <MenuItem value={9}>Dallas</MenuItem>
                    <MenuItem value={5}>Houston</MenuItem>
                </Select>
            </FormControl>
            <Typography className="title-heads" variant="body2" component="p">
                State
                                    </Typography>
            <FormControl variant="outlined" margin="dense" classes={{
                root: classes.quantityRoot
            }}>
                <Select
                    id="state"
                    defaultValue={props.data.state}
                    MenuProps={{
                        getContentAnchorEl: null,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                        }
                    }}
                // value={age}
                // onChange={handleChange}
                >
                    <MenuItem value={0} style={{ display: 'none' }}>Select State</MenuItem>
                    <MenuItem value={1}>California</MenuItem>
                    <MenuItem value={5}>New York</MenuItem>
                    <MenuItem value={2}>Texas</MenuItem>
                    <MenuItem value={3}>Florida</MenuItem>
                    <MenuItem value={4}>New Jersey</MenuItem>
                </Select>
            </FormControl>
            <Typography className="title-heads" variant="body2" component="p">
                ZIP
            </Typography>
            <FormControl variant="outlined" classes={{
                root: classes.quantityRoot
            }}>
                <TextField
                    id="zip"
                    variant="outlined"
                    name="zip"
                    placeholder="Enter ZIP"
                    defaultValue={props.data.zip}
                    // value={fieldValue.zip}
                    // onChange={handleOnChange}
                    margin="dense"
                />
            </FormControl>
        </div>
    )
}

export default AppointmentAddressEdit;