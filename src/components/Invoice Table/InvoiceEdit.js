import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './invoice-edit.css'
import { FormControlLabel, Checkbox, Divider, FormControl, Select, MenuItem, TextField, Chip } from '@material-ui/core';
import { MdRemoveCircle } from 'react-icons/md';

const TAX_RATE = 0.07;

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
});

const services = [
    {
        desc: 'Technician',
        subdesc: 'Photobooth Techie',
        qty: 1,
        price: 62,
        amount: 62

    },
    {
        desc: 'Technician',
        subdesc: 'Photobooth Techie',
        qty: 1,
        price: 62,
        amount: 62

    },
    {
        desc: 'Technician',
        subdesc: 'Photobooth Techie',
        qty: 1,
        price: 62,
        amount: 62

    },
];

const items = [
    {
        desc: 'Wipes',
        subdesc: 'Description',
        qty: 1,
        price: 5,
        amount: 5

    },
    {
        desc: 'Wipes',
        subdesc: 'Description',
        qty: 1,
        price: 5,
        amount: 5

    },
    {
        desc: 'Wipes',
        subdesc: 'Description',
        qty: 1,
        price: 5,
        amount: 5

    },
];

export default function Invoice() {
    const classes = useStyles();

    return (
        <TableContainer >
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow className='inv-tbl hst-tbl-header '>
                        <TableCell></TableCell>
                        <TableCell align="left">Quantity</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <p className='table-title'>Services</p>
                    {services.map((row) => (
                        <TableRow className='inv-tbl' key={row.desc}>
                            <TableCell>
                                <div className="edit-field">
                                    <div style={{ marginTop: 10 }}>
                                        <MdRemoveCircle className="apt-edit-icon" />
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <Select
                                                id="city"
                                            // value={age}
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <TextField
                                                id="outlined-basic"
                                                variant="outlined"
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow className='inv-tbl'>
                        <TableCell>
                            <div style={{
                                margin: 0
                            }}>
                                <Chip style={{
                                    backgroundColor: "#2a95c5",
                                    color: '#fff'
                                }} label="+ Add Service" />
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
                                    />
                                }
                                label="Tax Applicable"
                            />
                        </TableCell>
                    </TableRow>
                    <br />
                    <br />
                    <p className='table-title'>Items</p>
                    {items.map((row) => (
                        <TableRow className='inv-tbl' key={row.desc}>
                            <TableCell>
                                <div className="edit-field">
                                    <div style={{ marginTop: 10 }}>
                                        <MdRemoveCircle className="apt-edit-icon" />
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <Select
                                                id="city"
                                            // value={age}
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <TextField
                                                id="outlined-basic"
                                                variant="outlined"
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow >
                        <TableCell>
                            <div style={{
                                margin: 0
                            }}>
                                <Chip style={{
                                    backgroundColor: "#2a95c5",
                                    color: '#fff'
                                }} label="+ Add Service" />
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
                                    />
                                }
                                label="Tax Applicable"
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl'>
                        <TableCell></TableCell>
                        <TableCell align="left"><strong>Subtotal</strong></TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left">$201</TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl'>
                        <TableCell></TableCell>
                        <TableCell align="left"><strong>Tax</strong></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="left">$7</TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl inv-tbl-total'>
                        <TableCell></TableCell>
                        <TableCell className="hst-tbl-header" align="left"><strong>Total</strong></TableCell>
                        <TableCell></TableCell>
                        <TableCell className="hst-tbl-header" align="left"><strong>$208</strong></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
