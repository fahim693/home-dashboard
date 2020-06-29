import React from 'react'
import Card from '../Card/Card'
import { LabelImportantRounded } from '@material-ui/icons'
import { makeStyles, Typography, FormControl, Select, MenuItem } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        minWidth: 195,
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
        },
    }
}));

const DetailsEdit = (props) => {
    const classes = useStyles();
    return (
        <Card
            title="Details"
            icon={<LabelImportantRounded className="main-title-icon" />}
            cardType={1}
        >
            <div style={{ padding: '17px 0 22px 25px' }}>
                <Typography className="title-heads" variant="body2" component="p">
                    Status
                        </Typography>
                <FormControl variant="outlined" margin="dense" classes={{
                    root: classes.quantityRoot
                }}>
                    <Select
                        id="state"
                        // value={props.data}
                        // onChange={handleChange}
                        defaultValue={2}
                        MenuProps={{
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left",
                            }
                        }}
                    >
                        <MenuItem value={0} style={{ color: '#fff', display: 'none' }}>Select Status</MenuItem>
                        <MenuItem value={1}>Open</MenuItem>
                        <MenuItem value={2}>Lost</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </Card >
    )
}

export default DetailsEdit;