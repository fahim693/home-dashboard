import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import '../NavbarResponsive/navbar-responsive.css'
import { MdMenu, MdDashboard, MdWork, MdReceipt, MdAssignment, MdAssignmentInd, MdMoreHoriz, MdPeople } from 'react-icons/md';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from 'react-router-dom';
import UserMenu from '../LoggedUser/UserMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const NavbarResponsive = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
  const [menu] = useState([
    {
      name: 'Home',
      icon: <MdDashboard style={{ color: "#fff", fontSize: 28 }} />
    },
    {
      name: 'Customers',
      icon: <MdPeople style={{ color: "#fff", fontSize: 28 }} />
    },
    {
      name: 'Appointments',
      icon: <MdWork style={{ color: "#fff", fontSize: 28 }} />,
      link: '/'
    },
    {
      name: 'Quotes',
      icon: <MdReceipt style={{ color: "#fff", fontSize: 28 }} />
    },
    {
      name: 'Schedule',
      icon: <MdAssignment style={{ color: "#fff", fontSize: 28 }} />
    },
    {
      name: 'Employeed',
      icon: <MdAssignmentInd style={{ color: "#fff", fontSize: 28 }} />
    },
    {
      name: 'More',
      icon: <MdMoreHoriz style={{ color: "#fff", fontSize: 28 }} />
    }
  ])

  const handleRoute = (e) => {
    props.history.push(e)
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <React.Fragment>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List style={{ color: "#fff", fontSize: 32 }}>
          {menu.map((obj, index) => (
            <ListItem button key={index} onClick={() => handleRoute(obj.link)}>
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItem>
          ))}
        </List>
        <Divider />

      </div>
      <List style={{ color: "#fff" }}>
        <UserMenu />
      </List>
    </React.Fragment>
  );

  return (
    <div>
      <Toolbar className='toolbar-resp'>
        {
          ['left'].map((anchor) => (
            <React.Fragment key={anchor} >
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(anchor, true)}>
                <MdMenu style={{ fontSize: 36 }} />
              </IconButton>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))
        }
      </Toolbar>
    </div>
  );
}

export default withRouter(NavbarResponsive);
