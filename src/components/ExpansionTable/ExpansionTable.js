import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '../Card/Card'
import { EventNoteRounded } from '@material-ui/icons';
import { rows } from '../../data/AppointmentHistoryData'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function SimpleTable() {
    const classes = useStyles();
    const [rotate, setRotate] = React.useState('initial');
    const [expanded, setExpanded] = useState(false);


    const handleClick = () => {
        if (rotate === 'initial') {
            setRotate('rotate')
        } else {
            setRotate('initial')
        }
        setExpanded(!expanded)
    }

    const getLimited = (limit) => {
        let arr = []
        rows.map((row, idx) => {
            if (idx < limit) {
                arr.push(
                    <TableRow className="hst-tbl" key={row.name}>
                        <TableCell className="hst-body-cell" component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell className="hst-body-cell">{row.activity}</TableCell>
                        <TableCell className="hst-body-cell">{row.date}</TableCell>
                        <TableCell className="hst-body-cell">{row.time}</TableCell>
                    </TableRow>
                )
            }
            return ''
        })
        return arr;
    }

    const getUnlimited = () => {
        let arr = []
        rows.map((row) => {
            arr.push(
                <TableRow className="hst-tbl" key={row.name}>
                    <TableCell className="hst-body-cell" component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell className="hst-body-cell">{row.activity}</TableCell>
                    <TableCell className="hst-body-cell">{row.date}</TableCell>
                    <TableCell className="hst-body-cell">{row.time}</TableCell>
                </TableRow>
            )
            return ''
        })
        return arr
    }

    return (
        <TableContainer component={Paper}>
            <Card
                title="Appointments"
                icon={<EventNoteRounded className="main-title-icon" />}
                cardType={1}
                expansionButton={true}
                handleClick={handleClick}
                rotate={rotate}
            >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow className="hst-tbl hst-tbl-header">
                            <TableCell className="tbl-head-cell">Job Assigned To</TableCell>
                            <TableCell className="tbl-head-cell">Activity</TableCell>
                            <TableCell className="tbl-head-cell">Date</TableCell>
                            <TableCell className="tbl-head-cell">Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {
                            !expanded ?
                                getLimited(4) : getUnlimited()
                        }
                    </TableBody>
                </Table>
            </Card>

        </TableContainer >
    );
}
