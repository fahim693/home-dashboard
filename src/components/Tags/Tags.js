import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card/Card'
import { Chip } from '@material-ui/core';
import { LocalOfferRounded } from '@material-ui/icons';
import { MdRemoveCircle } from 'react-icons/md';
import TagButtonToggle from '../TagButtonToggle.js/TagButtonToggle';


export default function Tags(props) {
    const [clickState, setClickState] = useState(0)

    const handleClick = () => {
        setClickState(clickState + 1)
    }

    const handleChangeTag = (e) => {
        setClickState(clickState + 1)
    }

    return (
        <Card
            title="Tags"
            icon={<LocalOfferRounded className="main-title-icon" />}
            cardType={1}
        >
            <div className="chips" style={{ padding: '10px 0 3px 22px' }}>
                {
                    props.data.tags.map(tag => (
                        <Chip key={tag} className="chip" label={tag} onDelete={() => { }} deleteIcon={<MdRemoveCircle style={{ color: "#FF0000" }} />} />

                    ))
                }
            </div>
            <div style={{
                padding: '0 22px 20px'
            }}>
                <TagButtonToggle clickState={clickState} handleClick={handleClick} handleChangeTag={handleChangeTag} />
            </div>

            {/* <div style={{ margin: "1.3rem 0 1.8rem 1.37rem" }} className="chips-edit">
                <Chip className="chip-edit" label="+ ADD TAG" />
            </div> */}
        </Card>
    );
}
