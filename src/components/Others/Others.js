import React from 'react'
import { MdRemoveCircle } from 'react-icons/md'
import { ImageRounded } from '@material-ui/icons';
import { Typography, Chip, TextField, FormControl, MenuItem, Select, makeStyles, InputLabel } from '@material-ui/core';
import './others.css'

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        minWidth: 185,
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
            border: "1px solid #000"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #bfbfbf",
            // backgroundColor: "#fff"
        },
    }
}));

const Others = (props) => {
    const classes = useStyles();
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
                {/* <Chip className="chip" label="Tools" onDelete={() => { }} deleteIcon={<MdRemoveCircle style={{ color: "#FF0000" }} />} />
                <Chip className="chip" label="Photo" onDelete={() => { }} deleteIcon={<MdRemoveCircle style={{ color: "#FF0000" }} />} />
                <Chip className="chip" label="Job" onDelete={() => { }} deleteIcon={<MdRemoveCircle style={{ color: "#FF0000" }} />} /> */}
            </div>
            <div className="chips-edit">
                <Chip className="chip-edit" label="+ Add Tag" />
            </div>
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
                    rows={4}
                    rowsMax={5}
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
        </React.Fragment>
    )
}

export default Others;