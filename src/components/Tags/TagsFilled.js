import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card/Card'
import { Chip } from '@material-ui/core';
import { LocalOfferRounded } from '@material-ui/icons'
import { data } from '../../data/UserData'

export default function CenteredGrid() {

    return (
        <Card
            title="Tags"
            icon={<LocalOfferRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            <div className="chips" style={{padding: '8px 0 21px 24px'}}>
                {
                    data.tags.map(tag => (
                        <Chip key={tag} className="chip" label={tag} />
                    ))
                }
            </div>
        </Card>
    );
}
