import React from 'react'
import './card.css'
import { makeStyles, Card, CardContent } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: 180,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
});

const MoreOptionCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} >
            <CardContent style={{ cursor: 'pointer' }} onClick={()=> props.history.push(props.url)}>
                <div style={{ textAlign: 'center' }}>{props.icon}</div>
                <div style={{ fontSize: 21, fontWeight: 500, marginTop: 10 }}>{props.name}</div>
            </CardContent>
        </Card>
    )
}

export default withRouter(MoreOptionCard);