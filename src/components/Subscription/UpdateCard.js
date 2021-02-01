import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Subscribe from './Subscribe';
import { Button, TextField } from '@material-ui/core';
import InputMask from 'react-input-mask';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function UpdateCardModal(props) {
    const classes = useStyles();
    const [page, setPage] = useState(0)
    const [cardInfo, setCardInfo] = useState({
        name: '',
        number: '',
        cvc: '',
        postalCode: '',
        expDate: ''
    })

    const handleChangeCardInfo = (e) => {
        setCardInfo({
            ...cardInfo,
            [e.target.name]: e.target.value
        })
    }

    // useEffect(() => {
    //     const func = () => {
    //         if (page === 2)
    //             props.setExists(true);
    //     }
    //     func();
    // }, [page, props])

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
                <div style={{
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    outline: 0,
                    paddingBottom: 22
                }}>
                    <div style={{ width: 550, backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 18px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.22)', marginBottom: 1, borderTopLeftRadius: 6, borderTopRightRadius: 6 }}>
                        <div style={{ flex: 1, fontWeight: 500, fontSize: 24, color: '#000' }}>Update Credit Card</div>
                        <Button variant='outlined'
                            onClick={() => {
                                props.setOpen(false)
                            }}
                            style={{ border: '2px solid #2A95C5', color: '#2A95C5', marginRight: 24 }}>Cancel</Button>
                        <Button variant='contained'
                            onClick={() => props.setOpen(false)}
                            style={{ backgroundColor: '#2A95C5', color: '#fff' }}>Update card</Button>
                    </div>
                    <div style={{ height: 440, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ textAlign: 'left', width: 377 }}>
                            <div style={{ fontSize: 28, fontWeight: 500, marginBottom: 34, }}>Credit Card Information</div>
                        </div>
                        <div style={{ fontWeight: 500, fontSize: 20, color: '#333' }}>
                            <div>Name on card</div>
                            <TextField style={{ width: 380, marginTop: 8 }} variant="outlined" size='small' name="name" placeholder="Enter Name" value={cardInfo.name} onChange={handleChangeCardInfo} />
                            <br />
                            <br />
                            <div>Card Number</div>
                            <InputMask mask="9999 9999 9999 9999" value={cardInfo.number} maskChar=" " onChange={(e) => setCardInfo({
                                ...cardInfo,
                                number: e.target.value
                            })} >
                                {(inputProps) => <TextField style={{ width: 380, marginTop: 8 }} variant="outlined" size='small' placeholder="1234 1234 1234 1234" />}
                            </InputMask>
                            <br />
                            <br />
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <div>Exp Date</div>
                                    <InputMask mask="99/99" value={cardInfo.expDate} maskChar=" " onChange={(e) => setCardInfo({
                                        ...cardInfo,
                                        expDate: e.target.value
                                    })} >
                                        {(inputProps) => <TextField style={{ width: 95, marginTop: 8 }} variant="outlined" size='small' placeholder="MM/YY" />}
                                    </InputMask>
                                </div>
                                <div style={{ margin: '0 16px' }}>
                                    <div>CVC</div>
                                    <InputMask mask="999" value={cardInfo.cvc} maskChar=" " onChange={(e) => setCardInfo({
                                        ...cardInfo,
                                        cvc: e.target.value
                                    })} >
                                        {(inputProps) => <TextField style={{ width: 95, marginTop: 8 }} variant="outlined" size='small' placeholder="CVC" />}
                                    </InputMask>
                                </div>
                                <div>
                                    <div>Postal Code</div>
                                    <TextField style={{ width: 155, marginTop: 8 }} variant="outlined" size='small' name="postalCode" placeholder="Postal Code" value={cardInfo.postalCode} onChange={handleChangeCardInfo} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div >
    );
}

{/* <div style={{ fontSize: 28, fontWeight: 500, marginBottom: 34, marginTop: 25 }}>Payment Information</div>
                <div style={{ fontWeight: 500, fontSize: 20, color: '#333' }}>
                    <div>Name on card</div>
                    <TextField style={{ width: 380, marginTop: 8 }} variant="outlined" size='small' name="name" placeholder="Enter Name" value={cardInfo.name} onChange={handleChangeCardInfo} />
                    <br />
                    <br />
                    <div>Card Number</div>
                    <InputMask mask="9999 9999 9999 9999" value={cardInfo.number} maskChar=" " onChange={(e) => setCardInfo({
                        ...cardInfo,
                        number: e.target.value
                    })} >
                        {(inputProps) => <TextField style={{ width: 380, marginTop: 8 }} variant="outlined" size='small' placeholder="1234 1234 1234 1234" />}
                    </InputMask>
                    <br />
                    <br />
                    <div style={{ display: 'flex' }}>
                        <div>
                            <div>Exp Date</div>
                            <InputMask mask="99/99" value={cardInfo.expDate} maskChar=" " onChange={(e) => setCardInfo({
                                ...cardInfo,
                                expDate: e.target.value
                            })} >
                                {(inputProps) => <TextField style={{ width: 95, marginTop: 8 }} variant="outlined" size='small' placeholder="MM/YY" />}
                            </InputMask>
                        </div>
                        <div style={{ margin: '0 16px' }}>
                            <div>CVC</div>
                            <InputMask mask="999" value={cardInfo.cvc} maskChar=" " onChange={(e) => setCardInfo({
                                ...cardInfo,
                                cvc: e.target.value
                            })} >
                                {(inputProps) => <TextField style={{ width: 95, marginTop: 8 }} variant="outlined" size='small' placeholder="CVC" />}
                            </InputMask>
                        </div>
                        <div>
                            <div>Postal Code</div>
                            <TextField style={{ width: 155, marginTop: 8 }} variant="outlined" size='small' name="postalCode" placeholder="Postal Code" value={cardInfo.postalCode} onChange={handleChangeCardInfo} />
                        </div>
                    </div>
                </div> */}
