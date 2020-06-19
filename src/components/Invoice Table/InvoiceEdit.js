import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './invoice-edit.css'
import { FormControlLabel, Checkbox, FormControl, Select, MenuItem, TextField, Chip, Typography } from '@material-ui/core';
import { MdRemoveCircle } from 'react-icons/md';
import { items, services } from '../../data/InvoiceData'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    formControl: {
        marginTop: 6,
        minWidth: 210,
    },
    formControlSecondary: {
        width: 110,
    },
    quantityRoot: {
        marginTop: 6,
        minWidth: 210,
        // width: '100%',
        color: "#000",
        backgroundColor: "#fff",
        // opacity: 0.6,
        borderRadius: "5px",
        "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #000"
        },
        "& .MuiSelect-select": {
            '&:focus': {
                backgroundColor: '#fff'
            }
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf",
            // backgroundColor: "#fff"
        },
    },
    quantityRoot2: {
        width: 110,
        // width: '100%',
        color: "#000",
        backgroundColor: "#fff",
        // opacity: 0.6,
        borderRadius: "5px",
        "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #000"
        },
        ".MuiSelect-select": {
            '&:focus': {
                backgroundColor: '#fff'
            }
        },
        ".MuiOutlinedInput-notchedOutline": {
            color: '#000',
            backgroundColor: "#fff"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf",
            // backgroundColor: "#fff"
        },
    }
});


export default function Invoice() {
    const classes = useStyles();

    return (
        <TableContainer >
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow className='inv-tbl hst-tbl-header '>
                        <TableCell></TableCell>
                        <TableCell className="tbl-head-cell" align="center">Quantity</TableCell>
                        <TableCell className="tbl-head-cell" align="center">Price</TableCell>
                        <TableCell className="tbl-head-cell" align="center">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <p className='table-title'>Services</p>
                    {services.data.map((row, idx) => (
                        <TableRow className='inv-tbl' key={idx}>
                            <TableCell>
                                <div className="edit-field">
                                    <div style={{ marginTop: 10 }}>
                                        <MdRemoveCircle className="apt-edit-icon" />
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" classes={{
                                            root: classes.quantityRoot
                                        }}>
                                            <Select
                                                id="city"
                                                // value={age}
                                                // onChange={handleChange}
                                                MenuProps={{
                                                    getContentAnchorEl: null,
                                                    anchorOrigin: {
                                                        vertical: "bottom",
                                                        horizontal: "left",
                                                    }
                                                }}
                                                defaultValue={1}
                                            >
                                                <MenuItem value={1}>Technician</MenuItem>
                                                <MenuItem value={2}>Scientist</MenuItem>
                                                <MenuItem value={3}>Engineer</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl variant="outlined" classes={{
                                            root: classes.quantityRoot
                                        }}>
                                            <TextField
                                                variant="outlined"
                                                value={row.subdesc}
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl variant="outlined" classes={{
                                    root: classes.quantityRoot2
                                }}>
                                    <TextField
                                        variant="outlined"
                                        value={row.qty}
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl variant="outlined" classes={{
                                    root: classes.quantityRoot2
                                }}>
                                    <TextField
                                        variant="outlined"
                                        value={row.price}

                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl variant="outlined" classes={{
                                    root: classes.quantityRoot2
                                }}>
                                    <TextField
                                        variant="outlined"
                                        value={row.amount}
                                    />
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow className='inv-tbl'>
                        <TableCell>
                            <div className="chips-edit-inv">
                                <Chip className="chip-edit" label="+ Add Service" />
                            </div>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
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
                                label={<Typography className="tbl-tax-label">Tax Applicable</Typography>}
                            />
                        </TableCell>
                    </TableRow>
                    <br />
                    <br />
                    <p className='table-title'>Items</p>
                    {items.data.map((row, idx) => (
                        <TableRow className='inv-tbl' key={idx}>
                            <TableCell>
                                <div className="edit-field">
                                    <div style={{ marginTop: 10 }}>
                                        <MdRemoveCircle className="apt-edit-icon" />
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" classes={{
                                            root: classes.quantityRoot
                                        }}>
                                            <Select
                                                id="city"
                                                defaultValue={1}
                                                MenuProps={{
                                                    getContentAnchorEl: null,
                                                    anchorOrigin: {
                                                        vertical: "bottom",
                                                        horizontal: "left",
                                                    }
                                                }}
                                            // value={age}
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value={1}>Wipes</MenuItem>
                                                <MenuItem value={2}>Wipes</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl variant="outlined" classes={{
                                            root: classes.quantityRoot
                                        }}>
                                            <TextField
                                                variant="outlined"
                                                value={row.subdesc}
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl variant="outlined" classes={{
                                    root: classes.quantityRoot2
                                }}>
                                    <TextField
                                        value={row.qty}
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl variant="outlined" classes={{
                                    root: classes.quantityRoot2
                                }}>
                                    <TextField
                                        value={row.price}
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl variant="outlined" classes={{
                                    root: classes.quantityRoot2
                                }}>
                                    <TextField
                                        value={row.amount}
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow className='inv-tbl'>
                        <TableCell >
                            <div className="chips-edit-inv">
                                <Chip className="chip-edit" label="+ Add Service" />
                            </div>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={true}
                                        // onChange={handleChange}
                                        name="checked"
                                        // color="primary"
                                        className='checkbox'
                                    />
                                }
                                label={<Typography className="tbl-tax-label">Tax Applicable</Typography>}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl'>
                        <TableCell></TableCell>
                        <TableCell className="tbl-head-cell" align="center"><strong>Subtotal</strong></TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell className="tbl-body-cell" align="center">$201</TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl'>
                        <TableCell></TableCell>
                        <TableCell className="tbl-head-cell" align="center"><strong>Tax</strong></TableCell>
                        <TableCell></TableCell>
                        <TableCell className="tbl-body-cell" align="center">$7</TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl inv-tbl-total'>
                        <TableCell></TableCell>
                        <TableCell className="hst-tbl-header tbl-head-cell" align="center"><strong>Total</strong></TableCell>
                        <TableCell></TableCell>
                        <TableCell className="hst-tbl-header tbl-head-cell" align="center"><strong>$208</strong></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
