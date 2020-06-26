import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './card.css'
import { CloseRounded, CreateRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    }
}));

const CardCustom = (props) => {
    const classes = useStyles();
    let cardContentClassName = 'card-content'
    let cardTitle = 'fw500'
    if (props.cardType === 0) {
        cardContentClassName = 'card-content-inv'
    } else if (props.cardType === 1 || props.cardType === 3) {
        cardContentClassName = ''
    } else if (props.cardType === 2) {
        cardTitle = 'fbold'
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h2" className="card-title">
                    {props.icon}
                    {
                        props.cardType === 2 ?
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                                <div className={cardTitle}>
                                    {props.title}
                                </div>
                                <div>
                                    <Button style={{ color: '#2a95c5', fontWeight: 500, fontSize: 17 }}>+ ADD NEW</Button>
                                </div>
                            </div> :
                            props.cardType === 3 ?
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%'
                                }}>
                                    <div className={cardTitle}>
                                        {props.title}
                                    </div>
                                    <CloseRounded onClick={props.handleClose} style={{ cursor: 'pointer' }} />
                                </div> :
                                props.cardType === 4 ?
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%'
                                    }}>
                                        <div className={cardTitle}>
                                            {props.title}
                                        </div>
                                        <CreateRounded onClick={props.handleClose} style={{ cursor: 'pointer', fontSize: '1.3rem' }} />
                                    </div> :
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%'
                                    }}>
                                        <div className={cardTitle}>
                                            {props.title}
                                        </div>
                                        {
                                            props.withEditIcon ? <CreateRounded onClick={props.handleClose} style={{ cursor: 'pointer', fontSize: '1.3rem' }} /> : ''
                                        }

                                    </div>

                    }

                </Typography>
                <div className={cardContentClassName}>
                    {props.children}
                </div>
            </CardContent>
        </Card>
    )
}

export default CardCustom;