import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

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
        padding: theme.spacing(1.5, 0, 0),
        width: 490,
    },
}));

export default function BankConnectModal(props) {
    const classes = useStyles();
    const [flag, setFlag] = useState(0)

    const handleClick = () => {
        if (flag === 0) {
            setFlag(flag + 1);
        } if (flag === 1) {
            window.location.reload()
        }
    }

    const ModalHeader = () => {
        return (
            <div style={{
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.17)',
                paddingBottom: 15
            }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 10 }}>
                    <div className="edit-icon-container" >
                        <CloseRounded onClick={() => props.setOpen(false)} style={{ cursor: 'pointer' }} />
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    {
                        flag === 0 ?
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="36" cy="36" r="36" fill="#D4F2CE" />
                                <path d="M21.5 35.5624V43.0624C21.5 44.6186 22.7562 45.8749 24.3125 45.8749C25.8687 45.8749 27.125 44.6186 27.125 43.0624V35.5624C27.125 34.0061 25.8687 32.7499 24.3125 32.7499C22.7562 32.7499 21.5 34.0061 21.5 35.5624ZM32.75 35.5624V43.0624C32.75 44.6186 34.0063 45.8749 35.5625 45.8749C37.1187 45.8749 38.375 44.6186 38.375 43.0624V35.5624C38.375 34.0061 37.1187 32.7499 35.5625 32.7499C34.0063 32.7499 32.75 34.0061 32.75 35.5624ZM20.5625 55.2499H50.5625C52.1188 55.2499 53.375 53.9936 53.375 52.4374C53.375 50.8811 52.1188 49.6249 50.5625 49.6249H20.5625C19.0063 49.6249 17.75 50.8811 17.75 52.4374C17.75 53.9936 19.0063 55.2499 20.5625 55.2499ZM44 35.5624V43.0624C44 44.6186 45.2563 45.8749 46.8125 45.8749C48.3687 45.8749 49.625 44.6186 49.625 43.0624V35.5624C49.625 34.0061 48.3687 32.7499 46.8125 32.7499C45.2563 32.7499 44 34.0061 44 35.5624ZM33.8187 16.7936L19.0063 24.5936C18.2375 24.9874 17.75 25.7936 17.75 26.6561C17.75 27.9499 18.8 28.9999 20.0938 28.9999H51.05C52.325 28.9999 53.375 27.9499 53.375 26.6561C53.375 25.7936 52.8875 24.9874 52.1188 24.5936L37.3063 16.7936C36.2188 16.2124 34.9062 16.2124 33.8187 16.7936Z" fill="#2A95C5" />
                            </svg> :
                            <>
                                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="36" cy="36" r="36" fill="#D4F2CE" />
                                    <path d="M21.5 35.5624V43.0624C21.5 44.6186 22.7562 45.8749 24.3125 45.8749C25.8687 45.8749 27.125 44.6186 27.125 43.0624V35.5624C27.125 34.0061 25.8687 32.7499 24.3125 32.7499C22.7562 32.7499 21.5 34.0061 21.5 35.5624ZM32.75 35.5624V43.0624C32.75 44.6186 34.0063 45.8749 35.5625 45.8749C37.1187 45.8749 38.375 44.6186 38.375 43.0624V35.5624C38.375 34.0061 37.1187 32.7499 35.5625 32.7499C34.0063 32.7499 32.75 34.0061 32.75 35.5624ZM20.5625 55.2499H50.5625C52.1188 55.2499 53.375 53.9936 53.375 52.4374C53.375 50.8811 52.1188 49.6249 50.5625 49.6249H20.5625C19.0063 49.6249 17.75 50.8811 17.75 52.4374C17.75 53.9936 19.0063 55.2499 20.5625 55.2499ZM44 35.5624V43.0624C44 44.6186 45.2563 45.8749 46.8125 45.8749C48.3687 45.8749 49.625 44.6186 49.625 43.0624V35.5624C49.625 34.0061 48.3687 32.7499 46.8125 32.7499C45.2563 32.7499 44 34.0061 44 35.5624ZM33.8187 16.7936L19.0063 24.5936C18.2375 24.9874 17.75 25.7936 17.75 26.6561C17.75 27.9499 18.8 28.9999 20.0938 28.9999H51.05C52.325 28.9999 53.375 27.9499 53.375 26.6561C53.375 25.7936 52.8875 24.9874 52.1188 24.5936L37.3063 16.7936C36.2188 16.2124 34.9062 16.2124 33.8187 16.7936Z" fill="#2A95C5" />
                                </svg>
                                <svg style={{ marginLeft: -24 }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="11" fill="#FFE4D3" stroke="white" stroke-width="2" />
                                    <path d="M11.9999 6.28568V4.14282L9.14276 6.99996L11.9999 9.85711V7.71425C14.3642 7.71425 16.2856 9.63568 16.2856 12C16.2856 12.7214 16.107 13.4071 15.7856 14L16.8285 15.0428C17.3856 14.1643 17.7142 13.1214 17.7142 12C17.7142 8.84282 15.157 6.28568 11.9999 6.28568ZM11.9999 16.2857C9.63562 16.2857 7.71419 14.3643 7.71419 12C7.71419 11.2785 7.89276 10.5928 8.21419 9.99996L7.17134 8.95711C6.61419 9.83568 6.28562 10.8785 6.28562 12C6.28562 15.1571 8.84276 17.7142 11.9999 17.7142V19.8571L14.857 17L11.9999 14.1428V16.2857Z" fill="#FFB281" />
                                </svg>
                            </>
                    }

                </div>
            </div>
        )
    }
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
                        <ModalHeader />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '2px solid #E0E0E0', marginTop: 32, height: 190 }}>
                            <div style={{ fontWeight: 500, fontSize: 22, color: '#333', marginBottom: 12 }}>
                                {
                                    flag === 0 ?
                                        'Connect Bank Account' :
                                        'Progress...'
                                }
                            </div>
                            <div style={{ fontSize: 18, color: '#9B9B9B', width: 374, textAlign: 'center' }}>
                                {
                                    flag === 0 ?
                                        'Please connect your bank account to accept credit card.' :
                                        'Your bank account setup is in progress.'
                                }
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '25px 0'
                        }}>
                            <Button onClick={handleClick} variant='outlined' className='btn-primary' style={{
                                border: 0
                            }}>
                                <span>
                                    {flag === 0 ?
                                        'Continue' : flag === 1 ? 'Okay' : null
                                    }
                                </span>
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div >
    );
}
