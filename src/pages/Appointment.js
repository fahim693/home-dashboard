import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import { Card, CardContent, Typography, CardActions, Button, Chip } from '@material-ui/core';
import { MdAssignment, MdPlace, MdPersonAdd, MdImage, MdFileDownload, MdMonetizationOn, MdHistory } from 'react-icons/md'
import '../styles/appointment.css'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
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
                                                <Typography className="title-heads" variant="body2" component="p">
                                                    Start Date and Time
                                            </Typography>
                                                <div className="subtitle-dark">
                                                    <Typography variant="body2" component="p" >
                                                        06/02/20
                                            </Typography>
                                                    <Typography variant="body2" component="p" style={{ margin: '2px 0' }}>
                                                        01:00 Pm
                                            </Typography>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="end">
                                                <Typography className="title-heads" variant="body2" component="p">
                                                    End Date and Time
                                            </Typography>
                                                <div className="subtitle-dark">
                                                    <Typography variant="body2" component="p" >
                                                        06/02/20
                                            </Typography>
                                                    <Typography variant="body2" component="p" style={{ margin: '2px 0' }}>
                                                        03:00 Pm
                                            </Typography>
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
                                            <Typography variant="body2" component="p">
                                                941, Baker’s Street, Eva Park, Parkinson County, LA 50008
                                            </Typography>
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
                                            <div className="logged-in-user">
                                                <img src="/profile-img.png" />
                                                <div>
                                                    <h3 className="name">Ray Wilson</h3>
                                                    <div className="subtitle-dark">Project Manager</div>
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
                                                <Chip className="chip" label="Tools" />
                                                <Chip className="chip" label="Photo" />
                                                <Chip className="chip" label="Job" />
                                            </div>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Source
                                            </Typography>
                                            <Typography variant="body2" component="p" >Phone</Typography>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Notes
                                            </Typography>
                                            <Typography variant="body2" component="p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sagittis est. Vivamus euismod cursus varius.</Typography>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Attachments
                                            </Typography>
                                            <div className="attachment-card">
                                                <div>
                                                    <MdImage style={{ marginRight: 18 }} />
                                                    <Typography variant="body2" component="p" >Attachment Name.ext</Typography>
                                                </div>
                                                <MdFileDownload />
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
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Tags
                                            </Typography>
                                            <div className="chips">
                                                <Chip className="chip" label="Tools" />
                                                <Chip className="chip" label="Photo" />
                                                <Chip className="chip" label="Job" />
                                            </div>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Source
                                            </Typography>
                                            <Typography variant="body2" component="p" >Phone</Typography>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Notes
                                            </Typography>
                                            <Typography variant="body2" component="p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sagittis est. Vivamus euismod cursus varius.</Typography>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Attachments
                                            </Typography>
                                            <div className="attachment-card">
                                                <div>
                                                    <MdImage style={{ marginRight: 18 }} />
                                                    <Typography variant="body2" component="p" >Attachment Name.ext</Typography>
                                                </div>
                                                <MdFileDownload />
                                            </div>
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
                                        <div className="card-content">
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Tags
                                            </Typography>
                                            <div className="chips">
                                                <Chip className="chip" label="Tools" />
                                                <Chip className="chip" label="Photo" />
                                                <Chip className="chip" label="Job" />
                                            </div>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Source
                                            </Typography>
                                            <Typography variant="body2" component="p" >Phone</Typography>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Notes
                                            </Typography>
                                            <Typography variant="body2" component="p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sagittis est. Vivamus euismod cursus varius.</Typography>
                                            <br />
                                            <Typography className="title-heads" variant="body2" component="p" >
                                                Attachments
                                            </Typography>
                                            <div className="attachment-card">
                                                <div>
                                                    <MdImage style={{ marginRight: 18 }} />
                                                    <Typography variant="body2" component="p" >Attachment Name.ext</Typography>
                                                </div>
                                                <MdFileDownload />
                                            </div>
                                        </div>
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
