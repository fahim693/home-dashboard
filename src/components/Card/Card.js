import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './card.css'
import { CloseRounded, CreateRounded, KeyboardArrowDownRounded, KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    }
}));

const CardCustom = (props) => {
    const classes = useStyles();
    const [counter, setCounter] = useState(1)
    let month = ''

    if (counter === 1) {
        month = 'Jan'
    } else if (counter === 2) {
        month = 'Feb'
    } else if (counter === 3) {
        month = 'Mar'
    } else if (counter === 4) {
        month = 'Apr'
    } else if (counter === 5) {
        month = 'May'
    } else if (counter === 6) {
        month = 'Jun'
    } else if (counter === 7) {
        month = 'Jul'
    } else if (counter === 8) {
        month = 'Aug'
    } else if (counter === 9) {
        month = 'Sep'
    } else if (counter === 10) {
        month = 'Oct'
    } else if (counter === 11) {
        month = 'Nov'
    } else if (counter === 12) {
        month = 'Dec'
    }

    const nextMonth = () => {
        if (counter !== 12) {
            setCounter(counter + 1)
        }
    }

    const prevMonth = () => {
        if (counter !== 1) {
            setCounter(counter - 1)
        }
    }

    let cardContentClassName = 'card-content'
    let noBoxShadow = ''
    let cardTitle = 'fw500'
    if (props.cardType === 0) {
        cardContentClassName = 'card-content-inv'
    } else if (props.cardType === 1 || props.cardType === 3) {
        cardContentClassName = ''
    } else if (props.cardType === 2) {
        cardTitle = 'fbold'
    } else if (props.cardType === 4 || props.noBoxShadow) {
        cardContentClassName = ''
        noBoxShadow = 'no-box-shadow'
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h2" className={`card-title ${noBoxShadow}`}>
                    {props.icon}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        {
                            props.withSubTitle ?
                                <div className={cardTitle}>
                                    {props.title} <span style={{ color: 'rgb(152, 152, 152)' }}>(Month-Over-Month)</span>
                                </div> :
                                <div className={cardTitle}>
                                    {props.title}
                                </div>
                        }

                        {
                            props.cardType === 2 ?
                                <div>
                                    <Button onClick={() => props.history.push('/customer-new')} style={{ color: '#2a95c5', fontWeight: 500, fontSize: 17 }}>+ ADD NEW</Button>
                                </div> :
                                props.cardType === 3 ?
                                    <div className="edit-icon-container">
                                        <CloseRounded onClick={props.handleClose} style={{ cursor: 'pointer' }} />
                                    </div> :
                                    props.cardType === 4 ?
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: '-.1rem',
                                            color: "#828282",
                                            paddingRight: 8
                                        }}>

                                            <div style={{ width: 28, height: 28 }} className="edit-icon-container">
                                                <KeyboardArrowLeftRounded onClick={prevMonth} style={{ cursor: 'pointer' }} />
                                            </div>
                                            <div style={{margin:'0 5px'}}>
                                                {month}
                                            </div>
                                            <div style={{ width: 28, height: 28 }} className="edit-icon-container">
                                                <KeyboardArrowRightRounded onClick={nextMonth} style={{ cursor: 'pointer' }} />
                                            </div>
                                        </div> :
                                        props.withEditIcon ?
                                            <div className="edit-icon-container">
                                                <CreateRounded onClick={props.handleClose} className="with-edit-icon" />
                                            </div>
                                            :
                                            props.expansionButton ?
                                                <div className="view-btn">
                                                    <Button
                                                        onClick={props.handleClick}
                                                        style={{ paddingLeft: ' 12px', paddingRight: '5px' }}
                                                    >
                                                        <div style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}>
                                                            <span>View {props.rotate === 'initial' ? 'All' : 'LESS'}</span>
                                                            <KeyboardArrowDownRounded style={{ fontSize: 27, marginTop: -1.8 }} className={props.rotate} />
                                                        </div>
                                                    </Button>
                                                </div> : ''
                        }
                    </div>
                </Typography>
                <div className={cardContentClassName}>
                    {props.children}
                </div>
            </CardContent>
        </Card >
    )
}

export default withRouter(CardCustom);