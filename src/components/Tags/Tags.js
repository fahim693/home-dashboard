import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card/Card'
import { Chip } from '@material-ui/core';
import { LocalOfferRounded } from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//     quantityRoot: {
//         "& .MuiSelect-select": {
//             '&:focus': {
//                 backgroundColor: '#fff',
//             }
//         },
//         "& .MuiOutlinedInput-notchedOutline": {
//             border: "1px solid #bfbfbf"
//         },
//         "&:hover .MuiOutlinedInput-notchedOutline": {
//             border: "1px solid #000"
//         },
//         "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
//             border: "1px solid #bfbfbf",
//         },
//     }
// }));

export default function CenteredGrid() {

    return (
        <Card
            title="Tags"
            icon={<LocalOfferRounded className="main-title-icon" />}
            cardType={1}
        >
            <div style={{ margin: "1.6rem 0 1.8rem", marginLeft: 32 }} className="chips-edit">
                <Chip className="chip-edit" label="+ ADD TAG" />
            </div>
        </Card>
    );
}
