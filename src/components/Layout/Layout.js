import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../Layout/navbar.css'
import { DashboardRounded, PeopleAltRounded, WorkRounded, ReceiptRounded, EventNoteRounded, AssignmentIndRounded, MoreHorizRounded, NotificationsRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import NavbarResponsive from '../NavbarResponsive/NavbarResponsive';
import UserMenu from '../LoggedUser/UserMenu';
import { Badge } from '@material-ui/core';
import Notification from '../Notifications/Notification';

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
    badgeStyle: {
        '.MuiBadge-colorError': {
            backgroundColor: '#EB5757 !important'
        }
    }
}));

const NavBar = (props) => {
    const classes = useStyles();
    const [showNotification, setNotification] = useState(false)
    const [badgeContent, setBadgeContent] = useState(3)
    let home, customers, appointments, schedule, employees, more, quotes = ''
    if (props.active === 0) {
        home = 'selected'
    } else if (props.active === 1) {
        customers = 'selected'
    } else if (props.active === 2) {
        appointments = 'selected'
    } else if (props.active === 3) {
        quotes = 'selected'
    } else if (props.active === 4) {
        schedule = 'selected'
    } else if (props.active === 5) {
        employees = 'selected'
    } else if (props.active === 6) {
        more = 'selected'
    }

    const handleShowNotification = () => {
        setNotification(true);
        setBadgeContent(0)
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <div className='nav-desktop'>
                    <Toolbar className="toolbar">
                        <div className="navbar">
                            <ul>
                                <li className="nav-item">
                                    <Link className={`nav-link ${home}`} to="/">
                                        <DashboardRounded className="nav-icon" />
                                        <div>Home</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${customers}`} to="/customer-list">
                                        <PeopleAltRounded className="nav-icon" />
                                        <div>Customers</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${appointments}`} to="/appointment-list">
                                        <WorkRounded className="nav-icon" />
                                        <div>Appointments</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${quotes}`} to="/quote-list">
                                        <ReceiptRounded className="nav-icon" />
                                        <div>Quotes</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${schedule}`} to="/schedule">
                                        <EventNoteRounded className="nav-icon" />
                                        <div>Schedule</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${employees}`} to="/employee-list">
                                        <AssignmentIndRounded className="nav-icon" />
                                        <div>Employees</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${more}`} to="/more">
                                        <MoreHorizRounded className="nav-icon" />
                                        <div>More</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {
                                showNotification ?
                                    <div style={{ backgroundColor: 'rgba(242, 249, 252, 0.32)', marginRight: 19, borderRadius: '100%', height: 44, width: 44, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <NotificationsRounded style={{ fontSize: 28 }} />
                                    </div> :
                                    <div onClick={handleShowNotification} style={{ backgroundColor: '#2a95c5', marginRight: 19, borderRadius: '100%', height: 44, width: 44, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Badge style={{ marginRight: 3, marginTop: 9, cursor: 'pointer' }} badgeContent={badgeContent} color="error">
                                            <NotificationsRounded style={{ marginTop: -9, marginRight: -2, fontSize: 28 }} />
                                        </Badge>
                                    </div>
                            }
                            {
                                showNotification ?
                                    <div style={{ position: 'absolute', zIndex: 10, top: 47, right: 134 }}>
                                        <Notification
                                            setNotification={setNotification}
                                        />
                                    </div> : ''
                            }

                            <UserMenu />
                        </div>
                    </Toolbar>
                </div>
                <div className="nav-mobile">
                    <NavbarResponsive />
                </div>
            </AppBar>
            <div className="body">
                {props.children}
            </div>
        </div >
    );
}

export default NavBar;
