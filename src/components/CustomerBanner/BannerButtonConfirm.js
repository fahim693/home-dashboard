import React from 'react'
import './banner.css'
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { MdCheck, MdClose } from 'react-icons/md';

const BannerButtonOnly = (props) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 45,
            marginBottom: 45
        }}>
            <div>
                <Button variant='contained' className="btn-cancel">
                    <MdClose className='btn-icon btn-icon-cancel' />
                                    CANCEL
                </Button>
            </div>
            <div style={{
                marginLeft: 16
            }}>
                <Button variant='contained' className="btn-save">
                    <MdCheck className='btn-icon' />
                                    SAVE
                </Button>
            </div>
        </div >
    )
}

export default withRouter(BannerButtonOnly);