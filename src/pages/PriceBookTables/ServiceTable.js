import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Theme from '../../themes/theme'
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
import Layout from '../../components/Layout/Layout'
import { TextField, Button, FormControl } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { services, servicesEmpty } from '../../data/PriceBookData'
import { useState } from 'react';
import Modal from '../../components/Modal/Modal'
import AddNewModal from '../../components/Modal/NewServicesModal'
import { AddRounded, EditRounded } from '@material-ui/icons';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './price-book-tables.css'
import { Link } from 'react-router-dom';


const headCells = [
    { id: 'name', label: 'Service Name' },
    { id: 'calories', label: 'Description' },
    { id: 'fat', label: 'Category' },
    { id: 'carbs', label: 'Price' },
    { id: 'protein', label: 'Online Booking' }
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
        marginRight: 16
    },
    titleSelected: {
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
    const [addNewOpen, setAddNewOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)

    return (
        <Toolbar
            className={`${clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })} tbl-toolbar`}
        >
            {numSelected > 0 ? (
                <Typography className={classes.titleSelected} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                    <div className="tbl-title" style={{ width: '100%' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexGrow: 1
                        }}>
                            <Typography className={classes.title} variant="h6" id="tableTitle" component="div" style={{ marginLeft: '1.2rem' }}>
                                Price Book
                            </Typography>
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
                                    margin="dense"
                                    style={{ margin: 0 }}
                                />
                            </FormControl>
                        </div>
                        <ToggleButtonGroup
                            value='right'
                            exclusive
                            aria-label="text alignment"
                            size='small'
                            style={{
                                flexGrow: 1
                            }}
                        >
                            <ToggleButton value="left" aria-label="left aligned">
                                <Link to='/item-table' style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.38)' }}>
                                    Items
                                </Link>
                            </ToggleButton>
                            <ToggleButton value="right" aria-label="right aligned">
                                Services
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <div style={{
                            flexGrow: 1,
                            textAlign: 'right'
                        }}>
                            <Button onClick={() => { setAddNewOpen(true) }} variant='contained' className="btn-primary">
                                <AddRounded />
                                 ADD NEW
                            </Button>
                        </div>
                    </div>
                )}

            {
                numSelected === 1 ? (
                    <React.Fragment>
                        <Tooltip title="Edit">
                            <IconButton onClick={() => {
                                setEditOpen(true)
                            }} aria-label="edit">
                                <EditRounded />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton onClick={() => {
                                setOpen(true)
                            }} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </React.Fragment>
                ) : numSelected > 1 ?
                        <Tooltip title="Delete">
                            <IconButton onClick={() => {
                                setOpen(true)
                            }} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip> : ''
            }
            <Modal
                open={open}
                handleModal={() => {
                    setOpen(false)
                    window.location.reload()
                }}
                modalText={numSelected > 1 ? 'Are you sure you want to delete the selected services?' : 'Are you sure you want to delete the selected service?'}
            />
            <AddNewModal
                open={addNewOpen}
                cardTitle='Add New Service'
                modalType='service'
                data={servicesEmpty}
                handleModal={() => {
                    setAddNewOpen(false)
                }}
            />
            <AddNewModal
                open={editOpen}
                cardTitle='Edit Service'
                withImage={true}
                data={services[0]}
                modalType='service'
                handleModal={() => {
                    setAddNewOpen(false)
                    window.location.reload()
                }}
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
        marginTop: '65px !important'
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

export default function ServiceTable() {
    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = services.map((n) => n.id);
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
        <Layout active={6}>
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
                            margin="dense"
                        />
                    </FormControl>
                    <div style={{
                        marginTop: 10
                    }}>
                        <Button href='/add' variant='contained' className="btn-primary">
                            <AddRounded />
                            ADD NEW</Button>
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
                                rowCount={services.length}
                            />
                            <TableBody>
                                {services
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
                                                    {row.name}
                                                </TableCell>
                                                <TableCell className='hst-body-cell' align="left">{row.description}</TableCell>
                                                <TableCell className='hst-body-cell' align="left">{row.category}</TableCell>
                                                <TableCell className='hst-body-cell' align="left">${row.price}</TableCell>
                                                <TableCell className='hst-body-cell' align="left">{row.booking}</TableCell>
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
                            count={services.length}
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