import React from 'react'
import './banner.css'
import { Button, FormControl, makeStyles, Select, MenuItem } from '@material-ui/core';
import { MdCheck, MdClose, MdSend, MdCreate, MdApps } from 'react-icons/md';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 215,
    }
}));

const Banner = (props) => {
    const classes = useStyles();

    const handleEdit = (e) => {
        props.history.push('/')
    }

    const handleChange = (e) => {
        if (e.target.value === 3) {
            props.history.push('/edit')
        } else if (e.target.value === 4) {
            props.history.push('/appointments')
        } 
    }
    return (
        <div className="cst-info-section">
            <div>
                <div className="cst-name">John Williams</div>
                <div className="remaining-balance">Remaining Balance <span style={{ color: '#2a95c5', fontWeight: 400 }}>$208.00</span></div>
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

                                <FormControl variant="outlined" className={classes.formControl}>
                                    {/* <InputLabel id="demo-simple-select-label">Actions</InputLabel> */}
                                    <Select
                                        id="city"
                                        // label="Actions"
                                        // value={age}
                                        defaultValue={0}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={0} disabled>
                                            <MdApps className="action-icon" />
                                        ACTIONS
                                    </MenuItem>
                                        <MenuItem value={1}>
                                            <MdCreate className="action-icon" />
                                        PAY NOW
                                    </MenuItem>
                                        <MenuItem value={2}>
                                            <MdSend className="action-icon" />
                                        SEND INVOICE
                                    </MenuItem>
                                        <MenuItem value={3}>
                                            <MdCreate className="action-icon" />
                                        EDIT
                                    </MenuItem>
                                        <MenuItem value={4}>
                                            <MdCreate className="action-icon" />
                                        ADD/DELETE
                                    </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="start-container">
                                <Button variant='contained' className="btn-primary">START NOW</Button>
                            </div>
                        </React.Fragment>
                }
            </div>
        </div >
    )
}

export default withRouter(Banner);