import React, { useState } from 'react'
import './banner.css'
import { Button, FormControl, makeStyles, Select, MenuItem } from '@material-ui/core';
import { MdCheck, MdClose, MdSend, MdCreate, MdApps, MdDelete, MdImportExport, MdLocalAtm } from 'react-icons/md';
import { withRouter } from 'react-router-dom';
import { data } from '../../data/UserData'
import TabModal from '../Modal/TabModal';

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

const Banner = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [isRefund, setRefund] = useState(false)

    const handleEdit = (e) => {
        props.history.push('/appointment')
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === 3) {
            props.history.push('/edit')
        } else if (e.target.value === 4) {
            props.history.push('/')
        }
    }

    const handleClickRefund = () => {
        setRefund(true)
        setOpen(true)
    }
    return (
        <React.Fragment>
            <div className="cst-info-section">
                <div>
                    <div className="cst-name">{data.name}</div>
                    <p className="remaining-balance">Remaining Balance <span style={{ color: '#2a95c5' }}>${data.remaining_balance}</span></p>
                </div>
                <div className="cst-container">
                    {
                        props.edit ?
                            <React.Fragment>
                                <div className="cst-edit-action">
                                    <div>
                                        <Button onClick={handleEdit} variant='contained' className="btn-cancel">
                                            <MdClose className='btn-icon btn-icon-cancel' />
                                    CANCEL
                                </Button>
                                    </div>
                                    <div style={{
                                        marginLeft: 16
                                    }}>
                                        <Button onClick={handleEdit} variant='contained' className="btn-save">
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
                                        {/* <InputLabel id="demo-simple-select-label">Actions</InputLabel> */}
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
                                                    <MdApps className="action-icon" style={{ fontSize: 21, marginLeft: 2 }} />
                                                    <div>ACTIONS</div>
                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={() => {
                                                setRefund(false)
                                                setOpen(true)
                                            }} value={1}>
                                                <div className="menu-item">
                                                    <MdLocalAtm className="action-icon" />
                                                    <div>PAY NOW</div>
                                                </div>
                                            </MenuItem>
                                            <MenuItem value={2}>
                                                <div className="menu-item">
                                                    <MdSend className="action-icon" />
                                                    <div> SEND INVOICE</div>
                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleClickRefund} value={5}>
                                                <div className="menu-item">
                                                    <MdImportExport className="action-icon" />
                                                    <div> REFUND</div>
                                                </div>
                                            </MenuItem>
                                            <MenuItem value={3}>
                                                <div className="menu-item">
                                                    <MdCreate className="action-icon" />
                                                    <div>EDIT</div>
                                                </div>

                                            </MenuItem>
                                            <MenuItem value={4}>
                                                <div className="menu-item">
                                                    <MdDelete className="action-icon" />
                                                    <div>DELETE</div>
                                                </div>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                {
                                    props.type === 0 ?
                                        <div className="start-container">
                                            <Button onClick={props.handleStep} variant='contained' className="btn-primary">SCHEDULE</Button>
                                        </div> :
                                        props.type === 1 ?
                                            <div className="start-container">
                                                <Button onClick={props.handleStep} variant='contained' className="btn-primary">START</Button>
                                            </div> :
                                            props.type === 2 ?
                                                <div className="start-container">
                                                    <Button onClick={props.handleStep} variant='contained' className="btn-primary">FINISH</Button>
                                                </div> :
                                                props.type === 3 ?
                                                    <div className="start-container">
                                                        <Button onClick={props.handleStep} variant='contained' className="btn-primary">PAY</Button>
                                                    </div> : ''
                                }

                            </React.Fragment>
                    }
                </div>
            </div >
            <TabModal
                open={open}
                handleClose={() => setOpen(false)}
                isRefund={isRefund}
            />
        </React.Fragment>
    )
}

export default withRouter(Banner);