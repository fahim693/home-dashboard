import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { Typography, Chip, TextField, FormControl } from '@material-ui/core';
import '../styles/appointment.css'
import Invoice from '../components/Invoice Table/Invoice';
import AppointmentHistory from '../components/AppointmentHistory/AppointmentHistory';
import TimelineAddNew from '../components/Timeline/TimelineAddNew';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import { data } from '../data/UserData'
import Card from '../components/Card/Card'
import BannerButtonOnly from '../components/CustomerBanner/BannerButtonOnly';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from "@material-ui/icons/Search";
import '../styles/appointment-add-new.css'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    },
    formControl: {
        minWidth: 185,
    },
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
            border: 0
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: 0
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: 0,
            // backgroundColor: "#fff"
        },
    }
}));

export default function AppointmentAddNew() {
    const classes = useStyles();

    return (
        <Layout>
            <div className={classes.root}>
                <BannerButtonOnly 
                    text="NEXT"
                    link="/add-invoice"
                />
                <TimelineAddNew step={0} />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card
                                    title="Select Customer"
                                    cardType={2}
                                >
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        <Autocomplete
                                            id="free-solo-demo"
                                            freeSolo
                                            style={{ width: 750, height: 350, marginTop: 50 }}
                                            options={['Title', 'title 2'].map((option) => option)}
                                            renderInput={(params) => (
                                                <FormControl variant="outlined" fullWidth classes={{
                                                    root: classes.quantityRoot
                                                }}>
                                                    <TextField
                                                        {...params}
                                                        placeholder="Search"
                                                        margin="normal"
                                                        variant="outlined"
                                                        style={{
                                                            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.22)'
                                                        }}
                                                        InputProps={{
                                                            ...params.InputProps,
                                                            endAdornment: <SearchIcon style={{
                                                                marginRight: 10,
                                                                color: '#A2A2A2'
                                                            }} />
                                                        }}
                                                    />
                                                </FormControl>
                                            )}
                                        />

                                    </div>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
