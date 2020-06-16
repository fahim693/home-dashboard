import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import { Card, CardContent, Typography, Chip, TextField, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { MdAssignment, MdPlace, MdPersonAdd, MdImage, MdFileDownload, MdMonetizationOn, MdHistory, MdRemoveCircle } from 'react-icons/md'
import '../styles/appointment-edit.css'
import Invoice from '../components/Invoice Table/InvoiceEdit';
import AppointmentHistory from '../components/Appointment History/AppointmentHistory';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    formControl: {
        marginTop: 6,
        minWidth: 160,
    },
    formControlDT:{
        marginTop: 6,
        width: 170
    },
    title: {
        fontSize: 14,
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Layout>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <MdAssignment />
                                            <div>
                                                Schedule
                                            </div>
                                        </Typography>
                                        <div className="card-content">
                                            <div className="start">
                                                <div className="date-time">
                                                    <Typography className="title-heads" variant="body2" component="p">
                                                        Start Date
                                                    </Typography>
                                                    <FormControl variant="outlined" className={classes.formControlDT}>
                                                        <MuiPickersUtilsProvider utils={MomentUtils} >
                                                            <KeyboardDatePicker
                                                                clearable
                                                                // value={selectedDate}
                                                                placeholder="10/10/2018"
                                                                // onChange={date => handleDateChange(date)}
                                                                minDate={new Date()}
                                                                inputVariant="outlined"
                                                                format="YYYY/MM/DD"
                                                            />
                                                        </MuiPickersUtilsProvider>
                                                    </FormControl>
                                                </div>
                                                <div className="date-time">
                                                    <Typography className="title-heads" variant="body2" component="p">
                                                        Start Time
                                                    </Typography>
                                                    <FormControl variant="outlined" className={classes.formControlDT}>
                                                        <MuiPickersUtilsProvider utils={MomentUtils} >
                                                            <KeyboardTimePicker
                                                                placeholder="08:00 AM"
                                                                mask="__:__ _M"
                                                                inputVariant="outlined"
                                                            // value={selectedDate}
                                                            // onChange={date => handleDateChange(date)}
                                                            />
                                                        </MuiPickersUtilsProvider>
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="end">
                                                <div className="date-time">
                                                    <Typography className="title-heads" variant="body2" component="p">
                                                        End Date
                                                    </Typography>
                                                    <FormControl variant="outlined" className={classes.formControlDT}>
                                                        <MuiPickersUtilsProvider utils={MomentUtils} >
                                                            <KeyboardDatePicker
                                                                clearable
                                                                // value={selectedDate}
                                                                placeholder="10/10/2018"
                                                                // onChange={date => handleDateChange(date)}
                                                                minDate={new Date()}
                                                                inputVariant="outlined"
                                                                format="YYYY/MM/DD"
                                                            />
                                                        </MuiPickersUtilsProvider>
                                                    </FormControl>
                                                </div>
                                                <div className="date-time">
                                                    <Typography className="title-heads" variant="body2" component="p">
                                                        End Time
                                                    </Typography>
                                                    <FormControl variant="outlined" className={classes.formControlDT}>
                                                        <MuiPickersUtilsProvider utils={MomentUtils} >
                                                            <KeyboardTimePicker
                                                                placeholder="08:00 AM"
                                                                mask="__:__ _M"
                                                                inputVariant="outlined"
                                                            // value={selectedDate}
                                                            // onChange={date => handleDateChange(date)}
                                                            />
                                                        </MuiPickersUtilsProvider>
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <MdPlace />
                                            <div>
                                                Appointment Address
                                            </div>
                                        </Typography>
                                        <div className="card-content">
                                            <Typography className="title-heads" variant="body2" component="p">
                                                Street Address
                                            </Typography>
                                            <div style={{ marginTop: 6 }}>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    fullWidth
                                                />
                                            </div>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p">
                                                City
                                            </Typography>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <Select
                                                    id="city"
                                                // value={age}
                                                // onChange={handleChange}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <br />
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p">
                                                State
                                            </Typography>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <Select
                                                    id="state"
                                                // value={age}
                                                // onChange={handleChange}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <br />
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p">
                                                ZIP
                                            </Typography>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                />
                                            </FormControl>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <MdPersonAdd />
                                            <div>
                                                Job Assigned To
                                            </div>
                                        </Typography>
                                        <div className="card-content">
                                            <div className="flex-remove-card">
                                                <div className="logged-in-user">
                                                    <img src="/profile-img.png" />
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
                                        </div>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <svg width="16" height="14" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.40568 23.0233H16.7507C17.7799 23.0233 18.7457 22.5332 19.3315 21.6953L25.5857 12.8891C25.9815 12.3357 25.9815 11.6084 25.5857 11.0551L19.3157 2.23308C18.7457 1.39514 17.7799 0.905029 16.7507 0.905029H2.40568C1.12318 0.905029 0.379015 2.37537 1.12318 3.41883L7.25068 11.9721L1.12318 20.5253C0.379015 21.5688 1.12318 23.0233 2.40568 23.0233Z" fill="black" />
                                            </svg>
                                            <div>
                                                Others
                                            </div>
                                        </Typography>
                                        <div className="card-content">
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
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <Select
                                                    id="state"
                                                // value={age}
                                                // onChange={handleChange}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <br />
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Notes
                                            </Typography>
                                            <div style={{ marginTop: 6 }}>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    fullWidth
                                                    rows={2}
                                                    rowsMax={4}
                                                    multiline
                                                />
                                            </div>
                                            {/* <Typography variant="body2" component="p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sagittis est. Vivamus euismod cursus varius.</Typography> */}
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Attachments
                                            </Typography>
                                            <div className="attachment-card">
                                                <div>
                                                    <MdImage style={{ marginRight: 18 }} />
                                                    <Typography variant="body2" component="p" >Attachment Name.ext</Typography>
                                                </div>
                                                <MdRemoveCircle className="apt-edit-icon" />
                                            </div>
                                            <div className="chips-edit">
                                                <Chip className="chip-edit" label="+ Add Attachment" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <MdMonetizationOn />
                                            <div>
                                                Invoice
                                            </div>
                                        </Typography>
                                        <div className="card-content">
                                            <Invoice />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className="card-title">
                                            <MdHistory />
                                            <div>
                                                Appointment History
                                            </div>
                                        </Typography>
                                        <AppointmentHistory />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
