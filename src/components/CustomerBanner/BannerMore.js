import React from 'react'
import { CameraAltRounded, AppsRounded, CreateRounded } from '@material-ui/icons';
import { makeStyles, Button, Select, FormControl, MenuItem } from '@material-ui/core';
import { MdCheck, MdClose } from 'react-icons/md';
import { withRouter } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 215,
    },
    quantityRoot: {
        minWidth: 215,
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: "5px",
        "& .MuiSelect-select": {
            '&:focus': {
                backgroundColor: '#fff',
            }
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf",
        },
    }
}));

const BannerMore = (props) => {
    const classes = useStyles();

    const handleEdit = (e) => {
        props.history.push(e)
    }

    const handleChange = (e) => {
        if (e.target.value === 'emp-edit') {
            props.history.push('/business-profile-edit')
        } 
        // else if (e.target.value === 'emp-del') {
        //     props.history.push('/employee-list')
        // }
    }
    return (
        <React.Fragment>
            <div className="cst-info-section" style={{ marginBottom: '2rem' }}>
                <div>
                    {
                        props.withImage ?
                            <div style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                {
                                    props.edit ?
                                        <div className="employee-picture with-image">
                                            <CameraAltRounded style={{ color: '#fff', fontSize: 32 }} />
                                        </div>
                                        : <img src='/abstract.png' style={{
                                            borderRadius: '100%',
                                            height: 75,
                                            width: 75
                                        }} alt='' />
                                }
                                <div style={{ fontSize: 29, fontWeight: 500, marginLeft: 23 }}>Expert Carpetz LLC</div>
                            </div>
                            :
                            <div className="cst-name employee-banner-img" style={{ cursor: 'pointer' }}>
                                <CameraAltRounded style={{ color: '#fff', fontSize: 32 }} />
                            </div>
                    }

                </div>
                <div className="cst-container">
                    {
                        props.edit ?
                            <React.Fragment>
                                <div className="cst-edit-action">
                                    <div>
                                        <Button onClick={() => handleEdit(props.confirmUrl)} variant='contained' className="btn-cancel">
                                            <MdClose className='btn-icon btn-icon-cancel' />
                                    CANCEL
                                </Button>
                                    </div>
                                    <div style={{
                                        marginLeft: 16
                                    }}>
                                        <Button onClick={() => handleEdit(props.confirmUrl)} variant='contained' className="btn-save">
                                            <MdCheck className='btn-icon' />
                                    SAVE
                                </Button>
                                    </div>
                                </div>
                            </React.Fragment> :
                            <React.Fragment>
                                <div className="cst-action">
                                    <FormControl variant="outlined" margin="dense" classes={{
                                        root: classes.quantityRoot
                                    }}>
                                        <Select
                                            id="city"
                                            // label="Actions"
                                            // value={age}
                                            MenuProps={{
                                                getContentAnchorEl: null,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left",
                                                }
                                            }}
                                            value={0}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={0} disabled style={{ display: 'none' }}>
                                                <div className="menu-item" >
                                                    <AppsRounded className="action-icon" style={{ fontSize: 21, marginLeft: 2 }} />
                                                    <div>ACTIONS</div>
                                                </div>
                                            </MenuItem>
                                            <MenuItem value='emp-edit'>
                                                <div className="menu-item">
                                                    <CreateRounded className="action-icon" />
                                                    <div>EDIT</div>
                                                </div>
                                            </MenuItem>
                                            {/* <MenuItem value='emp-del'>
                                                <div className="menu-item">
                                                    <DeleteRounded className="action-icon" />
                                                    <div>DELETE</div>
                                                </div>
                                            </MenuItem> */}
                                        </Select>
                                    </FormControl>
                                </div>
                            </React.Fragment>
                    }
                </div>
            </div >
        </React.Fragment>
    )
}

export default withRouter(BannerMore);