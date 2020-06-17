import React from 'react';
import './user-menu.css'
import { MdArrowDropDown } from 'react-icons/md';
import { Menu, MenuItem } from '@material-ui/core';

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <div onClick={handleClick} className="logged-in-user">
                <img src="/profile-img.png" alt=""/>
                <div>
                    <h3 className="name">John Doe</h3>
                    <div className="email">johndoe@gmail.com</div>
                </div>
                <MdArrowDropDown style={{ fontSize: 30, margin: 10 }} />
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export default UserMenu;