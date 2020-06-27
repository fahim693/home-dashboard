import React, { useState } from 'react'
import { MdRemoveCircle } from 'react-icons/md'
import { ImageRounded } from '@material-ui/icons';
import { Typography, Chip, TextField, FormControl, MenuItem, Select, makeStyles } from '@material-ui/core';
import './others.css'
import TagButtonToggle from '../TagButtonToggle.js/TagButtonToggle';

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        minWidth: 185,
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
            border: "1px solid #000"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf",
            // backgroundColor: "#fff"
        },
    },
    
}))

const Others = (props) => {
    const classes = useStyles();
    const [clickState, setClickState] = useState(0)

    const handleClick = () => {
        setClickState(clickState + 1)
    }

    const handleChangeTag = (e) => {
        setClickState(clickState + 1)
    }
    return (
        <React.Fragment>
            <Typography className="title-heads" variant="body2" component="p" >
                Tags
            </Typography>
            <div className="chips">
                {
                    props.data.tags.map(tag => (
                        <Chip key={tag} className="chip" label={tag} onDelete={() => { }} deleteIcon={<MdRemoveCircle style={{ color: "#FF0000" }} />} />
                    ))
                }
            </div>
            <TagButtonToggle clickState={clickState} handleClick={handleClick} handleChangeTag={handleChangeTag}/>
            <br />
            <Typography className="title-heads" variant="body2" component="p" >
                Source
            </Typography>
            <FormControl variant="outlined" margin="dense" classes={{
                root: classes.quantityRoot
            }}>
                <Select
                    id="state"
                    // value={props.data}
                    // onChange={handleChange}
                    defaultValue={props.data.source}
                    MenuProps={{
                        getContentAnchorEl: null,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                        }
                    }}
                >
                    <MenuItem value={0} style={{ color: '#fff', display: 'none' }}>Select Source</MenuItem>
                    <MenuItem value={1}>Phone</MenuItem>
                    <MenuItem value={2}>Email</MenuItem>
                </Select>
            </FormControl>
            <br />
            <br />
            <Typography className="title-heads" variant="body2" component="p" >
                Notes
            </Typography>
            <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                root: classes.quantityRoot
            }}>
                <TextField
                    id="notes"
                    variant="outlined"
                    placeholder="Enter Notes"
                    fullWidth
                    name="notes"
                    value={props.notes}
                    onChange={props.handleOnChange}
                    rows={3}
                    rowsMax={4}
                    size='small'
                    multiline
                />
            </FormControl>
            <br />
            <br />
            <Typography className="title-heads" variant="body2" component="p" >
                Attachments
            </Typography>
            {
                props.data.attachments.map(attachment => (
                    <div key={attachment} className="attachment-card">
                        <div>
                            <ImageRounded style={{ marginRight: 10 }} />
                            <Typography variant="body2" component="p" >{attachment}</Typography>
                        </div>
                        <MdRemoveCircle className="apt-edit-icon" />
                    </div>
                ))
            }
            <div className="chips-edit">
                <Chip className="chip-edit" label="+ ADD ATTACHMENT" />
            </div>
        </React.Fragment >
    )
}

export default Others;