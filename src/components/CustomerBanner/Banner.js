import React from 'react'
import './banner.css'
import { Button, FormControl, makeStyles, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 185,
    }
}));

const Banner = () => {
    const classes = useStyles();
    return (
        <div className="cst-info-section">
            <div>
                <div className="cst-name">John Williams</div>
                <div className="remaining-balance">Remaining Balance <span style={{ color: '#2a95c5', fontWeight: 400 }}>$208.00</span></div>
            </div>
            <div className="cst-action">
                <FormControl variant="outlined" className={classes.formControl}>
                    {/* <InputLabel id="demo-simple-select-label">Actions</InputLabel> */}
                    <Select
                        id="city"
                    // label="Actions"
                    // value={age}
                    // onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <div style={{
                    marginLeft: 16
                }}>
                    <Button variant='contained' className="btn-primary">START NOW</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner;