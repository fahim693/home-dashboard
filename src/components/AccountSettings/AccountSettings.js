import React, { useState } from 'react'
import { SettingsRounded } from '@material-ui/icons';
import { TextField, FormControl, Typography, makeStyles, Button } from '@material-ui/core';
import Card from '../Card/Card'
import { MdCheck } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        color: "#000",
        backgroundColor: "#fff",
        marginBottom: 16,
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
            // backgroundColor: "#fff"
        },
    }
}));

const checkemail ='johndoe@gmail.com'

const AccountSettings = (props) => {
    const classes = useStyles();
    const [email,setEmail] = useState('johndoe@gmail.com');

    const handleOnSave =()=>{
        if(email !== checkemail){
            props.handleSave(0)
        } else{
            props.handleSave(1)
        }
    }
    return (
        <Card
            title='Account Settings'
            icon={<SettingsRounded className='main-title-icon'/>}
            cardType={3}
            handleClose={props.handleClose}
        >
            <div style={{
                borderBottom: '2px solid #E0E0E0',
                padding: '1.6rem 2rem'
            }}>
                <Typography className="title-heads" variant="body2" component="p">
                    Email
                 </Typography>
                <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="amount"
                        variant="outlined"
                        placeholder="Enter Email"
                        value={email}
                        name='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        fullWidth
                        margin='dense'
                    />
                </FormControl>
                <Typography className="title-heads" variant="body2" component="p">
                    Current Password
                 </Typography>
                <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="amount"
                        variant="outlined"
                        // value={fieldValue.street_address}
                        defaultValue={props.data.description}
                        name='email'
                        // onChange={handleOnChange}
                        type='password'
                        fullWidth
                        margin='dense'
                    />
                </FormControl>
                <Typography className="title-heads" variant="body2" component="p">
                    New Password
                 </Typography>
                <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="amount"
                        variant="outlined"
                        // value={fieldValue.street_address}
                        defaultValue={props.data.description}
                        name='email'
                        // onChange={handleOnChange}
                        type='password'
                        fullWidth
                        margin='dense'
                    />
                </FormControl>
                <Typography className="title-heads" variant="body2" component="p">
                    Confirm Password
                 </Typography>
                <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="amount"
                        variant="outlined"
                        // value={fieldValue.street_address}
                        defaultValue={props.data.description}
                        name='email'
                        type='password'
                        // onChange={handleOnChange}
                        fullWidth
                        margin='dense'
                    />
                </FormControl>

            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '25px 0'
            }}>
                <Button onClick={handleOnSave} variant='contained' className="btn-save">
                    <MdCheck className='btn-icon' />
                                    SAVE
                </Button>
            </div>
        </Card>
    )

}

export default AccountSettings;