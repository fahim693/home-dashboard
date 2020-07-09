import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './invoice.css'
import { FormControlLabel, Checkbox, Typography, Select, FormControl, MenuItem, Chip } from '@material-ui/core';
import { items, services } from '../../data/InvoiceData'
import { MdRemoveCircle } from 'react-icons/md';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    quantityRoot: {
        marginTop: 6,
        // minWidth: 210,
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
});

export default function Invoice() {
    const classes = useStyles();
    const [newField, showNewField] = useState(false)

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow className='inv-tbl-cust hst-tbl-header '>
                        <TableCell></TableCell>
                        <TableCell className="tbl-head-cell" align="center">Quantity</TableCell>
                        <TableCell className="tbl-head-cell" align="right">Price</TableCell>
                        <TableCell className="tbl-head-cell" align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <p className='table-title'>Services</p>
                    {services.data.map((row, idx) => (
                        <TableRow className='inv-tbl-cust' key={idx}>
                            <TableCell>
                                <div className="tbl-desc">{row.desc_name}</div>
                                <div className="tbl-subdesc">{row.subdesc}</div>
                            </TableCell>
                            <TableCell className="tbl-body-cell" align="center">{row.qty}</TableCell>
                            <TableCell className="tbl-body-cell" align="right">${row.price}</TableCell>
                            <TableCell className="tbl-body-cell" align="right">${row.amount}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow className='inv-tbl-cust'>
                        <TableCell>
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
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <p className='table-title'>Items</p>
                    {items.data.map((row, idx) => (
                        <TableRow className='inv-tbl-cust' key={idx}>
                            <TableCell>
                                <div className="tbl-desc">{row.desc_name}</div>
                                <div className="tbl-subdesc">{row.subdesc}</div>
                            </TableCell>
                            <TableCell className="tbl-body-cell" align="center">{row.qty}</TableCell>
                            <TableCell className="tbl-body-cell" align="right">${row.price}</TableCell>
                            <TableCell className="tbl-body-cell" align="right">${row.amount}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow style={{ borderBottom: '1px solid #E0E0E0' }} className='inv-tbl'>
                        <TableCell style={{ paddingBottom: 18 }}>
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
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl-cust'>
                        <TableCell></TableCell>
                        <TableCell style={{ paddingLeft: 130, paddingRight: 0 }} className="tbl-head-cell">Subtotal:</TableCell>
                        <TableCell></TableCell>
                        <TableCell className="tbl-body-cell" align="right">$201.00</TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl-cust'>
                        <TableCell></TableCell>
                        <TableCell style={{ paddingLeft: 130, paddingRight: 0 }} className="tbl-head-cell">Tax:</TableCell>
                        <TableCell></TableCell>
                        <TableCell className="tbl-body-cell" align="right">$7.00</TableCell>
                    </TableRow>
                    <TableRow className='inv-tbl-cust'>
                        <TableCell></TableCell>
                        <TableCell style={{ paddingLeft: 130, paddingRight: 0 }} className="tbl-head-cell">
                            <FormControl variant="outlined" fullWidth margin="dense" classes={{
                                root: classes.quantityRoot
                            }}>
                                <Select
                                    id="tax"
                                    defaultValue={1}
                                    MenuProps={{
                                        getContentAnchorEl: null,
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }
                                    }}
                                >

                                    <MenuItem value={1}>IL (3.6%)</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell style={{ color: '#828282' }} className="tbl-body-cell" align="right">$7.00</TableCell>
                    </TableRow>
                    {
                        newField ?
                            <TableRow className='inv-tbl-cust'>
                                <TableCell></TableCell>
                                <TableCell align='left' style={{ display: 'flex', alignItems: 'center', paddingLeft: 105, paddingRight: 0 }} className="tbl-head-cell">
                                    <MdRemoveCircle onClick={() => showNewField(false)} style={{ marginRight: 6 }} className='apt-edit-icon' />
                                    <FormControl variant="outlined" fullWidth margin="dense" classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <Select
                                            id="tax"
                                            defaultValue={1}
                                            MenuProps={{
                                                getContentAnchorEl: null,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left",
                                                }
                                            }}
                                        >

                                            <MenuItem value={1}>IL (3.6%)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell style={{ color: '#828282' }} className="tbl-body-cell" align="right">$7.00</TableCell>
                            </TableRow> : ''
                    }
                    <TableRow className='inv-tbl-cust'>
                        <TableCell></TableCell>
                        <TableCell style={{ paddingLeft: 130, paddingRight: 0 }} className="tbl-head-cell">
                            <div onClick={() => showNewField(true)} className="chips-edit-inv">
                                <Chip className="chip-edit" label="+ ADD TAX" />
                            </div>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <br />
                    <TableRow className='inv-tbl-cust inv-tbl-total'>
                        <TableCell></TableCell>
                        <TableCell align="right" className="hst-tbl-header tbl-head-cell">Total:</TableCell>
                        <TableCell></TableCell>
                        <TableCell className="hst-tbl-header tbl-head-cell" align="right">$208.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
