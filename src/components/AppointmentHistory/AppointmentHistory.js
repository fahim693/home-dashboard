import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './appointment-history.css'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const rows = [
    {
        name: 'Mike Davis',
        activity: 'Created',
        date: '12/04/2020',
        time: '05:30 PM'
    },
    {
        name: 'Rob Tyler',
        activity: 'Created',
        date: '12/04/2020',
        time: '05:30 PM'
    },
    {
        name: 'Thomas Davis',
        activity: 'Created',
        date: '12/04/2020',
        time: '05:30 PM'
    },
    {
        name: 'George Williamson',
        activity: 'Created',
        date: '12/04/2020',
        time: '05:30 PM'
    },
    {
        name: 'Steve Parker',
        activity: 'Created',
        date: '12/04/2020',
        time: '05:30 PM'
    },

];

export default function AppointmentHistory() {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableHead >
                    <TableRow className="hst-tbl hst-tbl-header">
                        <TableCell>Job Assigned To</TableCell>
                        <TableCell>Activity</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow className="hst-tbl" key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell >{row.activity}</TableCell>
                            <TableCell >{row.date}</TableCell>
                            <TableCell >{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
