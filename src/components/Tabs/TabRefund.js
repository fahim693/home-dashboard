import React from 'react'
import { makeStyles, Typography, FormControl, TextField, Select, MenuItem, Button } from '@material-ui/core';
import Card from '../Card/Card'
import { SendRounded, ImportExportRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        color: "#000",
        backgroundColor: "#fff",
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

const TabRefund = (props) => {
    const classes = useStyles();
    return (
        <Card
            title="Refund"
            icon={<ImportExportRounded className="main-title-icon" />}
            cardType={3}
            handleClose={props.handleClose}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                background: '#F2F9FC',
                padding: '20px 0px',
                marginTop: 2,
                fontSize: 20,
            }}>
                <span style={{ fontWeight: 500 }}>Due Amount: </span>&nbsp;$208.00
        </div>
            <div style={{
                minHeight: 445,
                padding: '0 30px',
                borderBottom: '2px solid #E0E0E0',
                marginTop: 12
            }}>
                <Typography className="title-heads" variant="body2" component="p">
                    Email Receipt
                    </Typography>
                <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="email"
                        placeholder="Email"
                        variant="outlined"
                        // value={fieldValue.street_address}
                        name='email'
                        // onChange={handleOnChange}
                        fullWidth
                        margin='dense'
                    />
                </FormControl>
                <br />
                <Typography className="title-heads" variant="body2" component="p">
                    Amount
            </Typography>
                <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="amount"
                        variant="outlined"
                        placeholder="Amount"
                        // value={fieldValue.street_address}
                        name='ampunt'
                        // onChange={handleOnChange}
                        fullWidth
                        margin='dense'
                    />
                </FormControl>


                <Typography className="title-heads" variant="body2" component="p">
                    Payment Type
                </Typography>
                <FormControl variant="outlined" fullWidth margin="dense" classes={{
                    root: classes.quantityRoot
                }}>
                    <Select
                        id="payment"
                        // value={city}
                        defaultValue={1}
                        MenuProps={{
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left",
                            }
                        }}
                    // name="city"
                    // onChange={handleChange}
                    >
                        <MenuItem value={1} style={{ display: 'none' }}>Select Payment Type</MenuItem>
                        <MenuItem value={4}>Card</MenuItem>
                        <MenuItem value={2}>Cash</MenuItem>
                        <MenuItem value={3}>Bank Transfer</MenuItem>
                    </Select>
                </FormControl>
                <Typography className="title-heads" variant="body2" component="p">
                    Notes
                                    </Typography>
                <FormControl variant="outlined" fullWidth classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="email"
                        variant="outlined"
                        placeholder="Enter Notes"
                        multiline
                        rows={3}
                        rowsMax={4}
                        // value={fieldValue.street_address}
                        name='email'
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
                <Button variant='outlined' className='btn-primary' style={{
                    border: 0
                }}>
                    <ImportExportRounded style={{ fontSize: 20, marginRight: 5 }} />
                    <span>REFUND AMOUNT</span>
                </Button>
            </div>
        </Card>
    )
}

export default TabRefund;