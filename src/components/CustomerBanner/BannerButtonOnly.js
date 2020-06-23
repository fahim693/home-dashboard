import React from 'react'
import './banner.css'
import { Button, FormControl, makeStyles, Select, MenuItem } from '@material-ui/core';
import { MdCheck, MdClose, MdSend, MdCreate, MdApps, MdDelete } from 'react-icons/md';
import { withRouter } from 'react-router-dom';
import { data } from '../../data/UserData'

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

const BannerButtonOnly = (props) => {
    const classes = useStyles();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 60
        }}>
            <Button style={{ width: 120 }} onClick={()=> props.history.push(props.link)} variant='contained' className="btn-primary">{props.text}</Button>
        </div >
    )
}

export default withRouter(BannerButtonOnly);