import React, { useState } from 'react'
import { Grid, makeStyles, FormControl, TextField, Button } from '@material-ui/core';
import LoginRightContainer from '../components/LoginRightContainer/LoginRightContainer';
import '../styles/login.css'
import LoginCard from '../components/LoginCard/LoginCard';
import { withRouter } from 'react-router-dom';
import SignUpSvg from '../components/LoginRightContainer/SignUpSvg';
import { WarningRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        marginBottom: 14,
        borderRadius: "5px",
        "& .MuiSelect-select": {
            '&:focus': {
                backgroundColor: '#fff',
            }
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #000"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf",
        },
    },

}))

const SignUp = (props) => {
    const classes = useStyles();
    const [formFields, setFormField] = useState({
        email: '',
        phone: ''
    })
    const [invalidWarning, setWarning] = useState(false)
    const [invalidWarningPhone, setWarningPhone] = useState(false)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const rePhone = /^[0-9]*$/
    const validateEmail = () => {
        if (!re.test(formFields.email.toLowerCase())) {
            setWarning(true)
        } else {
            setWarning(false)
        }

        if (formFields.phone.length !== 10) {
            setWarningPhone(true)
        } else {
            setWarningPhone(false)
        }

        if (re.test(formFields.email.toLowerCase()) && formFields.phone.length === 10) {
            props.history.push('/setting-up')
        }


    }
    return (
        <div className='login-body'>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={7} md={8}>
                    <LoginCard>
                        <div className='login-form'>
                            <div className='login-form-type'>Sign Up</div>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <div className='login-field-title'>FIRST NAME</div>
                                    <FormControl variant="outlined" fullWidth classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <TextField
                                            id="notes"
                                            variant="outlined"
                                            fullWidth
                                            name="notes"
                                            placeholder="First Name"
                                            // value={props.notes}
                                            // onChange={props.handleOnChange}
                                            size='small'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div className='login-field-title'>LAST NAME</div>
                                    <FormControl variant="outlined" fullWidth classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <TextField
                                            id="notes"
                                            variant="outlined"
                                            fullWidth
                                            name="notes"
                                            placeholder="Last Name"
                                            // value={props.notes}
                                            // onChange={props.handleOnChange}
                                            size='small'
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <div className='login-field-title'>EMAIL</div>
                            <FormControl variant="outlined" fullWidth classes={{
                                root: classes.quantityRoot
                            }}>
                                <TextField
                                    id="notes"
                                    variant="outlined"
                                    fullWidth
                                    name="email"
                                    value={formFields.email}
                                    onChange={(e) => setFormField({
                                        ...formFields, [e.target.name]: e.target.value
                                    })}
                                    placeholder="email@example.com"
                                    size='small'
                                    InputProps={{
                                        endAdornment:
                                            invalidWarning ?
                                                <div className='login-field-warning'>
                                                    <WarningRounded style={{ marginRight: 6 }} />
                                                    <div>Invalid Email</div>
                                                </div> : ''
                                    }}
                                />
                            </FormControl>
                            <div className='login-field-title'>PASSWORD</div>
                            <FormControl variant="outlined" fullWidth classes={{
                                root: classes.quantityRoot
                            }}>
                                <TextField
                                    id="notes"
                                    variant="outlined"
                                    fullWidth
                                    name="notes"
                                    type='password'
                                    placeholder="Password"
                                    // value={props.notes}
                                    // onChange={props.handleOnChange}
                                    size='small'
                                />
                            </FormControl>
                            <div className='login-field-title'>MOBILE NUMBER</div>
                            <FormControl variant="outlined" fullWidth classes={{
                                root: classes.quantityRoot
                            }}>
                                <TextField
                                    id="notes"
                                    variant="outlined"
                                    fullWidth
                                    name="phone"
                                    value={formFields.phone}
                                    placeholder="(999) 999-9999"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        if (rePhone.test(e.target.value)) {
                                            setFormField({
                                                ...formFields, [e.target.name]: e.target.value
                                            })
                                        }
                                    }}
                                    size='small'
                                    InputProps={{
                                        endAdornment:
                                            invalidWarningPhone ?
                                                <div style={{ width: '120%' }} className='login-field-warning'>
                                                    <WarningRounded style={{ marginRight: 6 }} />
                                                    <div>Invalid Mobile Number</div>
                                                </div> : ''
                                    }}
                                />
                            </FormControl>
                            <Button onClick={validateEmail} style={{ margin: '0.5rem 0 2rem', backgroundColor: '#4BCA81', color: '#fff' }} variant="contained" fullWidth>
                                Sign Up
                            </Button>
                            <div className='terms-policy-text'>
                                By creating an account you agree to HomeDash's <span className='tos'>Terms of Service</span> and <span className='tos'>Privacy Policy.</span>
                            </div>
                            <div style={{ marginBottom: 30 }} onClick={() => props.history.push('/login')} className='login-forgot-pass'>
                                Have an account? Log In
                            </div>
                        </div>
                    </LoginCard>
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                    <LoginRightContainer
                        icon={<SignUpSvg />}
                        text='An all-in-one app for home service providers to easily manage online bookings, organize daily schedules, and keep track of clients and finances'
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default withRouter(SignUp);