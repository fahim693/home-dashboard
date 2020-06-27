import React from 'react'
import Card from '../Card/Card'
import { RemoveCircleRounded, NavigateNextRounded, RoomRounded } from '@material-ui/icons';
import './addresses.css'
import AppointmentAddressEdit from '../AppointmentAddressEdit/AppointmentAddressEdit';
import { Chip } from '@material-ui/core';

const Addresses = (props) => {
    return (
        <Card
            title="Addresses"
            icon={<RoomRounded className="main-title-icon" />}
            cardType={1}
        >
            <div className="address-container">
                {
                    props.isEdit ?
                        <div>
                            <div className="addresses-details">
                                <div style={{
                                    display: 'flex'
                                }}>
                                    <RemoveCircleRounded className="remove-icon" />
                                    <div>
                                        <div style={{ fontSize: 20, fontWeight: 500, color: '#2A95C5' }}>Permanent Address</div>
                                        <div style={{ fontSize: 17, margin: '9px 0' }}>941 Baker's Street</div>
                                        <div style={{ fontSize: 17, }}>New York NY 50008</div>
                                    </div>
                                </div>
                                <NavigateNextRounded style={{ fontSize: 32, fontWeight: 600, color: '#2A95C5' }} />
                            </div>
                            <div className="addresses-details" style={{backgroundColor: '#fff'}}>
                                <div style={{
                                    display: 'flex',
                                }}>
                                    <RemoveCircleRounded className="remove-icon" />
                                    <div>
                                        <div style={{ fontSize: 20, fontWeight: 500 }}>Temporary Address 1</div>
                                        <div style={{ fontSize: 17, margin: '9px 0' }}>941 Baker's Street</div>
                                        <div style={{ fontSize: 17, }}>New York NY 50008</div>
                                    </div>
                                </div>
                                <NavigateNextRounded style={{ fontSize: 32, fontWeight: 600, color: '#333' }} />
                            </div>
                            <div className="addresses-details" style={{backgroundColor: '#fff'}}>
                                <div style={{
                                    display: 'flex',
                                }}>
                                    <RemoveCircleRounded className="remove-icon" />
                                    <div>
                                        <div style={{ fontSize: 20, fontWeight: 500 }}>Temporary Address 2</div>
                                        <div style={{ fontSize: 17, margin: '9px 0' }}>941 Baker's Street</div>
                                        <div style={{ fontSize: 17, }}>New York NY 50008</div>
                                    </div>
                                </div>
                                <NavigateNextRounded style={{ fontSize: 32, fontWeight: 600, color: '#333' }} />
                            </div>
                        </div>
                        : <div className="addresses-details">
                            <div style={{
                                display: 'flex'
                            }}>
                                <RemoveCircleRounded style={{ marginRight: 13, color: '#dadada' }} />
                                <div style={{ fontSize: 20, fontWeight: 500, color: '#2A95C5' }}>Permanent Address</div>
                            </div>
                            <NavigateNextRounded style={{ fontSize: 28, fontWeight: 600, color: '#2A95C5' }} />
                        </div>
                }

                <div className="addresses-fields">
                    <AppointmentAddressEdit data={props.data} withAddressType={true} />
                </div>
            </div>
            <div style={{ margin: "1.6rem 0 1.8rem", marginLeft: 32 }} className="chips-edit">
                <Chip className="chip-edit" label="+ ADD ADDRESSES" />
            </div>
        </Card>
    )
}
export default Addresses;