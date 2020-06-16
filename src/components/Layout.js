import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../styles/navbar.css'
import { MdDashboard, MdPeople, MdWork, MdReceipt, MdAssignment, MdAssignmentInd, MdMoreHoriz, MdArrowDropDown } from 'react-icons/md'
import { Link } from 'react-router-dom';

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
                                <Link className="nav-link">
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
                    <div className="logged-in-user">
                        <img src="/profile-img.png" />
                        <div>
                            <h3 className="name">John Doe</h3>
                            <div className="email">johndoe@gmail.com</div>
                        </div>
                        <MdArrowDropDown style={{ fontSize: 30, marginLeft: 10}}/>
                    </div>
                </Toolbar>
            </AppBar>
            <div className="body">
                {props.children}
            </div>
        </div>
    );
}

export default NavBar;
