import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FormControl, TextField, Button, makeStyles, Chip } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import './tag-toggle.css'

const useStyles = makeStyles((theme) => ({
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

const TagButtonToggle = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            {
                props.clickState === 0 ?
                    <div onClick={props.handleClick} className="chips-edit">
                        <Chip className="chip-edit" label="+ ADD TAG" />
                    </div> :
                    props.clickState === 1 ?
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
                                            onClick={props.handleChangeTag}
                                            variant="outlined"
                                            style={{ marginTop: '14px' }}
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
                                        <div className='tag-autocomplete' style={{ display: 'flex', alignItems: 'center' }}>
                                            <TextField
                                                {...params}
                                                placeholder="Search Tag"
                                                style={{ marginTop: '14px' }}
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
        </React.Fragment>
    )
}

export default TagButtonToggle;