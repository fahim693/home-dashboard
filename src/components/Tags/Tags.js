import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card/Card'
import { Chip } from '@material-ui/core';
import { LocalOfferRounded } from '@material-ui/icons';


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
