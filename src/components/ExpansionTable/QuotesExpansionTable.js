import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import './expansion-table.css'
import Modal from '../../components/Modal/Modal'
import { AddRounded, KeyboardArrowDownRounded, ReceiptRounded } from '@material-ui/icons';


const headCells = [
    { id: 'name', label: 'Quote #' },
    { id: 'calories', label: 'Date' },
    { id: 'fat', label: 'Start Time' },
    { id: 'carbs', label: 'Amount' },
    { id: 'protein', label: 'Status' }
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, numSelected, rowCount } = props;

    return (
        <TableHead>
            <TableRow className="apt-list-tbl">
                <TableCell className="checkbox-cell" padding="checkbox">
                    <Checkbox
                        className='checkbox'
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        color='primary'
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        className="apt-tbl-head tbl-head-cell"
                        key={headCell.id}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: '#000',
                backgroundColor: '#F2F9FC',
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
    quantityRoot: {
        minWidth: 185,
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
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
    const [open, setOpen] = useState(false)
    return (
        <Toolbar
            className={`${clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })} tbl-toolbar`}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                    <div className="tbl-title">
                        <ReceiptRounded style={{ margin: '0 17px 0 17px' }} className="main-title-icon" />
                        <Typography className={classes.title} variant="h6" id="tableTitle" component="div" style={{ fontSize: 24, fontWeight: 500 }}>
                            Quotes
                        </Typography>
                    </div>
                )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton onClick={() => {
                        setOpen(true)
                    }} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                    <div className="search-container">
                        <div style={{
                            marginLeft: 16
                        }}>
                            <Button variant='contained' className="btn-primary">
                                <AddRounded />
                                 ADD NEW
                                 </Button>
                        </div>
                    </div>
                )}
            <Modal
                open={open}
                handleModal={() => {
                    setOpen(false)
                    window.location.reload()
                }}
                modalText={numSelected > 1 ? 'Are you sure you want to delete the selected quotes?' : 'Are you sure you want to delete the selected quote?'}
            />
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        ".MuiSelect-select": {
            '&:focus': {
                backgroundColor: '#fff'
            }
        },
        // marginTop: '65px !important'
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    quantityRoot: {
        minWidth: 185,
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
    },
    tableRow: {
        "&.MuiTableRow-root.Mui-selected": {
            backgroundColor: "#F2F9FC"
        },
    },
}));

export default function QuotesExpansionTable(props) {
    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);
    const [dense] = React.useState(false);
    const [rotate, setRotate] = React.useState('initial');
    const [expanded, setExpanded] = useState(false);

    const handleClickClassChange = () => {
        if (rotate === 'initial') {
            setRotate('rotate')
        } else {
            setRotate('initial')
        }
        setExpanded(!expanded)
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = props.data.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const getLimited = (limit) => {
        let arr = []
        props.data.map((row, index) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${index}`;
            if (index < limit) {
                arr.push(
                    <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        className={`${classes.tableRow}  apt-list-tbl`}
                    >
                        <TableCell className="checkbox-cell" padding="checkbox">
                            <Checkbox
                                className='checkbox'
                                checked={isItemSelected}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </TableCell>
                        <TableCell className='hst-body-cell' align='left' id={labelId} scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell className='hst-body-cell' align="left">{row.date}</TableCell>
                        <TableCell className='hst-body-cell' align="left">{row.start}</TableCell>
                        <TableCell className='hst-body-cell' align="left">${row.amount}</TableCell>
                        <TableCell className='hst-body-cell' align="left">{row.status}</TableCell>
                    </TableRow>
                )
            }
            return ''
        })
        return arr;
    }

    const getUnlimited = () => {
        let arr = []
        props.data.map((row, index) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${index}`;
            arr.push(
                <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    className={`${classes.tableRow}  apt-list-tbl`}
                >
                    <TableCell className="checkbox-cell" padding="checkbox">
                        <Checkbox
                            className='checkbox'
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                    </TableCell>
                    <TableCell className='hst-body-cell' align='left' id={labelId} scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell className='hst-body-cell' align="left">{row.date}</TableCell>
                    <TableCell className='hst-body-cell' align="left">{row.start}</TableCell>
                    <TableCell className='hst-body-cell' align="left">${row.amount}</TableCell>
                    <TableCell className='hst-body-cell' align="left">{row.status}</TableCell>
                </TableRow>
            )
            return ''
        })
        return arr;
    }

    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <div className={classes.root}>
            <div className="search-container-resp">
                <div style={{
                    marginTop: 10
                }}>
                    <Button href='/quote-new' variant='contained' className="btn-primary">
                        <AddRounded />
                            ADD NEW
                            </Button>
                </div>
            </div>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            onSelectAllClick={handleSelectAllClick}
                            rowCount={props.data.length}
                        />
                        <TableBody>
                            {
                                !expanded ?
                                    getLimited(4) : getUnlimited()
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <div onClick={handleClickClassChange} className='view-all-btn'>
                    <span>VIEW {rotate === 'initial' ? 'ALL' : 'LESS'}</span>
                    <KeyboardArrowDownRounded style={{ fontSize: 27 }}
                        className={rotate}
                    />
                </div>
            </Paper>
        </div>
    );
}
