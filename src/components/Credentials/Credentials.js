import React, { useState } from 'react'
import Card from '../Card/Card'
import { LockRounded, CachedRounded } from '@material-ui/icons'
import { makeStyles, Typography, TextField, FormControl, Button } from '@material-ui/core';
import Modal from '../Modal/Modal'
const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        minWidth: 195,
        marginBottom: 10,
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
    }
}));

const Credentials = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    return (
        <Card
            title="Credentials"
            icon={<LockRounded className="main-title-icon" />}
            cardType={1}
        >
            <div style={{ padding: '17px 25px 22px 25px' }}>
                <Typography className="title-heads" variant="body2" component="p">
                    Email
                        </Typography>
                <FormControl variant="outlined" fullWidth classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="street-address"
                        variant="outlined"
                        placeholder="Enter Email ID"
                        // value={fieldValue.street_address}
                        defaultValue={props.data.email}
                        name='street_address'
                        // value="Permanent Address"
                        // onChange={handleOnChange}
                        fullWidth
                        margin='dense'
                    />
                </FormControl>
                <Typography className="title-heads" variant="body2" component="p">
                    Password
                        </Typography>
                <FormControl variant="outlined" fullWidth classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="street-address"
                        variant="outlined"
                        placeholder="Enter Password"
                        type='password'
                        // value={fieldValue.street_address}
                        defaultValue={props.data.password}
                        name='street_address'
                        // value="Permanent Address"
                        // onChange={handleOnChange}
                        fullWidth
                        margin='dense'
                    />
                </FormControl>
                {
                    props.isEdit ?
                        <Button onClick={()=>setOpen(true)} variant='outlined' style={{
                            border: '1px solid #bfbfbf',
                            margin: '8px 0',
                            color: '#2A95C5'
                        }}>
                            <CachedRounded style={{ fontSize: 20, marginRight: 5 }} />
                            <span>RESET PASSWORD</span>
                        </Button> : ''
                }
            </div>
            <Modal
                open={open}
                handleModal={() => {
                    setOpen(false)
                }}
                isPasswordReset={true}
                modalText= 'Employee password has been reset successfully'
            />
        </Card >
    )
}

export default Credentials;