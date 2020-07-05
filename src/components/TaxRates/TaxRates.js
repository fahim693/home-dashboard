import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { taxRateData } from '../../data/TaxRateData'
import Card from '../Card/Card'
import { FunctionsRounded } from '@material-ui/icons';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function TaxRates() {
    const classes = useStyles();
    const [value, setValue] = React.useState(taxRateData[0].default);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Card
            title="Tax Rates"
            icon={<FunctionsRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead >
                        <TableRow className="hst-tbl hst-tbl-header">
                            <TableCell className="tbl-head-cell">Name</TableCell>
                            <TableCell className="tbl-head-cell">Description</TableCell>
                            <TableCell className="tbl-head-cell">Rate</TableCell>
                            <TableCell className="tbl-head-cell">Default</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taxRateData.map((row) => (
                            <TableRow className="hst-tbl" key={row.name}>
                                <TableCell className="hst-body-cell" component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell className="hst-body-cell">{row.description}</TableCell>
                                <TableCell className="hst-body-cell">{row.rate}</TableCell>
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
        </Card>
    );
}
