import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../Layout/navbar.css'
import { MdDashboard, MdPeople, MdWork, MdReceipt, MdAssignment, MdAssignmentInd, MdMoreHoriz } from 'react-icons/md'
import { Link } from 'react-router-dom';
import NavbarResponsive from '../NavbarResponsive/NavbarResponsive';
import UserMenu from '../LoggedUser/UserMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 0
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <div className='nav-desktop'>
                    <Toolbar className="toolbar">
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                        <div className="navbar">
                            <ul>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                        <MdDashboard className="nav-icon" />
                                        <p>Home</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                        <MdPeople className="nav-icon" />
                                        <p>Customers</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link selected" to="/">
                                        <MdWork className="nav-icon" />
                                        <p>Appointment</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                        <MdReceipt className="nav-icon" />
                                        <p>Quotes</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                        <MdAssignment className="nav-icon" />
                                        <p>Schedule</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                        <MdAssignmentInd className="nav-icon" />
                                        <p>Employees</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                        <MdMoreHoriz className="nav-icon" />
                                        <p>More</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <UserMenu />
                    </Toolbar>
                </div>
                <div className="nav-mobile">
                    <NavbarResponsive />
                </div>
            </AppBar>
            <div className="body">
                {props.children}
            </div>
        </div>
    );
}

export default NavBar;
