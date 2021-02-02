import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Button, FormControl, TextField } from '@material-ui/core';
import InputMask from 'react-input-mask';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        "& .MuiSelect-select": {
            '&:focus': {
                backgroundColor: '#fff',
            }
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #EB5758"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #000"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #EB5758",
            // backgroundColor: "#fff"
        },
    }
}));

export default function UpdateCardModal(props) {
    const classes = useStyles();
    const [invalidWarning, setInvalidWarning] = useState(false)
    const [cardInfo, setCardInfo] = useState({
        name: '',
        number: '',
        cvc: '',
        postalCode: '',
        expDate: ''
    })

    const handleChangeCardInfo = (e) => {
        if (e.target.name === 'name' && e.target.value === ' ') {
            setInvalidWarning(true)
        } else {
            setInvalidWarning(false)
        }
        setCardInfo({
            ...cardInfo,
            [e.target.name]: e.target.value
        })
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
                            style={{ border: '2px solid #2A95C5', color: '#2A95C5', marginRight: 16 }}>Cancel</Button>
                        <Button variant='contained'
                            onClick={() => props.setOpen(false)}
                            style={{ backgroundColor: '#2A95C5', color: '#fff' }}>Update card</Button>
                    </div>
                    <div style={{ height: 440, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ textAlign: 'left', width: 377 }}>
                            <div style={{ fontSize: 28, fontWeight: 500, marginBottom: 34, }}>Credit Card Information</div>
                        </div>
                        <div style={{ fontWeight: 500, fontSize: 20, color: '#333' }}>
                            <div>Name on card<span style={{ color: '#EB5758' }}>*</span></div>
                            <FormControl classes={{
                                root: invalidWarning ? classes.textInput : null
                            }}>
                                <TextField
                                    style={{ width: 380, marginTop: 8 }}
                                    variant="outlined"
                                    size='small'
                                    name="name"
                                    placeholder="Name on Card"
                                    value={cardInfo.name}
                                    onChange={handleChangeCardInfo}
                                    InputProps={{
                                        endAdornment:
                                            invalidWarning ?
                                                <div className='login-field-warning'>
                                                    <svg style={{ marginRight: 6 }} width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.72992 19H20.2599C21.0299 19 21.5099 18.17 21.1299 17.5L11.8599 1.5C11.4699 0.829998 10.5099 0.829998 10.1299 1.5L0.859922 17.5C0.479922 18.17 0.959922 19 1.72992 19ZM11.9999 16H9.99992V14H11.9999V16ZM10.9999 12C10.4499 12 9.99992 11.55 9.99992 11V9C9.99992 8.45 10.4499 8 10.9999 8C11.5499 8 11.9999 8.45 11.9999 9V11C11.9999 11.55 11.5499 12 10.9999 12Z" fill="#EB5757" />
                                                    </svg>
                                                    <div>Invalid Email</div>
                                                </div> : ''
                                    }}
                                />
                            </FormControl>
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