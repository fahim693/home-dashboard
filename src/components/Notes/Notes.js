import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card/Card'
import { TextField, FormControl } from '@material-ui/core';
import { NotesRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
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

export default function Notes(props) {
    const classes = useStyles();

    return (
        <Card
            title="Notes"
            icon={<NotesRounded className="main-title-icon" />}
            cardType={1}
        >
            <div style={{
                padding: '16px 24px 18px'
            }}>
                <FormControl variant="outlined" fullWidth classes={{
                    root: classes.quantityRoot
                }}>
                    <TextField
                        id="notes"
                        variant="outlined"
                        placeholder="Enter Notes"
                        multiline
                        rows={15}
                        rowsMax={18}
                        defaultValue={props.data.notes}
                        // value={fieldValue.street_address}
                        name='email'
                        // onChange={handleOnChange}
                        fullWidth
                        margin='dense'
                    />
                </FormControl>
            </div>
        </Card>
    );
}
