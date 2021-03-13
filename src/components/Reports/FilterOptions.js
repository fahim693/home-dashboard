import React from 'react'
import { makeStyles, Select, FormControl, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    quantityRoot: {
        minWidth: 180,
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

const FilterOptions = (props) => {
    const classes = useStyles();


    // const handleChange = (e) => {
    //     
    // }

    return (
        <React.Fragment>
            <div className="cst-action">
                <FormControl variant="outlined" margin="dense" classes={{
                    root: classes.quantityRoot
                }}>
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
                    // onChange={handleChange}
                    >
                        <MenuItem value={0} disabled style={{ display: 'none' }}>
                            <div className="menu-item" >
                                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.958297 2.545C3.31496 5.56667 7.66663 11.1667 7.66663 11.1667V18.1667C7.66663 18.8083 8.19163 19.3333 8.8333 19.3333H11.1666C11.8083 19.3333 12.3333 18.8083 12.3333 18.1667V11.1667C12.3333 11.1667 16.6733 5.56667 19.03 2.545C19.625 1.775 19.0766 0.666668 18.1083 0.666668H1.87996C0.91163 0.666668 0.363297 1.775 0.958297 2.545Z" fill="black" />
                                </svg>
                                <div style={{ margin: '0 5px' }}>FILTERS</div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#27AE60', color: '#fff', fontWeight: 500, borderRadius: 6, height: 22, minWidth: 22 }}>
                                    2
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem value='emp-edit'>
                            <div className="menu-item">
                                <div>CUSTOMER</div>
                            </div>
                        </MenuItem>
                        <MenuItem value='emp-edit'>
                            <div className="menu-item">
                                <div>STATUS</div>
                            </div>
                        </MenuItem>
                    </Select>
                </FormControl>
            </div>
        </React.Fragment>
    )
}

export default FilterOptions;