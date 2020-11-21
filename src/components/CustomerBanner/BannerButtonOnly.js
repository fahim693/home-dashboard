import React from 'react'
import './banner.css'
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';

const BannerButtonOnly = (props) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 45
        }}>
            {
                props.text === 'SAVE' ?
                    <Button onClick={() => props.history.push(props.link)} variant='contained' className="btn-save">
                        <MdCheck className='btn-icon' />
                        {props.text}
                    </Button>
                    : props.text === 'SCHEDULE' ?
                        <Button onClick={() => props.setOpen(true)} variant='contained' className="btn-primary">{props.text}</Button> :
                        <Button onClick={() => props.history.push(props.link)} variant='contained' className="btn-primary">{props.text}</Button>
            }

        </div >
    )
}

export default withRouter(BannerButtonOnly);