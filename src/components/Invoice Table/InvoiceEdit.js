import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './invoice-edit.css'
import { FormControlLabel, Checkbox, FormControl, Select, MenuItem, TextField, Chip } from '@material-ui/core';
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
});


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
                    {services.data.map((row, idx) => (
                        <TableRow className='inv-tbl' key={idx}>
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
                                                defaultValue={1}
                                            >
                                                <MenuItem value={1}>Technician</MenuItem>
                                                <MenuItem value={2}>Scientist</MenuItem>
                                                <MenuItem value={3}>Engineer</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <TextField
                                                variant="outlined"
                                                value={row.subdesc}
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
                                    <TextField
                                        variant="outlined"
                                        value={row.qty}
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
                                    <TextField
                                        variant="outlined"
                                        value={row.price}

                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
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
                                label="Tax Applicable"
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
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <Select
                                                id="city"
                                                defaultValue={1}

                                            // value={age}
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value={1}>Wipes</MenuItem>
                                                <MenuItem value={2}>Wipes</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <TextField
                                                variant="outlined"
                                                value={row.subdesc}
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
                                    <TextField
                                        value={row.qty}
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
                                    <TextField
                                        value={row.price}
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl variant="outlined" className={classes.formControlSecondary}>
                                    <TextField
                                        value={row.amount}
                                        variant="outlined"
                                    />
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow >
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
                                        // checked={true}
                                        // onChange={handleChange}
                                        name="checked"
                                        // color="primary"
                                        className='checkbox'
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
