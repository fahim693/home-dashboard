import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '../Card/Card'
import { FunctionsRounded, RemoveCircleRounded } from '@material-ui/icons';
import { RadioGroup, FormControlLabel, Radio, FormControl, TextField, Chip } from '@material-ui/core';
import './tax-rates.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    table: {
        minWidth: 650,
    },
    quantityRoot: {
        color: "#000",
        backgroundColor: "#fff",
        minWidth: 120,
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

export default function TaxRates(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.data[0].default);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Card
            title="Tax Rates"
            icon={<FunctionsRounded className="main-title-icon" />}
            cardType={1}
        >
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <colgroup>
                        <col style={{ width: '1%' }} />
                        <col style={{ width: '38%' }} />
                        <col style={{ width: '41%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '5%' }} />
                    </colgroup>
                    <TableHead >
                        <TableRow className="tax-tbl hst-tbl-header">
                            <TableCell className="tbl-head-cell"></TableCell>
                            <TableCell className="tbl-head-cell">Name</TableCell>
                            <TableCell className="tbl-head-cell">Description</TableCell>
                            <TableCell className="tbl-head-cell">Rate</TableCell>
                            <TableCell className="tbl-head-cell">Default</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row) => (
                            <TableRow className="tax-tbl" key={row.name}>
                                <TableCell>
                                    <RemoveCircleRounded style={{ fontSize: 21, cursor: 'pointer', color: '#E24E3C' }} />
                                </TableCell>
                                <TableCell className="hst-body-cell" component="th" scope="row">
                                    <FormControl variant="outlined" fullWidth classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <TextField
                                            id="street-address"
                                            variant="outlined"
                                            placeholder="Enter Tax Name"
                                            // value={fieldValue.street_address}
                                            defaultValue={row.name}
                                            name='street_address'
                                            // value="Permanent Address"
                                            // onChange={handleOnChange}
                                            fullWidth
                                            margin='dense'
                                        />
                                    </FormControl>
                                </TableCell>
                                <TableCell className="hst-body-cell">
                                    <FormControl variant="outlined" fullWidth classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <TextField
                                            id="street-address"
                                            variant="outlined"
                                            placeholder="Enter Description"
                                            // value={fieldValue.street_address}
                                            defaultValue={row.description}
                                            name='street_address'
                                            // value="Permanent Address"
                                            // onChange={handleOnChange}
                                            fullWidth
                                            margin='dense'
                                        />
                                    </FormControl>
                                </TableCell>
                                <TableCell className="hst-body-cell">
                                    <FormControl variant="outlined" fullWidth classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <TextField
                                            id="street-address"
                                            variant="outlined"
                                            placeholder="Enter Tax Rate"
                                            // value={fieldValue.street_address}
                                            defaultValue={row.rate}
                                            inputProps={{ style: { textAlign: 'right' } }}
                                            name='street_address'
                                            // value="Permanent Address"
                                            // onChange={handleOnChange}
                                            fullWidth
                                            margin='dense'
                                        />
                                    </FormControl>
                                </TableCell>
                                <TableCell className="hst-body-cell">
                                    <RadioGroup aria-label="tax-rate" value={value} name="tax" onChange={handleChange}>
                                        <FormControlLabel value={row.default} style={{ marginLeft: 11 }} control={<Radio />} />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ margin: "1.2rem 0", marginLeft: 28 }} className="chips-edit">
                <Chip className="chip-edit" label="+ ADD TAX RATE" />
            </div>
        </Card>
    );
}
