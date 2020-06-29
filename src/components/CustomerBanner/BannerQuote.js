import React from 'react'
import './banner.css'
import { Button, FormControl, makeStyles, Select, MenuItem } from '@material-ui/core';
import { MdCheck, MdClose } from 'react-icons/md';
import { withRouter } from 'react-router-dom';
import { WorkOffRounded, PlayArrowRounded, AppsRounded, CreateRounded, DeleteRounded } from '@material-ui/icons';

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

const BannerQuote = (props) => {
    const classes = useStyles();

    const handleEdit = (e) => {
        props.history.push(e)
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === 3) {
            props.history.push('/quote-edit')
        } else if (e.target.value === 4) {
            props.history.push('/quote-list')
        } 
    }

    return (
        <React.Fragment>
            <div className="cst-info-section" style={{ alignItems: 'center', marginBottom: 42 }}>
                <div className="cst-name">{props.name}</div>
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
                                                <AppsRounded className="action-icon" style={{ marginLeft: 2 }} />
                                                <div>ACTIONS</div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={1}>
                                            <div className="menu-item">
                                                <WorkOffRounded className="action-icon" />
                                                <div>CLOSE</div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={2}>
                                            <div className="menu-item">
                                                <PlayArrowRounded className="action-icon" />
                                                <div>CONVERT</div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={3}>
                                            <div className="menu-item">
                                                <CreateRounded className="action-icon" />
                                                <div>EDIT</div>
                                            </div>

                                        </MenuItem>
                                        <MenuItem value={4}>
                                            <div className="menu-item">
                                                <DeleteRounded className="action-icon" />
                                                <div>DELETE</div>
                                            </div>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </React.Fragment>
                    }
                </div>
            </div >
        </React.Fragment >
    )
}

export default withRouter(BannerQuote);