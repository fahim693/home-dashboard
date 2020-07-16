import React, { useState } from 'react';
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
import Autocomplete from '@material-ui/lab/Autocomplete';

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

const dataSearch = [
    {
        name: 'Technician',
        amount: '62.00'
    },
    {
        name: 'Technician',
        amount: '62.00'
    },
    {
        name: 'Technician',
        amount: '62.00'
    },
]

const dataSearchItem = [
    {
        name: 'Wipes',
        amount: '5.00'
    },
    {
        name: 'Wipes',
        amount: '5.00'
    },
    {
        name: 'Wipes',
        amount: '5.00'
    },
]


export default function Invoice(props) {
    const classes = useStyles();
    const [newField, showNewField] = useState(false)

    return (
        <TableContainer >
            <Table className={classes.table} aria-label="spanning table">
                <colgroup>
                    <col style={{ width: '40%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                </colgroup>
                <TableHead>
                    <TableRow className='inv-tbl hst-tbl-header '>
                        <TableCell></TableCell>
                        <TableCell className="tbl-head-cell" align="center">
                            <span style={{ marginLeft: -36 }}>Quantity</span>
                        </TableCell>
                        <TableCell className="tbl-head-cell" align="center">
                            <span style={{ marginLeft: -63 }}>Price</span>
                        </TableCell>
                        <TableCell className="tbl-head-cell" align="center">
                            <span style={{ marginLeft: -35 }}>Amount</span>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <p className='table-title'>Services</p>
                    {props.services.data.map((row, idx) => (
                        <TableRow className='inv-tbl' key={idx}>
                            <TableCell >
                                <div className="edit-field">
                                    <div style={{ marginTop: 16 }}>
                                        <MdRemoveCircle className={props.type === 1 ? 'inv-add-icon' : 'apt-edit-icon'} />
                                    </div>
                                    <div>
                                        <Autocomplete
                                            id="free-solo-demo"
                                            freeSolo
                                            disableClearable={true}
                                            defaultValue={
                                                props.type === 1 ?
                                                    '' :
                                                    dataSearch.find(data => data.name === 'Technician')}
                                            options={dataSearch}
                                            getOptionLabel={(option) => option.name}
                                            renderOption={(option, idx) => (
                                                <div className='inv-edit-search-items' style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    height: 36,
                                                    width: '100%',
                                                }}
                                                // onClick={() => handleData(option)}
                                                >
                                                    <div>{option.name}</div>
                                                    <div>${option.amount}</div>
                                                </div>
                                            )}
                                            renderInput={(params) => (
                                                <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                                    root: classes.quantityRoot2
                                                }}>
                                                    <TextField
                                                        {...params}
                                                        className='inv-edit-search'
                                                        placeholder="Search Service"
                                                        margin="dense"
                                                        variant="outlined"
                                                    />
                                                </FormControl>
                                            )}
                                        />
                                        <FormControl variant="outlined" fullWidth classes={{
                                            root: classes.quantityRoot
                                        }}>
                                            <TextField
                                                placeholder="Description (optional)"
                                                variant="outlined"
                                                // value={idx}
                                                defaultValue={row.subdesc}
                                                // onChange={handleOnChange}
                                                margin="dense"
                                                id={row.id}
                                                name={idx}
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
                                        style={{ marginTop: -37 }}
                                        variant="outlined"
                                        defaultValue={row.qty}
                                        margin="dense"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl variant="outlined" classes={{
                                    root: classes.quantityRoot2
                                }}>
                                    <TextField
                                        style={{ marginTop: -37 }}
                                        variant="outlined"
                                        placeholder="0.00"
                                        defaultValue={row.price}
                                        margin="dense"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl variant="outlined" classes={{
                                    root: classes.quantityRoot2
                                }}>
                                    <TextField
                                        style={{ marginTop: -37 }}
                                        variant="outlined"
                                        defaultValue={row.amount}
                                        margin="dense"
                                    />
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow className='inv-tbl'>
                        <TableCell>
                            <div className="chips-edit-inv">
                                <Chip className="chip-edit" label="+ ADD SERVICE" />
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
                    <p className='table-title'>Items</p>
                    {props.items.data.map((row, idx) => (
                        <TableRow className='inv-tbl' key={idx}>
                            <TableCell>
                                <div className="edit-field">
                                    <div style={{ marginTop: 16 }}>
                                        <MdRemoveCircle className={props.type === 1 ? 'inv-add-icon' : 'apt-edit-icon'} />
                                    </div>
                                    <div>
                                        <Autocomplete
                                            id="free-solo-demo"
                                            freeSolo
                                            disableClearable={true}
                                            defaultValue={
                                                props.type === 1 ?
                                                    '' : dataSearchItem.find(data => data.name === 'Wipes')
                                            }
                                            options={dataSearchItem}
                                            getOptionLabel={(option) => option.name}
                                            renderOption={(option, idx) => (
                                                <div className='inv-edit-search-items' style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    height: 36,
                                                    width: '100%',
                                                }}
                                                // onClick={() => handleData(option)}
                                                >
                                                    <div>{option.name}</div>
                                                    <div>${option.amount}</div>
                                                </div>
                                            )}
                                            renderInput={(params) => (
                                                <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                                    root: classes.quantityRoot2
                                                }}>
                                                    <TextField
                                                        {...params}
                                                        defaultValue='sdfsdf'
                                                        className='inv-edit-search'
                                                        placeholder="Search Item"
                                                        margin="dense"
                                                        variant="outlined"
                                                    />
                                                </FormControl>
                                            )}
                                        />
                                        <FormControl variant="outlined" fullWidth classes={{
                                            root: classes.quantityRoot
                                        }}>
                                            <TextField
                                                variant="outlined"
                                                placeholder="Description (optional)"
                                                defaultValue={row.subdesc}
                                                margin="dense"
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
                                        style={{ marginTop: -37 }}

                                        defaultValue={row.qty}
                                        variant="outlined"
                                        margin="dense"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl variant="outlined" classes={{
                                    root: classes.quantityRoot2
                                }}>
                                    <TextField
                                        style={{ marginTop: -37 }}

                                        defaultValue={row.price}
                                        placeholder="0.00"
                                        variant="outlined"
                                        margin="dense"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl variant="outlined" classes={{
                                    root: classes.quantityRoot2
                                }}>
                                    <TextField
                                        style={{ marginTop: -37 }}

                                        defaultValue={row.amount}
                                        variant="outlined"
                                        margin="dense"
                                    />
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow style={{ borderBottom: '1px solid #E0E0E0' }} className='inv-tbl'>
                        <TableCell style={{ paddingBottom: 35 }} >
                            <div className="chips-edit-inv">
                                <Chip className="chip-edit" label="+ ADD ITEM" />
                            </div>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell style={{ paddingBottom: 35 }}>
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
                        <TableCell className="tbl-head-cell" >
                            <div style={{ marginLeft: 23 }}>
                                <strong>Subtotal</strong>
                            </div>
                        </TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell className="tbl-body-cell" align="center">$201.00</TableCell>
                    </TableRow>

                    {
                        props.type === 1 ?
                            '' :
                            <React.Fragment>
                                <TableRow className='inv-tbl'>
                                    <TableCell></TableCell>
                                    <TableCell className="tbl-head-cell" align="left">
                                        <div style={{ marginLeft: 23 }}>
                                            <strong>Tax</strong>
                                        </div>
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell className="tbl-body-cell" align="center">
                                        <span style={{ marginRight: -19 }}>$7.00</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow className='inv-tbl-cust'>
                                    <TableCell></TableCell>
                                    <TableCell align='left' className="tbl-head-cell">
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
                                    <TableCell style={{ color: '#828282' }} className="tbl-body-cell" align="center">
                                        <span style={{ marginRight: -19 }}>$7.00</span>
                                    </TableCell>
                                </TableRow>
                                {
                                    newField ?
                                        <TableRow className='inv-tbl-cust'>
                                            <TableCell></TableCell>
                                            <TableCell align='left' style={{ display: 'flex', alignItems: 'center', paddingLeft: 0 }} className="tbl-head-cell">
                                                <MdRemoveCircle onClick={() => showNewField(false)} style={{ marginRight: 6 }} className={props.type === 1 ? 'inv-add-icon' : 'apt-edit-icon'} />
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
                                            <TableCell style={{ color: '#828282' }} className="tbl-body-cell" align="center">
                                                <span style={{ marginRight: -19 }}>$7.00</span>
                                            </TableCell>
                                        </TableRow> : ''
                                }

                                <TableRow className='inv-tbl-cust'>
                                    <TableCell></TableCell>
                                    <TableCell className="tbl-head-cell">
                                        <div onClick={() => showNewField(true)} className="chips-edit-inv">
                                            <Chip className="chip-edit" label="+ ADD TAX" />
                                        </div>
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <br />
                            </React.Fragment>
                    }

                    <TableRow className='inv-tbl inv-tbl-total'>
                        <TableCell></TableCell>
                        <TableCell align='left' className="hst-tbl-header tbl-head-cell">
                            <div style={{ marginLeft: 23 }}>
                                <strong>Total</strong>
                            </div>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell className="hst-tbl-header tbl-head-cell" align="center">
                            <span style={{ marginRight: 8 }}>
                                <strong>$208.00</strong>
                            </span>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
