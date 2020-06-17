import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './invoice.css'
import { FormControlLabel, Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
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
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <p className='table-title'>Services</p>
                    {services.map((row) => (
                        <TableRow className='inv-tbl' key={row.desc}>
                            <TableCell>
                                {row.desc}
                                <div className="subtitle-dark">{row.subdesc}</div>
                            </TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">${row.price}</TableCell>
                            <TableCell align="right">${row.amount}</TableCell>
                        </TableRow>
                    ))}
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={state.checkedB}
                                // onChange={handleChange}
                                name="checked"
                                className='checkbox'

                            />
                        }
                        label="Tax Applicable"
                    />
                    <br />
                    <br />
                    <p className='table-title'>Items</p>
                    {items.map((row) => (
                        <TableRow className='inv-tbl' key={row.desc}>
                            <TableCell>
                                {row.desc}
                                <div className="subtitle-dark">{row.subdesc}</div>
                            </TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">${row.price}</TableCell>
                            <TableCell align="right">${row.amount}</TableCell>
                        </TableRow>
                    ))}
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={state.checkedB}
                                // onChange={handleChange}
                                className='checkbox'
                                color="primary"
                            />
                        }
                        label="Tax Applicable"
                    />
                    <TableRow className='inv-tbl'>
                        <TableCell></TableCell>
                        <TableCell align="right"><strong>Subtotal</strong></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">$201</TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl'>
                        <TableCell></TableCell>
                        <TableCell align="right"><strong>Tax</strong></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right">$7</TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl inv-tbl-total'>
                        <TableCell></TableCell>
                        <TableCell className="hst-tbl-header" align="right"><strong>Total</strong></TableCell>
                        <TableCell></TableCell>
                        <TableCell className="hst-tbl-header" align="right"><strong>$208</strong></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
