import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { TextField, FormControl } from '@material-ui/core';
import '../styles/appointment.css'
import TimelineAddNew from '../components/Timeline/TimelineAddNew';
import Card from '../components/Card/Card'
import BannerButtonOnly from '../components/CustomerBanner/BannerButtonOnly';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from "@material-ui/icons/Search";
import '../styles/appointment-add-new.css'

const dataSearch = [
    {
        name: 'James Cook'
    },
    {
        name: 'Jack Brown'
    },
    {
        name: 'Jacob Brown'
    },
    {
        name: 'Jane Williams'
    },
    {
        name: 'Jasmine Martinez'
    },

]

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
                                            style={{ width: 750, height: 340, marginTop: 20 }}
                                            options={dataSearch.map((option) => option.name)}
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