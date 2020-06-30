import React, { useState } from 'react';
import { TextField, FormControl, Button, Typography, makeStyles } from '@material-ui/core';
import { SendRounded } from '@material-ui/icons';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

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

const TabContent = (props) => {
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
    return (
        <React.Fragment>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                background: '#F2F9FC',
                padding: '20px 0px',
                fontSize: 20,
            }}>
                <span style={{ fontWeight: 500 }}>Due Amount: </span>&nbsp;$208.00
            </div>
            <div style={{
                minHeight: 445,
                padding: '0 30px',
                borderBottom: '2px solid #E0E0E0',
                marginTop: 12
            }}>
                <Typography className="title-heads" variant="body2" component="p">
                    Email Receipt
                        </Typography>
                <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="email"
                        placeholder="Email"
                        variant="outlined"
                        // value={fieldValue.street_address}
                        name='email'
                        // onChange={handleOnChange}
                        fullWidth
                        margin='dense'
                    />
                </FormControl>
                <br />
                <Typography className="title-heads" variant="body2" component="p">
                    Amount
                </Typography>
                <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="amount"
                        variant="outlined"
                        placeholder="Amount"
                        // value={fieldValue.street_address}
                        name='ampunt'
                        // onChange={handleOnChange}
                        fullWidth
                        margin='dense'
                    />
                </FormControl>
                <br />
                {
                    props.type === 2 ?
                        <React.Fragment>
                            <Typography className="title-heads" variant="body2" component="p">
                                Check Holder Name
                        </Typography>
                            <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                root: classes.quantityRoot
                            }}>
                                <TextField
                                    id="holder"
                                    variant="outlined"
                                    // value={fieldValue.street_address}
                                    name='holder'
                                    placeholder="Check Holder"
                                    // onChange={handleOnChange}
                                    fullWidth
                                    margin='dense'
                                />
                            </FormControl>
                            <br />
                            <Typography className="title-heads" variant="body2" component="p">
                                Check Number
                            </Typography>
                            <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                root: classes.quantityRoot
                            }}>
                                <TextField
                                    id="checkNumber"
                                    variant="outlined"
                                    // value={fieldValue.street_address}
                                    placeholder="Check Number"
                                    name='checkNumber'
                                    // onChange={handleOnChange}
                                    fullWidth
                                    margin='dense'
                                />
                            </FormControl>
                            <br />
                            <div style={{
                                display: 'flex',
                                width: '100%'
                            }}>
                                <div style={{
                                    width: '100%',
                                    marginRight: 10
                                }}>
                                    <Typography className="title-heads" variant="body2" component="p">
                                        Check Date
                                    </Typography>
                                    <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <MuiPickersUtilsProvider utils={MomentUtils} >
                                            <KeyboardDatePicker
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
                                </div>
                                <div style={{
                                    width: '100%',
                                    marginLeft: 10
                                }}>
                                    <Typography className="title-heads" variant="body2" component="p">
                                        Bank Name
                                    </Typography>
                                    <FormControl variant="outlined" fullWidth classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <TextField
                                            id="bank"
                                            variant="outlined"
                                            placeholder="Bank Name"
                                            // value={fieldValue.street_address}
                                            name='bank'
                                            // onChange={handleOnChange}
                                            fullWidth
                                            margin='dense'
                                        />
                                    </FormControl>
                                </div>
                            </div>
                        </React.Fragment> :
                        props.type === 3 ?
                            <React.Fragment>
                                <Typography className="title-heads" variant="body2" component="p">
                                    Notes
                                </Typography>
                                <FormControl variant="outlined" fullWidth classes={{
                                    root: classes.quantityRoot
                                }}>
                                    <TextField
                                        id="email"
                                        variant="outlined"
                                        placeholder="Enter Notes"
                                        multiline
                                        rows={3}
                                        rowsMax={4}
                                        // value={fieldValue.street_address}
                                        name='email'
                                        // onChange={handleOnChange}
                                        fullWidth
                                        margin='dense'
                                    />
                                </FormControl>
                            </React.Fragment> : ''

                }
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '25px 0'
            }}>
                <Button variant='outlined' className='btn-primary' style={{
                    border: 0
                }}>
                    <SendRounded style={{ fontSize: 15, marginRight: 5 }} />
                    <span>SUBMIT</span>
                </Button>
            </div>
        </React.Fragment >
    )
}

export default TabContent;