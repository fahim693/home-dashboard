import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        outline: 0,
        boxShadow: theme.shadows[5],
        borderRadius: '0.2rem',
        padding: theme.spacing(4, 5, 3),
        width: 400,
    },
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <div style={{ fontSize: 20, fontWeight: 500 }} id="transition-modal-title">{props.modalText}</div>
                        <br />
                        <br />
                        <div style={{ textAlign: 'right' }}>
                            <Button onClick={() => props.setOpen(false)} variant='contained' style={{
                                background: '#F2F2F2',
                                boxShadow: 'none',
                                marginRight: 14
                            }}>
                                No
                            </Button>
                            <Button onClick={props.showDatePicker} variant='contained' style={{
                                background: '#62C796',
                                color: '#fff',
                                boxShadow: 'none',
                            }}>
                                Yes
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div >
    );
}
