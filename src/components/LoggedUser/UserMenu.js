import React from 'react';
import './user-menu.css'
import { MdArrowDropDown } from 'react-icons/md';
import { Menu, MenuItem } from '@material-ui/core';

const options = [
    {
        name: 'Settings'
    },
    {
        name: 'Logout'
    }
]

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [rotate, setRotate] = React.useState('initial');
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(rotate);
        handleChange();
    };

    const handleChange = () => {
        if (rotate === 'initial') {
            setRotate('rotate')
        } else {
            setRotate('initial')
        }
    }

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <div onClick={handleClick} className="logged-in-user">
                <img style={{height: 50}} src="/profile-img.png" alt="" />
                <div>
                    <h3 className="name">John Doe</h3>
                    <div className="email">johndoe@gmail.com</div>
                </div>
                <MdArrowDropDown className={rotate} style={{ fontSize: 30, margin: 10 }} />
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleChange}
            >
                {
                    options.map((option) => (
                        <MenuItem key={option.name} onClick={handleClose} style={{ width: 235 }}>{option.name}</MenuItem>
                    ))
                }
            </Menu>
        </div>
    )
}

export default UserMenu;