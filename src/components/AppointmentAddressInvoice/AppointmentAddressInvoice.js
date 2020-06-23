import React from 'react'
import './appointment-address-invoice.css'
import { Typography, makeStyles, FormControl, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: "5px",
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

const AppointmentAddressInvoice = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography className="title-heads" variant="body2" component="p" >
                Address Name
            </Typography>
            <FormControl variant="outlined" fullWidth margin="dense" classes={{
                root: classes.quantityRoot
            }}>
                {/* <InputLabel shrink htmlFor="name-multiple">Select Source</InputLabel> */}
                <Select
                    id="state"
                    // value={props.data}
                    // onChange={handleChange}
                    defaultValue={0}
                    MenuProps={{
                        getContentAnchorEl: null,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                        }
                    }}
                >
                    <MenuItem value={0} >Permanent Address</MenuItem>
                    <MenuItem value={1}>Present Address</MenuItem>
                </Select>
            </FormControl>
            <br/>
            <br/>
            <Typography className="title-heads" variant="body2" component="p" >
                Street Address
            </Typography>
            <Typography variant="body2" component="p" style={{ fontSize: 20 }}>941 Baker's Street</Typography>
            <br/>
            <Typography className="title-heads" variant="body2" component="p" >
                City
            </Typography>
            <Typography variant="body2" component="p" style={{ fontSize: 20 }}>New York</Typography>
            <br/>
            <Typography className="title-heads" variant="body2" component="p" >
                ZIP
            </Typography>
            <Typography variant="body2" component="p" style={{ fontSize: 20 }}>50008</Typography>
        </div>
    )
}

export default AppointmentAddressInvoice;