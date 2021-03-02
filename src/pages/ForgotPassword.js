import React, { useState } from 'react'
import { Grid, makeStyles, FormControl, TextField, Button } from '@material-ui/core';
import LoginCard from '../components/LoginCard/LoginCard';
import { withRouter } from 'react-router-dom';
import { WarningRounded } from '@material-ui/icons';
import '../styles/login.css'

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        marginBottom: 20,
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

const ForgotPassword = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [invalidWarning, setWarning] = useState(false)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validateEmail = () => {
        if (!re.test(email.toLowerCase())) {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }

    return (
        <div className='login-body'>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <LoginCard>
                        <div className='login-form'>
                            <div className='login-form-type'>Forgot your password?</div>
                            <div className='login-field-title'>EMAIL</div>
                            <FormControl variant="outlined" fullWidth classes={{
                                root: classes.quantityRoot
                            }}>
                                <TextField
                                    id="notes"
                                    variant="outlined"
                                    fullWidth
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                            <Button onClick={validateEmail} style={{ margin: '0.5rem 0 2.5rem', backgroundColor: '#4BCA81', color: '#fff' }} variant="contained" fullWidth>
                                Reset my password
                            </Button>
                            <div className='login-forgot-pass' >
                                <span onClick={() => props.history.push('/login')} style={{ cursor: 'pointer' }}>Log In</span>
                            </div>
                            <div style={{ marginBottom: 30 }} className='login-forgot-pass'>
                                <span onClick={() => props.history.push('/signup')} style={{ cursor: 'pointer' }}>No account yet? Sign Up!</span>
                            </div>
                        </div>
                    </LoginCard>
                </Grid>
            </Grid>
        </div>
    )
}

export default withRouter(ForgotPassword);