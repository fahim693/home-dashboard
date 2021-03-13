import React, { useState } from 'react'
import { makeStyles, Button, Select, FormControl, MenuItem, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import './responsive.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 215,
    },
    quantityRoot: {
        minWidth: 180,
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
            border: "1px solid #bfbfbf"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf",
        },
    }
}));

const PageFilter = (props) => {
    const classes = useStyles();
    const [date, selectedDate] = useState({
        start: new Date()
    })

    const handleDateChange = (e, name) => {
        selectedDate({
            ...date,
            [name]: e
        })
    }

    // const handleChange = (e) => {
    //     
    // }

    return (
        <React.Fragment>
            <div className="top-container">
                <div className="cst-action">
                    <FormControl variant="outlined" margin="dense" classes={{
                        root: classes.quantityRoot
                    }}>
                        <Select
                            id="city"
                            // label="Actions"
                            // value={age}
                            MenuProps={{
                                getContentAnchorEl: null,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                }
                            }}
                            value={0}
                        // onChange={handleChange}
                        >
                            <MenuItem value={0} disabled style={{ display: 'none' }}>
                                <div className="menu-item" >
                                    {/* <AppsRounded className="action-icon" style={{ fontSize: 21, marginLeft: 2 }} /> */}
                                    <div>TOTAL SALES</div>
                                </div>
                            </MenuItem>
                            <MenuItem value='emp-edit'>
                                <div className="menu-item">
                                    {/* <CreateRounded className="action-icon" /> */}
                                    <div>ONLINE BOOKINGS</div>
                                </div>
                            </MenuItem>
                            <MenuItem value='emp-edit'>
                                <div className="menu-item">
                                    {/* <CreateRounded className="action-icon" /> */}
                                    <div>NEW CUSTOMERS</div>
                                </div>
                            </MenuItem>
                            <MenuItem value='emp-edit'>
                                <div className="menu-item">
                                    {/* <CreateRounded className="action-icon" /> */}
                                    <div>TRANSACTIONS</div>
                                </div>
                            </MenuItem>
                            <MenuItem value='emp-edit'>
                                <div className="menu-item">
                                    {/* <CreateRounded className="action-icon" /> */}
                                    <div>UPCOMING APPOINTMENTS</div>
                                </div>
                            </MenuItem>
                            <MenuItem value='emp-edit'>
                                <div className="menu-item">
                                    {/* <CreateRounded className="action-icon" /> */}
                                    <div>OPEN INVOICES</div>
                                </div>
                            </MenuItem>
                            <MenuItem value='emp-edit'>
                                <div className="menu-item">
                                    {/* <CreateRounded className="action-icon" /> */}
                                    <div>EMPLOYEES ON CALL</div>
                                </div>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="top-date-filter">
                    <Typography className="title-heads" variant="body2" component="p">
                        Start Date:
                    </Typography>
                    <FormControl variant="outlined" >
                        <MuiPickersUtilsProvider utils={MomentUtils} >
                            <KeyboardDatePicker
                                className="date-keyboard"
                                classes={{
                                    root: classes.quantityRoot
                                }}
                                clearable
                                value={date.start}
                                variant='inline'
                                KeyboardButtonProps
                                onChange={date => handleDateChange(date, 'start')}
                                minDate={new Date()}
                                inputVariant="outlined"
                                format="MM/DD/YYYY"
                                margin="dense"
                                PopoverProps={{
                                    anchorOrigin: { horizontal: "left", vertical: "bottom" },
                                    transformOrigin: { horizontal: "left", vertical: "top" },
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl>
                    <Typography className="title-heads" variant="body2" component="p">
                        End Date:
                    </Typography>
                    <FormControl variant="outlined"  >
                        <MuiPickersUtilsProvider utils={MomentUtils} >
                            <KeyboardDatePicker
                                className="date-keyboard"
                                classes={{
                                    root: classes.quantityRoot
                                }}
                                clearable
                                value={date.start}
                                variant='inline'
                                KeyboardButtonProps
                                onChange={date => handleDateChange(date, 'start')}
                                minDate={new Date()}
                                inputVariant="outlined"
                                format="MM/DD/YYYY"
                                margin="dense"
                                PopoverProps={{
                                    anchorOrigin: { horizontal: "left", vertical: "bottom" },
                                    transformOrigin: { horizontal: "left", vertical: "top" },
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl>
                    <div className="run-report-btn">
                        <Button variant="contained" style={{ color: "#fff", backgroundColor: '#4BCA81' }}>
                            Run Report
                        </Button>
                    </div>
                </div>
            </div >
        </React.Fragment>
    )
}

export default withRouter(PageFilter);