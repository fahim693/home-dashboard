import React from 'react'
import './banner.css'
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const BannerButtonOnly = (props) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 45
        }}>
            <Button style={{ width: 120 }} onClick={() => props.history.push(props.link)} variant='contained' className="btn-primary">{props.text}</Button>
        </div >
    )
}

export default withRouter(BannerButtonOnly);