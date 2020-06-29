import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { Typography, FormControl, MenuItem, Select } from '@material-ui/core';
import { EventNoteRounded, RoomRounded, LabelImportantRounded, MonetizationOnRounded } from '@material-ui/icons';
import '../styles/appointment-edit.css'
import Invoice from '../components/Invoice Table/InvoiceEdit';
import AppointmentAddressEdit from '../components/AppointmentAddressEdit/AppointmentAddressEdit'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import BannerQuote from '../components/CustomerBanner/BannerQuote';
import Card from '../components/Card/Card'
import Others from '../components/Others/Others';
import { data } from '../data/UserData'
import { items, services } from '../data/InvoiceData'
import { customerData } from '../data/CustomerInfo';
import DetailsEdit from '../components/Details.js/DetailsEdit';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    formControl: {
        marginTop: 6,
        minWidth: 185,
    },
    title: {
        fontSize: 14,
    },
    quantityRoot: {
        marginTop: 6,
        minWidth: 185,
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

export default function QuoteEdit() {
    const classes = useStyles();
    const [fieldValue, setFieldValue] = useState({
        street_address: '941, Baker’s Street',
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sagittis est. Vivamus euismod cursus varius.",
        zip: '50008'
    })
    const [date, selectedDate] = useState({
        start: new Date(),
        end: new Date(),
        start_time: new Date(),
        end_time: new Date(),
    })

    const handleDateChange = (e, name) => {
        selectedDate({
            ...date,
            [name]: e
        })
    }

    const handleOnChange = (e) => {
        setFieldValue({
            ...fieldValue,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Layout active={3}>
            <div className={classes.root}>
                <BannerQuote edit={true} name="John Williams" confirmUrl="/quote" />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <DetailsEdit />
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Schedule"
                                    icon={<EventNoteRounded className="main-title-icon" />}
                                >
                                    <div className="start-edit">
                                        <div className="date-time mr">
                                            <Typography className="title-heads" variant="body2" component="p">
                                                Start Date
                                                    </Typography>
                                            <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                                root: classes.quantityRoot
                                            }}>
                                                <MuiPickersUtilsProvider utils={MomentUtils} >
                                                    <KeyboardDatePicker
                                                        clearable
                                                        value={date.start}
                                                        onChange={date => handleDateChange(date, 'start')}
                                                        minDate={new Date()}
                                                        inputVariant="outlined"
                                                        format="MM/DD/YYYY"
                                                        margin="dense"
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </FormControl>
                                        </div>
                                        <div className="date-time ml" >
                                            <Typography className="title-heads" variant="body2" component="p">
                                                Start Time
                                            </Typography>
                                            <div style={{ display: "flex", marginTop: 9 }}>
                                                <FormControl variant="outlined" style={{ minWidth: 0, width: 110, marginRight: 5 }} margin="dense" classes={{
                                                    root: classes.quantityRoot
                                                }}>
                                                    <Select
                                                        id="city"
                                                        defaultValue={4}
                                                        MenuProps={{
                                                            getContentAnchorEl: null,
                                                            anchorOrigin: {
                                                                vertical: "bottom",
                                                                horizontal: "left",
                                                            }
                                                        }}
                                                    >
                                                        <MenuItem value={4}>12:30</MenuItem>
                                                        <MenuItem value={2}>1:00</MenuItem>
                                                        <MenuItem value={3}>1:30</MenuItem>
                                                        <MenuItem value={5}>2:00</MenuItem>
                                                        <MenuItem value={5}>2:30</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                <FormControl variant="outlined" style={{ minWidth: 0, width: 80 }} margin="dense" classes={{
                                                    root: classes.quantityRoot
                                                }}>
                                                    <Select
                                                        id="city"
                                                        defaultValue={4}
                                                        MenuProps={{
                                                            getContentAnchorEl: null,
                                                            anchorOrigin: {
                                                                vertical: "bottom",
                                                                horizontal: "left",
                                                            }
                                                        }}
                                                    >
                                                        <MenuItem value={1}>AM</MenuItem>
                                                        <MenuItem value={4}>PM</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="end-edit">
                                        <div className="date-time mr">
                                            <Typography className="title-heads" variant="body2" component="p">
                                                End Date
                                                    </Typography>
                                            <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                                root: classes.quantityRoot
                                            }}>
                                                <MuiPickersUtilsProvider utils={MomentUtils} >
                                                    <KeyboardDatePicker
                                                        clearable
                                                        value={date.end}
                                                        onChange={date => handleDateChange(date, 'end')}
                                                        minDate={new Date()}
                                                        inputVariant="outlined"
                                                        format="MM/DD/YYYY"
                                                        margin="dense"
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </FormControl>
                                        </div>
                                        <div className="date-time ml">
                                            <Typography className="title-heads" variant="body2" component="p">
                                                End Time
                                                    </Typography>
                                            <div style={{ display: "flex", marginTop: 9 }}>
                                                <FormControl variant="outlined" style={{ minWidth: 0, width: 110, marginRight: 5 }} margin="dense" classes={{
                                                    root: classes.quantityRoot
                                                }}>
                                                    <Select
                                                        id="city"
                                                        defaultValue={4}
                                                        MenuProps={{
                                                            getContentAnchorEl: null,
                                                            anchorOrigin: {
                                                                vertical: "bottom",
                                                                horizontal: "left",
                                                            }
                                                        }}
                                                    >
                                                        <MenuItem value={1}>12:00</MenuItem>
                                                        <MenuItem value={4}>12:30</MenuItem>
                                                        <MenuItem value={2}>1:00</MenuItem>
                                                        <MenuItem value={3}>1:30</MenuItem>
                                                        <MenuItem value={5}>2:00</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                <FormControl variant="outlined" style={{ minWidth: 0, width: 80 }} margin="dense" classes={{
                                                    root: classes.quantityRoot
                                                }}>
                                                    <Select
                                                        id="city"
                                                        defaultValue={4}
                                                        MenuProps={{
                                                            getContentAnchorEl: null,
                                                            anchorOrigin: {
                                                                vertical: "bottom",
                                                                horizontal: "left",
                                                            }
                                                        }}
                                                    >
                                                        <MenuItem value={1}>AM</MenuItem>
                                                        <MenuItem value={4}>PM</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Others"
                                    icon={<LabelImportantRounded className="main-title-icon" />}
                                >
                                    <Others
                                        notes={fieldValue.notes}
                                        handleOnChange={handleOnChange}
                                        data={data}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Appointment Address"
                                    icon={<RoomRounded className="main-title-icon" />}
                                >
                                    <AppointmentAddressEdit data={customerData} />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card
                                    title="Invoice"
                                    icon={<MonetizationOnRounded className="main-title-icon" />}
                                    cardType={0}
                                >
                                    <Invoice
                                        items={items}
                                        services={services}
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
