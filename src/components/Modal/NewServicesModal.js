import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import NewService from '../NewService&Item/NewService';

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
        borderRadius: '0px 0px 6px 6px',
        width: 490,
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
                        <NewService
                            withImage={props.withImage}
                            data={props.data}
                            handleClose={props.handleModal}
                            modalType={props.modalType}
                            cardTitle={props.cardTitle}
                        />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
