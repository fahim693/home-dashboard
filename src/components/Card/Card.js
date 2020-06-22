import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './card.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    }
}));

const CardCustom = (props) => {
    const classes = useStyles();
    let cardContentClassName = 'card-content'
    if (props.cardType === 0) {
        cardContentClassName = 'card-content-inv'
    } else if(props.cardType === 1){
        cardContentClassName = ''
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h2" className="card-title">
                    {props.icon}
                    <div>
                        {props.title}
                    </div>
                </Typography>
                <div className={cardContentClassName}>
                    {props.children}
                </div>
            </CardContent>
        </Card>
    )
}

export default CardCustom;