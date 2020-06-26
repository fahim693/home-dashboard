import React from 'react'
import Card from '../Card/Card'
import { EventNoteRounded, RemoveCircleRounded, NavigateNextRounded } from '@material-ui/icons';
import './addresses.css'
import AppointmentAddressEdit from '../AppointmentAddressEdit/AppointmentAddressEdit';
import { Chip } from '@material-ui/core';

const Addresses = () => {
    return (
        <Card
            title="Addresses"
            icon={<EventNoteRounded className="main-title-icon" />}
            cardType={1}
        >
            <div className="address-container">
                <div className="addresses-details">
                    <div style={{
                        display: 'flex'
                    }}>
                        <RemoveCircleRounded style={{ marginRight: 13, color: '#dadada' }} />
                        <span style={{ fontSize: 20, fontWeight: 500, color: '#2A95C5' }}>Permanent Address</span>
                    </div>
                    <NavigateNextRounded style={{ fontSize: 28, fontWeight: 600, color: '#2A95C5' }} />
                </div>
                <div className="addresses-fields">
                    <AppointmentAddressEdit withAddressType={true} />
                </div>
            </div>
            <div style={{ margin: "1.6rem 0 1.8rem", marginLeft: 32 }} className="chips-edit">
                <Chip className="chip-edit" label="+ ADD ADDRESSES" />
            </div>
        </Card>
    )
}
export default Addresses;