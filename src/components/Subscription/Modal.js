import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Subscribe from './Subscribe';
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
        borderRadius: 6
    },
}));

export default function SubscriptionModal(props) {
    const classes = useStyles();
    const [page, setPage] = useState(0)

    useEffect(() => {
        const func = () => {
            if (page === 2)
                props.setExists(true);
        }
        func();
    }, [page, props])

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
                    <div className={classes.paper} style={{ width: page === 2 ? 480 : 1300 }}>
                        <Subscribe
                            page={page}
                            setPage={setPage}
                            setOpen={props.setOpen}
                        />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
