import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../Layout/navbar.css'
// import { MdDashboard, MdPeople, MdWork, MdReceipt, MdAssignmentInd, MdMoreHoriz, MdEventNote } from 'react-icons/md'
import { DashboardRounded, PeopleAltRounded, WorkRounded, ReceiptRounded, EventNoteRounded, AssignmentIndRounded, MoreHorizRounded } from '@material-ui/icons';
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
                        <div className="navbar">
                            <ul>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        {/* <MdDashboard className="nav-icon" /> */}
                                        <DashboardRounded className="nav-icon"/>
                                        <div>Home</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <PeopleAltRounded className="nav-icon" />
                                        <div>Customers</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link selected" to="/">
                                        <WorkRounded className="nav-icon" />
                                        <div>Appointments</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <ReceiptRounded className="nav-icon" />
                                        <div>Quotes</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <EventNoteRounded className="nav-icon" />
                                        <div>Schedule</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <AssignmentIndRounded className="nav-icon" />
                                        <div>Employees</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <MoreHorizRounded className="nav-icon" />
                                        <div>More</div>
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
