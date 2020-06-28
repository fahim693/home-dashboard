import React from 'react'
import Card from '../Card/Card'
import { SecurityRounded } from '@material-ui/icons'
import './status-permission.css'
import { makeStyles, Typography, FormControl, MenuItem, Select, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
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
        },
    }
}));

const StatusPermissions = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.data.permissions);

    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    };
    return (
        <Card
            title="Status And Permissions"
            icon={<SecurityRounded className="main-title-icon" />}
            cardType={1}
        >
            <div style={{ padding: '16px 25px 17px 25px' }}>
                <Typography className="title-heads" variant="body2" component="p">
                    Status
                        </Typography>
                <FormControl variant="outlined" margin="dense" classes={{
                    root: classes.quantityRoot
                }}>
                    <Select
                        id="city"
                        // value={city}
                        defaultValue={props.data.status}
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
                        <MenuItem value={0} style={{ display: 'none' }}>Select Status</MenuItem>
                        <MenuItem value={1}>Active</MenuItem>
                        <MenuItem value={2}>Inactive</MenuItem>
                    </Select>
                </FormControl>
                <Typography className="title-heads" variant="body2" component="p">
                    Permissions
                </Typography>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value='staff' control={<Radio />} label="Office Staff" />
                    <FormControlLabel value='tech' control={<Radio />} label="Field Tech" />
                    <FormControlLabel value='admin' control={<Radio />} label="Admin" />
                </RadioGroup>
            </div>
        </Card >
    )
}

export default StatusPermissions;