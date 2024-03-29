import React, { useEffect, useState } from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { Button, FormControl, MenuItem, Select } from '@material-ui/core';
import { ArrowDropUp } from '@material-ui/icons';
import moment from 'moment';

const DateSelection = (props) => {

    const [selectedDate, handleDateChange] = useState(new Date());

    const [startTime, setStartTime] = useState(0)
    const [endTime, setEndTime] = useState(0)
    const [endAmPm, setEndAmPm] = useState(moment(props.schedule[props.row].startTime, 'h:mm A').format('A'))
    const [endTimeApplicable, setEndTimeApplicable] = useState([])

    useEffect(() => {
        const func = () => {
            let temp = moment(props.schedule[props.row].startTime, 'h:mm A').add(30, 'minutes').format('h:mm')
            let arr = []
            for (let i = 0; i < 4; i++) {
                arr.push(temp);
                temp = moment(temp, 'h:mm A').add(30, 'minutes').format('h:mm')
            }

            setEndTimeApplicable([...arr])
        }
        func();
    }, [props])

    const confirm = () => {
        let temp = props.schedule;
        temp[props.row].startTime = startTime === 0 ? props.schedule[props.row].startTime : moment(props.schedule[props.row].startTime, 'h:mm A').add(15, "minutes").format('h:mm A')
        temp[props.row].endTime = endTimeApplicable[endTime] + ' ' + endAmPm

        props.setSchedule([...temp])
        props.confirm(props.row);
    }

    return (
        <div>
            <div style={{ marginLeft: 2, marginTop: -23, }}>
                <ArrowDropUp style={{ color: '#fff', fontSize: 57 }} />
            </div>
            <div style={{ marginTop: -30, backgroundColor: '#fff', padding: '22px 0 22px 28px', width: 315, borderRadius: 6, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px -2px 8px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 18 }}>Confirm Date and Time</div>
                <div style={{ fontWeight: 500, color: '#333', marginBottom: 20 }}>
                    <div style={{ marginBottom: 12 }}>
                        <div style={{ marginBottom: 3 }}>Start Date</div>
                        <div style={{ width: 158 }}>
                            <MuiPickersUtilsProvider
                                utils={MomentUtils}>
                                <KeyboardDatePicker
                                    autoOk
                                    margin='dense'
                                    variant="inline"
                                    inputVariant="outlined"
                                    format="MM/DD/YY"
                                    value={selectedDate}
                                    InputAdornmentProps={{ position: "end" }}
                                    onChange={date => handleDateChange(date)}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <div style={{ marginBottom: 3 }}>Start Time</div>
                        <FormControl style={{ width: 90 }} margin="dense" variant="outlined" >
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={startTime}
                                MenuProps={{
                                    getContentAnchorEl: null,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    }
                                }}
                                onChange={(e) => setStartTime(e.target.value)}
                            >
                                <MenuItem value={0}>{moment(props.schedule[props.row].startTime, 'h:mm A').format('h:mm')}</MenuItem>
                                <MenuItem value={1}>{moment(props.schedule[props.row].startTime, 'h:mm A').add(15, "minutes").format('h:mm')}</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{ width: 80, marginLeft: 10 }} margin="dense" variant="outlined" >
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={moment(props.schedule[props.row].startTime, 'h:mm A').format('A')}
                                MenuProps={{
                                    getContentAnchorEl: null,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    }
                                }}
                                disabled
                                // onChange={(e) => setEndAmPm(e.target.value)}
                            >
                                <MenuItem value={'AM'}>AM</MenuItem>
                                <MenuItem value={'PM'}>PM</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <div style={{ marginBottom: 3 }}>End Time</div>
                        <FormControl style={{ width: 90 }} margin="dense" variant="outlined" >
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={endTime}
                                MenuProps={{
                                    getContentAnchorEl: null,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    }
                                }}
                                onChange={(e) => setEndTime(e.target.value)}

                            >
                                {
                                    endTimeApplicable.map((item, idx) => {
                                        return (
                                            <MenuItem key={idx} value={idx}>{item}</MenuItem>
                                        )
                                    })
                                }

                            </Select>
                        </FormControl>
                        <FormControl style={{ width: 80, marginLeft: 10 }} margin="dense" variant="outlined" >
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={endAmPm}
                                onChange={(e) => setEndAmPm(e.target.value)}
                                MenuProps={{
                                    getContentAnchorEl: null,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    }
                                }}
                            >
                                <MenuItem value={'AM'}>AM</MenuItem>
                                <MenuItem value={'PM'}>PM</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div>
                    <Button variant='outlined' style={{ marginRight: 18, color: '#EB5757' }}
                        onClick={props.cancel}
                        startIcon={
                            <svg width="12" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6894 0.321199C13.2753 -0.0929084 12.6064 -0.0929084 12.1923 0.321199L7 5.50284L1.80774 0.31058C1.39363 -0.103527 0.724687 -0.103527 0.31058 0.31058C-0.103527 0.724687 -0.103527 1.39363 0.31058 1.80774L5.50284 7L0.31058 12.1923C-0.103527 12.6064 -0.103527 13.2753 0.31058 13.6894C0.724687 14.1035 1.39363 14.1035 1.80774 13.6894L7 8.49716L12.1923 13.6894C12.6064 14.1035 13.2753 14.1035 13.6894 13.6894C14.1035 13.2753 14.1035 12.6064 13.6894 12.1923L8.49716 7L13.6894 1.80774C14.0929 1.40425 14.0929 0.724687 13.6894 0.321199Z" fill="#E24E3C" />
                            </svg>

                        }
                    >Cancel</Button>
                    <Button variant='outlined' style={{ backgroundColor: '#62C796', borderColor: '#62C796', color: '#fff' }}
                        onClick={confirm}
                        startIcon={
                            <svg width="15" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.56836 11.3475L1.81501 7.45089C1.39678 7.0167 0.731903 7.0167 0.313673 7.45089C-0.104558 7.88509 -0.104558 8.57535 0.313673 9.00954L4.80697 13.6744C5.2252 14.1085 5.9008 14.1085 6.31903 13.6744L17.6863 1.88429C18.1046 1.4501 18.1046 0.759841 17.6863 0.325646C17.2681 -0.108549 16.6032 -0.108549 16.185 0.325646L5.56836 11.3475Z" fill="white" />
                            </svg>
                        }
                    >Confirm</Button>
                </div>
            </div>
        </div>
    )
}

export default DateSelection;