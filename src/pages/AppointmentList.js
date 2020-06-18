import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Theme from '../themes/theme'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Layout from '../components/Layout/Layout'
import { TextField, Button, FormControl } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import '../styles/appointment-list.css'
import { rows } from '../data/AppointmentData'


const headCells = [
    { id: 'name', label: 'Appointment #' },
    { id: 'calories', label: 'Date' },
    { id: 'fat', label: 'Start Time' },
    { id: 'carbs', label: 'Status' },
    { id: 'protein', label: 'Amount' },
    { id: 'sad', label: 'Address' },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, numSelected, rowCount } = props;

    return (
        <TableHead>
            <TableRow className="hst-tbl">
                <TableCell padding="checkbox">
                    <Checkbox
                        className='checkbox'
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
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
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
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
                        <Typography className={classes.title} variant="h6" id="tableTitle" component="div" style={{ fontSize: 24, marginLeft: 20, fontWeight: 500 }}>
                            Appointments
                        </Typography>
                        <div className="row-length">{rows.length}</div>
                    </div>
                )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                    <div className="search-container">
                        <FormControl variant="outlined" classes={{
                            root: classes.quantityRoot
                        }}>
                            <TextField
                                // label="Search"
                                placeholder="Search"
                                variant="outlined"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </FormControl>
                        <div style={{
                            marginLeft: 16
                        }}>
                            <Button variant='contained' className="btn-primary">ADD NEW</Button>
                        </div>
                    </div>
                )}
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
    }, quantityRoot: {
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

export default function EnhancedTable() {
    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <Layout>
            <div className={classes.root}>
                <div className="search-container-resp">
                    <FormControl variant="outlined" classes={{
                        root: classes.quantityRoot
                    }}>
                        <TextField
                            // label="Search"
                            placeholder="Search"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </FormControl>
                    <div style={{
                        marginTop: 10
                    }}>
                        <Button variant='contained' className="btn-primary">ADD NEW</Button>
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
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.id)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                                className="hst-tbl"
                                            >
                                                <TableCell padding="checkbox">
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
                                                <TableCell className='hst-body-cell' align="left">{row.status}</TableCell>
                                                <TableCell className='hst-body-cell' align="left">{row.amount}</TableCell>
                                                <TableCell className='hst-body-cell' align="left">{row.address}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <MuiThemeProvider theme={Theme}>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </MuiThemeProvider>
                </Paper>
            </div>
        </Layout>
    );
}