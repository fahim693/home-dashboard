import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './appointment-history.css'
import { rows } from '../../data/AppointmentHistoryData'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function AppointmentHistory() {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableHead >
                    <TableRow className="hst-tbl hst-tbl-header">
                        <TableCell className="tbl-head-cell">Job Assigned To</TableCell>
                        <TableCell className="tbl-head-cell">Activity</TableCell>
                        <TableCell className="tbl-head-cell">Date</TableCell>
                        <TableCell className="tbl-head-cell">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow className="hst-tbl" key={row.name}>
                            <TableCell className="hst-body-cell" component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell className="hst-body-cell">{row.activity}</TableCell>
                            <TableCell className="hst-body-cell">{row.date}</TableCell>
                            <TableCell className="hst-body-cell">{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
