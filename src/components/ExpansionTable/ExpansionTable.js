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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function SimpleTable(props) {
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
        props.data.map((row, idx) => {
            if (idx < limit) {
                arr.push(
                    <TableRow className="hst-tbl" key={row.id}>
                        <TableCell className="hst-body-cell" component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell className="hst-body-cell">{row.date}</TableCell>
                        <TableCell className="hst-body-cell">{row.start}</TableCell>
                        <TableCell className="hst-body-cell">{row.status}</TableCell>
                        <TableCell className="hst-body-cell">${row.amount}</TableCell>
                        <TableCell className="hst-body-cell">{row.address}</TableCell>
                    </TableRow>
                )
            }
            return ''
        })
        return arr;
    }

    const getUnlimited = () => {
        let arr = []
        props.data.map((row) => {
            arr.push(
                <TableRow className="hst-tbl" key={row.id}>
                    <TableCell className="hst-body-cell" component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell className="hst-body-cell">{row.date}</TableCell>
                    <TableCell className="hst-body-cell">{row.start}</TableCell>
                    <TableCell className="hst-body-cell">{row.status}</TableCell>
                    <TableCell className="hst-body-cell">${row.amount}</TableCell>
                    <TableCell className="hst-body-cell">{row.address}</TableCell>
                </TableRow>
            )
            return ''
        })
        return arr
    }

    return (
        <TableContainer component={Paper}>
            <Card
                title={props.cardTitle}
                icon={props.icon}
                cardType={1}
                expansionButton={true}
                handleClick={handleClick}
                rotate={rotate}
            >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow className="hst-tbl hst-tbl-header">
                            {
                                props.type === 'apt' ?
                                    <TableCell className="tbl-head-cell">Appointment #</TableCell> :
                                    props.type === 'qts' ?
                                        <TableCell className="tbl-head-cell" > Quote #</TableCell> : ''
                            }
                            {
                                props.headerData.map((item, idx) => {
                                    if (idx > 0) {
                                        return (
                                            <TableCell key={item} className="tbl-head-cell">{item}</TableCell>
                                        )
                                    }
                                    return ''
                                })
                            }

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
