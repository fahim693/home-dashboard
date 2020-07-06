import React from 'react'
import './service-item.css'
import { CameraAltRounded } from '@material-ui/icons';
import { TextField, FormControl, MenuItem, Select, Typography, makeStyles, Button, Switch } from '@material-ui/core';
import Card from '../Card/Card'
import { MdCheck } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        color: "#000",
        backgroundColor: "#fff",
        marginBottom: 6,
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

const NewService = (props) => {
    const classes = useStyles();

    return (
        <Card
            title={props.cardTitle}
            cardType={3}
            handleClose={props.handleClose}
        >
            <div className="modal-cover-img">
                <CameraAltRounded style={{ color: '#fff', fontSize: 30 }} />
            </div>
            <div style={{
                borderBottom: '2px solid #E0E0E0',
                padding: '0.7rem 2rem 0'
            }}>
                {
                    props.modalType === 'service' ?
                        <Typography className="title-heads" variant="body2" component="p">
                            Service Name
                        </Typography> :
                        <Typography className="title-heads" variant="body2" component="p">
                            Item Name
                        </Typography>
                }

                <FormControl variant="outlined" fullWidth margin="dense" classes={{
                    root: classes.quantityRoot
                }}>
                    <Select
                        id="payment"
                        defaultValue={1}
                        MenuProps={{
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left",
                            }
                        }}
                    >
                        <MenuItem value={1} style={{ display: 'none' }}>Select Service Name</MenuItem>
                        <MenuItem value={4}>Card</MenuItem>
                        <MenuItem value={2}>Cash</MenuItem>
                        <MenuItem value={3}>Bank Transfer</MenuItem>
                    </Select>
                </FormControl>
                <Typography className="title-heads" variant="body2" component="p">
                    Description
                </Typography>
                <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="amount"
                        variant="outlined"
                        placeholder="Enter Description"
                        // value={fieldValue.street_address}
                        name='amount'
                        // onChange={handleOnChange}
                        fullWidth
                        margin='dense'
                    />
                </FormControl>
                <Typography className="title-heads" variant="body2" component="p">
                    Category
                </Typography>
                <FormControl variant="outlined" fullWidth margin="dense" classes={{
                    root: classes.quantityRoot
                }}>
                    <Select
                        id="payment"
                        defaultValue={1}
                        MenuProps={{
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left",
                            }
                        }}
                    >
                        <MenuItem value={1} style={{ display: 'none' }}>Select Category</MenuItem>
                        <MenuItem value={4}>Card</MenuItem>
                        <MenuItem value={2}>Cash</MenuItem>
                        <MenuItem value={3}>Bank Transfer</MenuItem>
                    </Select>
                </FormControl>
                <div className="flex-container">
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Price
                </Typography>
                        <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="amount"
                                variant="outlined"
                                placeholder="Enter Description"
                                // value={fieldValue.street_address}
                                name='ampunt'
                                // onChange={handleOnChange}
                                fullWidth
                                margin='dense'
                            />
                        </FormControl>
                    </div>
                    <div>
                        <Typography className="title-heads" variant="body2" component="p">
                            Unit
                        </Typography>
                        <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                id="amount"
                                variant="outlined"
                                placeholder="Enter Description"
                                // value={fieldValue.street_address}
                                name='ampunt'
                                // onChange={handleOnChange}
                                fullWidth
                                margin='dense'
                            />
                        </FormControl>
                    </div>
                </div>
                <div className="flex-container">
                    <Typography className="title-heads" variant="body2" component="p">
                        Available on Booking App
                    </Typography>
                    <FormControl variant="outlined" classes={{
                        root: classes.quantityRoot
                    }}>
                        <Switch
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </FormControl>
                </div>
                <div className="flex-container">
                    <Typography className="title-heads" variant="body2" component="p">
                        Taxable
                    </Typography>
                    <FormControl variant="outlined" classes={{
                        root: classes.quantityRoot
                    }}>
                        <Switch
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </FormControl>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '25px 0'
            }}>
                <Button variant='contained' className="btn-save">
                    <MdCheck className='btn-icon' />
                                    SAVE
                </Button>
            </div>
        </Card>
    )

}

export default NewService;