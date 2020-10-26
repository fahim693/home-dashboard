import React from 'react';
import './user-menu.css'
import { MdArrowDropDown } from 'react-icons/md';
import { Menu, MenuItem } from '@material-ui/core';
import AccountSettingsModal from '../Modal/AccountSettingsModal';
import Modal from '../Modal/Modal';
import { withRouter } from 'react-router-dom';

const UserMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [rotate, setRotate] = React.useState('initial');
    const [open, setOpen] = React.useState(false);
    const [alertText, setAlertText] = React.useState('');
    const [isErrored, setErrored] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);
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

    const handleAction = () => {
        setOpen(true)
    }

    const handleLogout = () => {
        setAnchorEl(null);
        props.history.push('/login')
    }
    return (
        <div>
            <div onClick={handleClick} className="logged-in-user">
                <img style={{ height: 50 }} src="/profile-img.png" alt="" />
                <div style={{width: 175}}>
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
                <MenuItem onClick={handleAction} style={{ width: 250 }}>Account Settings</MenuItem>
                <MenuItem onClick={handleLogout} style={{ width: 250 }}>Logout</MenuItem>

            </Menu>
            <AccountSettingsModal
                open={open}
                handleClose={() => {
                    setOpen(false)
                    setAnchorEl(null);
                }}
                handleSave={(flag) => {
                    if (flag === 1) {
                        setAlertText('Your password has been reset successfully.')
                        setAlertOpen(true)
                        setErrored(false)
                        setOpen(false)
                    } else if (flag === 0) {
                        setAlertText('This is not a valid email address.')
                        setAlertOpen(true)
                        setErrored(true)
                        setOpen(false)
                    }

                }}
            />
            <Modal
                open={alertOpen}
                isPasswordReset={true}
                modalText={alertText}
                isErrored={isErrored}
                handleModal={() => {
                    setAlertOpen(false)
                    setAnchorEl(null);
                }}
            />
        </div>
    )
}

export default withRouter(UserMenu);