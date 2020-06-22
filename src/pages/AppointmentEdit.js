import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { Typography, Chip, TextField, FormControl, MenuItem, Select } from '@material-ui/core';
import { MdRemoveCircle } from 'react-icons/md'
import { EventNoteRounded, RoomRounded, PersonAddRounded, LabelImportantRounded, ImageRounded, MonetizationOnRounded, HistoryRounded } from '@material-ui/icons';
import '../styles/appointment-edit.css'
import Invoice from '../components/Invoice Table/InvoiceEdit';
import AppointmentHistory from '../components/AppointmentHistory/AppointmentHistory';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Banner from '../components/CustomerBanner/Banner';
import Timeline from '../components/Timeline/Timeline';
import Card from '../components/Card/Card'

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

export default function CenteredGrid() {
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
        <Layout>
            <div className={classes.root}>
                <Breadcrumbs />
                <Banner edit={true} />
                <Timeline />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
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
                                            <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                                root: classes.quantityRoot
                                            }}>
                                                <MuiPickersUtilsProvider utils={MomentUtils} >
                                                    <KeyboardTimePicker
                                                        placeholder="08:00 AM"
                                                        mask="__:__ _M"
                                                        inputVariant="outlined"
                                                        value={date.start_time}
                                                        onChange={date => handleDateChange(date, 'start_time')}
                                                        margin="dense"

                                                    />
                                                </MuiPickersUtilsProvider>
                                            </FormControl>
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
                                            <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                                root: classes.quantityRoot
                                            }}>
                                                <MuiPickersUtilsProvider utils={MomentUtils} >
                                                    <KeyboardTimePicker
                                                        placeholder="08:00 AM"
                                                        mask="__:__ _M"
                                                        inputVariant="outlined"
                                                        value={date.end_time}
                                                        onChange={date => handleDateChange(date, 'end_time')}
                                                        margin="dense"
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </FormControl>
                                        </div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Appointment Address"
                                    icon={<RoomRounded className="main-title-icon" />}
                                >
                                    <Typography className="title-heads" variant="body2" component="p">
                                        Street Address
                                            </Typography>
                                    <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <TextField
                                            id="street-address"
                                            variant="outlined"
                                            value={fieldValue.street_address}
                                            name='street_address'
                                            onChange={handleOnChange}
                                            fullWidth
                                            margin='dense'
                                        />
                                    </FormControl>
                                    <br />
                                    <br />
                                    <Typography className="title-heads" variant="body2" component="p">
                                        City
                                            </Typography>
                                    <FormControl variant="outlined" margin="dense" classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <Select
                                            id="city"
                                            // value={city}
                                            defaultValue={4}
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
                                            <MenuItem value={1}>Los Angeles</MenuItem>
                                            <MenuItem value={4}>New York</MenuItem>
                                            <MenuItem value={2}>San Diego</MenuItem>
                                            <MenuItem value={3}>Dallas</MenuItem>
                                            <MenuItem value={5}>Houston</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <br />
                                    <br />
                                    <Typography className="title-heads" variant="body2" component="p">
                                        State
                                            </Typography>
                                    <FormControl variant="outlined" margin="dense" classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <Select
                                            id="state"
                                            defaultValue={5}
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
                                            <MenuItem value={1}>California</MenuItem>
                                            <MenuItem value={5}>New York</MenuItem>
                                            <MenuItem value={2}>Texas</MenuItem>
                                            <MenuItem value={3}>Florida</MenuItem>
                                            <MenuItem value={4}>New Jersey</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <br />
                                    <br />
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
                                            value={fieldValue.zip}
                                            onChange={handleOnChange}
                                            margin="dense"
                                        />
                                    </FormControl>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Job Assigned To"
                                    icon={<PersonAddRounded className="main-title-icon" />}
                                >
                                    <div className="flex-remove-card">
                                        <div style={{ padding: 0 }} className="logged-in-user">
                                            <img src="/profile-img.png" alt="" />
                                            <div>
                                                <h3 className="name">Ray Wilson</h3>
                                                <div className="subtitle-dark">Project Manager</div>
                                            </div>
                                        </div>
                                        <MdRemoveCircle className="apt-edit-icon" />
                                    </div>
                                    <div className="chips-edit">
                                        <Chip className="chip-edit" label="+ Assign Job" />
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Others"
                                    icon={<LabelImportantRounded className="main-title-icon" />}
                                >
                                    <Typography className="title-heads" variant="body2" component="p" >
                                        Tags
                                            </Typography>
                                    <div className="chips">
                                        <Chip className="chip" label="Tools" onDelete={() => { }} deleteIcon={<MdRemoveCircle style={{ color: "#FF0000" }} />} />
                                        <Chip className="chip" label="Photo" onDelete={() => { }} deleteIcon={<MdRemoveCircle style={{ color: "#FF0000" }} />} />
                                        <Chip className="chip" label="Job" onDelete={() => { }} deleteIcon={<MdRemoveCircle style={{ color: "#FF0000" }} />} />
                                    </div>
                                    <div className="chips-edit">
                                        <Chip className="chip-edit" label="+ Add Tag" />
                                    </div>
                                    <br />
                                    <Typography className="title-heads" variant="body2" component="p" >
                                        Source
                                            </Typography>
                                    <FormControl variant="outlined" margin="dense" classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <Select
                                            id="state"
                                            // value={age}
                                            // onChange={handleChange}
                                            defaultValue={1}
                                            MenuProps={{
                                                getContentAnchorEl: null,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left",
                                                }
                                            }}
                                        >
                                            <MenuItem value={1}>Phone</MenuItem>
                                            <MenuItem value={2}>Email</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <br />
                                    <br />
                                    <Typography className="title-heads" variant="body2" component="p" >
                                        Notes
                                            </Typography>
                                    <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <TextField
                                            id="notes"
                                            variant="outlined"
                                            fullWidth
                                            name="notes"
                                            value={fieldValue.notes}
                                            onChange={handleOnChange}
                                            rows={2}
                                            rowsMax={4}
                                            size='small'
                                            multiline
                                        />
                                    </FormControl>
                                    {/* <Typography variant="body2" component="p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sagittis est. Vivamus euismod cursus varius.</Typography> */}
                                    <br />
                                    <br />
                                    <Typography className="title-heads" variant="body2" component="p" >
                                        Attachments
                                            </Typography>
                                    <div className="attachment-card">
                                        <div>
                                            <ImageRounded style={{ marginRight: 10 }} />
                                            <Typography variant="body2" component="p" >Attachment Name.ext</Typography>
                                        </div>
                                        <MdRemoveCircle className="apt-edit-icon" />
                                    </div>
                                    <div className="chips-edit">
                                        <Chip className="chip-edit" label="+ Add Attachment" />
                                    </div>
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
                                    <Invoice />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Appointment History"
                                    icon={<HistoryRounded className='main-title-icon' />}
                                    cardType={1}
                                >
                                    <AppointmentHistory />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
