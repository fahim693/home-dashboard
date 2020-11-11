import { makeStyles } from '@material-ui/core';
import React from 'react'
import Layout from '../components/Layout/Layout';
import ScheduleScreen from '../components/ScheduleScreen/Schedule'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
        marginTop: 70
    },
    formControl: {
        minWidth: 185,
    }
}));

const Schedule = () => {
    const classes = useStyles();

    return (
        <Layout active={4}>
            <div className={classes.root}>
                <ScheduleScreen />
            </div>
        </Layout>
    )
}

export default Schedule;