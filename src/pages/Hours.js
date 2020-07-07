import React from 'react'
import Layout from '../components/Layout/Layout';
import HoursTable from '../components/Hours/HoursTable';
import { Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 70
    }
});

const Hours = () => {
    const classes = useStyles();
    return (
        <Layout active={6}>
            <Card className={classes.root}>
                <CardContent>
                    <div style={{fontSize: 30, fontWeight: 'bold',padding: '1.15rem 1.5rem'}}>Hours</div>
                </CardContent>
                <HoursTable />
            </Card>
        </Layout>
    )
}

export default Hours;