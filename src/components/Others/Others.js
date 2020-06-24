import React, { useState } from 'react'
import { MdRemoveCircle } from 'react-icons/md'
import { ImageRounded } from '@material-ui/icons';
import { Typography, Chip, TextField, FormControl, MenuItem, Select, makeStyles, InputLabel, Button } from '@material-ui/core';
import './others.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from "@material-ui/icons/Search";


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
    tagRoot: {
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
        "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] .MuiAutocomplete-input": {
            padding: '10px !important'
        }
    }
}))

const Others = (props) => {
    const classes = useStyles();
    const [clickState, setClickState] = useState(0)
    const [val, setVal] = useState('')
    const [open, setOpen] = useState(false)

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
            {
                clickState === 0 ?
                    <div onClick={handleClick} className="chips-edit">
                        <Chip className="chip-edit" label="+ Add Tag" />
                    </div> :
                    clickState === 1 ?
                        <div>
                            <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={['Tools', 'Photo', 'Job'].map((option) => option)}
                                renderInput={(params) => (
                                    <FormControl variant="outlined" fullWidth classes={{
                                        root: classes.tagRoot
                                    }}>
                                        <TextField
                                            {...params}
                                            placeholder="Search Tag"
                                            margin="normal"
                                            onClick={handleChangeTag}
                                            variant="outlined"
                                            InputProps={{
                                                ...params.InputProps,
                                                endAdornment: <SearchIcon style={{
                                                    marginRight: 10,
                                                    color: '#A2A2A2'
                                                }} />
                                            }}
                                        />
                                    </FormControl>
                                )}
                            />
                        </div> :
                        <div>
                            <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={['Tools', 'Photo', 'Job'].map((option) => option)}
                                renderInput={(params) => (
                                    <FormControl variant="outlined" style={{ width: '100%' }} classes={{
                                        root: classes.tagRoot
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <TextField
                                                {...params}
                                                placeholder="Search Tag"
                                                margin="normal"
                                                variant="outlined"
                                                InputProps={{
                                                    ...params.InputProps,
                                                }}
                                            />
                                            <div style={{ marginTop: 5 }}>
                                                <Button className='btn-primary' variant='contained'>ADD</Button>
                                            </div>
                                        </div>
                                    </FormControl>
                                )}
                            />
                        </div>
            }

            <br />
            <Typography className="title-heads" variant="body2" component="p" >
                Source
            </Typography>
            <FormControl variant="outlined" margin="dense" classes={{
                root: classes.quantityRoot
            }}>
                {/* <InputLabel shrink htmlFor="name-multiple">Select Source</InputLabel> */}
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
            {/* <Typography variant="body2" component="p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sagittis est. Vivamus euismod cursus varius.</Typography> */}
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
                <Chip className="chip-edit" label="+ Add Attachment" />
            </div>
        </React.Fragment >
    )
}

export default Others;