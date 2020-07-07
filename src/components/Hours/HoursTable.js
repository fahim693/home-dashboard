import React, { useState } from 'react'
import './hours-table.css'
import { makeStyles, Typography, FormControl, TextField, Switch } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        "& .MuiSelect-select": {
            '&:focus': {
                backgroundColor: '#fff',
            }
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf",
        },
    },
}));

const HoursTable = () => {
    const classes = useStyles();
    const [days, setDays] = useState([
        {
            day: 'Mon',
            checked: false
        },
        {
            day: 'Tue',
            checked: false

        },
        {
            day: 'Wed',
            checked: false
        },
        {
            day: 'Thu',
            checked: false
        },
        {
            day: 'Fri',
            checked: false
        },
        {
            day: 'Sat',
            checked: false

        },
        {
            day: 'Sun',
            checked: false
        },
    ])

    const handleChange = (index) => {
        let arr = days
        arr[index].checked = !arr[index].checked
        setDays([...arr])
    }

    return (
        <div className='hours-container'>
            {
                days.map((day, idx) => (
                    <div key={day.day} className='weekly-day-container'>
                        <div className="day-header">{day.day}</div>
                        <div className="day-body">
                            <div>
                                {
                                    day.checked ?
                                        <Typography style={{ color: '#828282' }} className="title-heads" variant="body2" component="p">
                                            Open Time
                                        </Typography> :
                                        <Typography className="title-heads" variant="body2" component="p">
                                            Open Time
                                        </Typography>
                                }

                                <FormControl variant="outlined" fullWidth classes={{
                                    root: classes.quantityRoot
                                }}>
                                    <TextField
                                        id="time"
                                        type="time"
                                        defaultValue="08:00"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                            backgroundColor: '#000'
                                        }}
                                        variant='outlined'
                                        margin='dense'
                                        disabled={day.checked}
                                    />
                                </FormControl>
                            </div>
                            <div>
                                {
                                    day.checked ?
                                        <Typography style={{ color: '#828282' }} className="title-heads" variant="body2" component="p">
                                            Close Time
                                        </Typography> :
                                        <Typography className="title-heads" variant="body2" component="p">
                                            Close Time
                                        </Typography>
                                }
                                <FormControl variant="outlined" fullWidth classes={{
                                    root: classes.quantityRoot
                                }}>
                                    <TextField
                                        id="time"
                                        type="time"
                                        defaultValue="08:00"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                            backgroundColor: '#000'
                                        }}
                                        variant='outlined'
                                        margin='dense'
                                        disabled={day.checked}

                                    />
                                </FormControl>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography className="title-heads" variant="body2" component="p">
                                    Day Off
                                </Typography>
                                <FormControl variant="outlined" style={{ marginTop: 6, marginLeft: -12 }} classes={{
                                    root: classes.quantityRoot
                                }}>
                                    <Switch
                                        className="checked-hover"
                                        checked={day.checked}
                                        onChange={() => handleChange(idx)}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HoursTable;