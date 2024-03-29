import React from 'react'
import { Grid, makeStyles, FormControl, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import LoginRightContainer from '../components/LoginRightContainer/LoginRightContainer';
import LoginSvg from '../components/LoginRightContainer/LoginSvg';
import '../styles/login.css'
import LoginCard from '../components/LoginCard/LoginCard';
import { withRouter } from 'react-router-dom';

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

const Login = (props) => {
    const classes = useStyles();
    return (
        <div className='login-body'>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={7} md={8}>
                    <LoginCard>
                        <div className='login-form'>
                            <div className='login-form-type'>Log In</div>
                            <div className='login-field-title'>EMAIL</div>
                            <FormControl variant="outlined" fullWidth classes={{
                                root: classes.quantityRoot
                            }}>
                                <TextField
                                    id="notes"
                                    variant="outlined"
                                    fullWidth
                                    name="notes"
                                    // value={props.notes}
                                    // onChange={props.handleOnChange}
                                    size='small'
                                    placeholder="email@example.com"
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
                                    // value={props.notes}
                                    // onChange={props.handleOnChange}
                                    size='small'
                                    placeholder="Password"
                                />
                            </FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checked"
                                        color="primary"
                                        className='checkbox'
                                    />
                                }
                                label={<div style={{ marginTop: 9 }} className="login-field-title">REMEMBER ME</div>}
                            />
                            <Button style={{ margin: '1rem 0 2.5rem', backgroundColor: '#4BCA81', color: '#fff' }} variant="contained" fullWidth>
                                Log In
                            </Button>
                            <div className='login-forgot-pass'>
                                <span onClick={() => props.history.push('/forgot-password')} style={{ cursor: 'pointer' }}>Forgot your password?</span>
                            </div>
                            <div style={{ marginBottom: 30 }} className='login-forgot-pass'>
                                <span onClick={() => props.history.push('/signup')} style={{ cursor: 'pointer' }}>No account yet? Sign Up!</span>
                            </div>
                        </div>
                    </LoginCard>
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                    <LoginRightContainer
                        icon={<LoginSvg />}
                        text='An all-in-one app for home service providers to easily manage online bookings, organize daily schedules, and keep track of clients and finances'
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default withRouter(Login);