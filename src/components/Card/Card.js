import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './card.css'
import { CloseRounded, CreateRounded, KeyboardArrowDownRounded } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

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
                            props.cardType === 2 ?
                                <div>
                                    <Button onClick={() => props.history.push('/customer-new')} style={{ color: '#2a95c5', fontWeight: 500, fontSize: 17 }}>+ ADD NEW</Button>
                                </div> :
                                props.cardType === 3 ?
                                    <div className="edit-icon-container">
                                        <CloseRounded onClick={props.handleClose} style={{ cursor: 'pointer' }} />
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