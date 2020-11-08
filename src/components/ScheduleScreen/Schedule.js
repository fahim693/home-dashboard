import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import React, { useEffect, useRef, useState } from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import './schedule.css'
import { Avatar } from '@material-ui/core';

const unassignedUser = [
    {
        name: 'Evelyn Lopez'
    },
    {
        name: 'Marta Harvey'
    },
    {
        name: 'Evelyn Lopez'
    },
    {
        name: 'Marta Harvey'
    },
    {
        name: 'Evelyn Lopez'
    },
    {
        name: 'Marta Harvey'
    },
    {
        name: 'Evelyn Lopez'
    },


]

const employees = [
    {
        name: 'Sophia Davis',
        avatar: 'S'
    },
    {
        name: 'John Doe',
        avatar: 'J'
    },
]

const Schedule = () => {
    const [alignment, setAlignment] = React.useState('left');
    const [selectedDate, handleDateChange] = useState(new Date());
    const userRef = useRef();

    useEffect(() => {
        const func = () => {
            let current = userRef.current;
            console.log('width', current.offsetWidth);
        }
        func();
    }, [])

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const getEmployees = () => {
        let arr = [];
        for (let i = 0; i < 8; i++) {
            arr.push(
                <div style={{ paddingLeft: 12, height: 66, color: '#333', backgroundColor: '#fff', boxShadow: '2px 0px 4px rgba(0, 0, 0, 0.12), inset 0px 1px 0px #E0E0E0, inset 0px -1px 0px #D6D6D6', display: 'flex', alignItems: 'center' }}>
                    {employees[i] ?
                        <Avatar style={{ marginRight: 10 }}>{employees[i].avatar}</Avatar>
                        : ''
                    }
                    {employees[i] ? employees[i].name : ''}
                </div>
            )
        }

        return arr;
    }

    return (
        <div>
            <div style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 19px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.22)', marginBottom: 1, borderTopLeftRadius: 6, borderTopRightRadius: 6 }}>
                <div style={{ flex: 1, fontWeight: 500, fontSize: 24, color: '#000' }}>Schedule</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <svg style={{ cursor: 'pointer' }} width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.16156 0.828341C7.70656 0.373341 6.97156 0.373341 6.51656 0.828341L1.16156 6.18334C0.706562 6.63834 0.706562 7.37334 1.16156 7.82834L6.51656 13.1833C6.97156 13.6383 7.70656 13.6383 8.16156 13.1833C8.61656 12.7283 8.61656 11.9933 8.16156 11.5383L3.6349 7.00001L8.16156 2.47334C8.61656 2.01834 8.6049 1.27167 8.16156 0.828341Z" fill="black" />
                    </svg>
                    <div className='schedule-date-picker' style={{ width: 165, margin: '0px 30px' }}>
                        <MuiPickersUtilsProvider
                            utils={MomentUtils}>
                            <KeyboardDatePicker
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                format="MMM DD, YYYY"
                                value={selectedDate}
                                InputAdornmentProps={{ position: "end" }}
                                onChange={date => handleDateChange(date)}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <svg style={{ cursor: 'pointer' }} width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16168 0.828341C1.61668 0.373341 2.35168 0.373341 2.80668 0.828341L8.16168 6.18334C8.61668 6.63834 8.61668 7.37334 8.16168 7.82834L2.80668 13.1833C2.35168 13.6383 1.61668 13.6383 1.16168 13.1833C0.706677 12.7283 0.706677 11.9933 1.16168 11.5383L5.68835 7.00001L1.16168 2.47334C0.706677 2.01834 0.718344 1.27167 1.16168 0.828341Z" fill="black" />
                    </svg>

                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="left" aria-label="left aligned" style={{ width: 106 }}>
                            Dispatch
                    </ToggleButton>
                        <ToggleButton value="center" aria-label="centered" style={{ width: 106 }}>
                            Day
                    </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned" style={{ width: 106 }}>
                            Week
                    </ToggleButton>
                        <ToggleButton value="justify" aria-label="justified" style={{ width: 106 }}>
                            Month
                    </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff', display: 'flex', alignItems: 'center', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)' }}>
                <div style={{ paddingLeft: 19, fontWeight: 500, fontSize: 18, color: '#828282', width: 195 }}>
                    Unscheduled
                    <span
                        style={{
                            padding: 4,
                            borderRadius: 6,
                            color: '#000',
                            marginLeft: 12,
                            backgroundColor: '#F3D06D'
                        }}
                    >12</span>
                </div>
                <div style={{ padding: '0 24px', display: 'flex', backgroundColor: '#f7f7f7', alignItems: 'center', flex: 1, overflow: 'hidden' }}>
                    <div style={{ cursor: 'pointer', marginRight: 18 }}>
                        <svg width="9" height="14" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.60023 0.471141C8.0672 -0.157047 7.20615 -0.157047 6.67312 0.471141L0.399772 7.86443C-0.133257 8.49262 -0.133257 9.50738 0.399772 10.1356L6.67312 17.5289C7.20615 18.157 8.0672 18.157 8.60023 17.5289C9.13326 16.9007 9.13326 15.8859 8.60023 15.2577L3.29727 8.99195L8.60023 2.74228C9.13326 2.11409 9.11959 1.08322 8.60023 0.471141Z" fill="black" />
                        </svg>
                    </div>
                    <div ref={userRef} style={{ padding: '14px 0px', display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', flex: 1 }}>
                        {
                            unassignedUser.map((item, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        style={{
                                            width: 160,
                                            padding: '0 10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: 45,
                                            marginRight: 14,
                                            borderRadius: 6,
                                            fontSize: 18,
                                            backgroundColor: '#F3D06D'
                                        }}>{item.name}</div>
                                )
                            })
                        }
                    </div>
                    <div style={{ cursor: 'pointer', marginLeft: 18 }}>
                        <svg width="9" height="14" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.39977 17.5289C0.9328 18.157 1.79385 18.157 2.32688 17.5289L8.60023 10.1356C9.13326 9.50738 9.13326 8.49262 8.60023 7.86443L2.32688 0.471141C1.79385 -0.157046 0.932802 -0.157046 0.399771 0.471141C-0.133258 1.09933 -0.133258 2.11409 0.399771 2.74228L5.70273 9.00805L0.39977 15.2577C-0.13326 15.8859 -0.119592 16.9168 0.39977 17.5289Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: 214 }}>
                    <div style={{ padding: '14px 0px 14px 19px', fontWeight: 500, fontSize: 18, color: '#333', backgroundColor: '#fff', boxShadow: '2px 0px 4px rgba(0, 0, 0, 0.12), inset 0px 1px 0px #E0E0E0, inset 0px -1px 0px #D6D6D6', display: 'flex', alignItems: 'center' }}>
                        Employees
                        <svg style={{ marginLeft: 8 }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.211604 1.61C2.5316 4.59 5.9616 9 5.9616 9V14C5.9616 15.1 6.8616 16 7.9616 16C9.0616 16 9.9616 15.1 9.9616 14V9C9.9616 9 13.3916 4.59 15.7116 1.61C16.2216 0.95 15.7516 0 14.9116 0H1.0016C0.171604 0 -0.298396 0.95 0.211604 1.61Z" fill="#333333" />
                        </svg>
                    </div>
                    {
                        getEmployees()
                    }
                </div>
                <div></div>
            </div>
        </div >
    )
}

export default Schedule;