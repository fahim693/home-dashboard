import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './invoice.css'
import { FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import { items, services } from '../../data/InvoiceData'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Invoice() {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow className='inv-tbl hst-tbl-header '>
                        <TableCell></TableCell>
                        <TableCell className="tbl-head-cell" align="right">Quantity</TableCell>
                        <TableCell className="tbl-head-cell" align="right">Price</TableCell>
                        <TableCell className="tbl-head-cell" align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <p className='table-title'>Services</p>
                    {services.data.map((row, idx) => (
                        <TableRow className='inv-tbl' key={idx}>
                            <TableCell>
                                <div className="tbl-desc">{row.desc}</div>
                                <div className="tbl-subdesc">{row.subdesc}</div>
                            </TableCell>
                            <TableCell className="tbl-body-cell" align="right">{row.qty}</TableCell>
                            <TableCell className="tbl-body-cell" align="right">${row.price}</TableCell>
                            <TableCell className="tbl-body-cell" align="right">${row.amount}</TableCell>
                        </TableRow>
                    ))}
                    <div style={{ paddingLeft: '1.55rem' }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={services.tax}
                                    // onChange={handleChange}
                                    name="checked"
                                    className='checkbox'
                                />
                            }
                            label={<Typography className="tbl-tax-label">Tax Applicable</Typography>}
                        />
                    </div>
                    <br />
                    <br />
                    <p className='table-title'>Items</p>
                    {items.data.map((row, idx) => (
                        <TableRow className='inv-tbl' key={idx}>
                            <TableCell>
                                <div className="tbl-desc">{row.desc}</div>
                                <div className="tbl-subdesc">{row.subdesc}</div>
                            </TableCell>
                            <TableCell className="tbl-body-cell" align="right">{row.qty}</TableCell>
                            <TableCell className="tbl-body-cell" align="right">${row.price}</TableCell>
                            <TableCell className="tbl-body-cell" align="right">${row.amount}</TableCell>
                        </TableRow>
                    ))}
                    <div style={{ paddingLeft: '1.55rem' }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={items.tax}
                                    // onChange={handleChange}
                                    className='checkbox'
                                    color="primary"
                                />
                            }
                            label={<Typography className="tbl-tax-label">Tax Applicable</Typography>}
                        />
                    </div>
                    <TableRow className='inv-tbl'>
                        <TableCell></TableCell>
                        <TableCell align="right" className="tbl-head-cell">Subtotal:</TableCell>
                        <TableCell></TableCell>
                        <TableCell className="tbl-body-cell" align="right">$201</TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl'>
                        <TableCell></TableCell>
                        <TableCell align="right" className="tbl-head-cell">Tax:</TableCell>
                        <TableCell></TableCell>
                        <TableCell className="tbl-body-cell" align="right">$7</TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl inv-tbl-total'>
                        <TableCell></TableCell>
                        <TableCell align="right" className="hst-tbl-header tbl-head-cell">Total:</TableCell>
                        <TableCell></TableCell>
                        <TableCell className="hst-tbl-header tbl-head-cell" align="right">$208</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
