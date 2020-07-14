import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import { CloseRounded, DeleteRounded } from '@material-ui/icons';

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
                        <br />
                        {
                            props.isPasswordReset ?
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                }}>
                                    {
                                        props.isErrored ?
                                            <Button onClick={props.handleModal} variant='outlined' style={{
                                                padding: '6px 16px',
                                                background: '#EB5757',
                                                color: '#fff',
                                                fontWeight: 500,
                                                fontSize: 16,
                                                marginRight: 8
                                            }}>
                                                OK
                                        </Button> :
                                            <Button onClick={props.handleModal} variant='outlined' style={{
                                                padding: '6px 16px',
                                                background: '#62C796',
                                                color: '#fff',
                                                fontWeight: 500,
                                                fontSize: 16,
                                                marginRight: 8
                                            }}>
                                                OK
                                        </Button>
                                    }
                                </div>
                                :
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                }}>
                                    <Button onClick={props.handleModal} variant='outlined' style={{
                                        padding: '6px 16px',
                                        background: '#fff',
                                        fontWeight: 500,
                                        fontSize: 16,
                                        marginRight: 8
                                    }}>
                                        <CloseRounded style={{ color: '#D35342', marginRight: 4 }} />
                                        <span>CANCEL</span>
                                    </Button>
                                    <Button onClick={props.handleModal} variant='outlined' style={{
                                        padding: '6px 17px',
                                        background: '#D35342',
                                        fontWeight: 500,
                                        borderColor: '#D35342',
                                        color: '#fff',
                                        fontSize: 16
                                    }}>
                                        <DeleteRounded style={{ color: '#fff', marginRight: 4 }} />
                                        <span>DELETE</span>
                                    </Button>
                                </div>
                        }
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
