import React, { useState } from 'react'
import './card.css'
import { makeStyles, Card, CardContent } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import SubscriptionModal from '../Subscription/Modal';

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
    const [open, setOpen] = useState(false)

    const handleOnClick = () => {
        if (props.name === 'Subscription')
            setOpen(true)
        else
            props.history.push(props.url)
    }

    return (
        <React.Fragment>
            <Card className={classes.root} >
                <CardContent style={{ cursor: 'pointer' }} onClick={handleOnClick}>
                    <div style={{ textAlign: 'center' }}>{props.icon}</div>
                    <div style={{ fontSize: 21, fontWeight: 500, marginTop: 10 }}>{props.name}</div>
                </CardContent>
            </Card>
            <SubscriptionModal
                open={open}
                setOpen={setOpen}
            />
        </React.Fragment>
    )
}

export default withRouter(MoreOptionCard);