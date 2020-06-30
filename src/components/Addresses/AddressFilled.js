import React, { useState } from 'react'
import Card from '../Card/Card'
import { NavigateNextRounded, RoomRounded } from '@material-ui/icons';
import './addresses.css'
import GoogleMapReact from 'google-map-react';

const Addresses = () => {
    const [selected, setSelected] = useState({
        addr1: 'address-active',
        addr2: 'inactive',
        addr3: 'inactive'
    })
    const defaultProps = {
        center: {
            lat: 40.739020,
            lng: -73.840226
        },
        zoom: 11
    };

    const AnyReactComponent = ({ text }) => <RoomRounded style={{ fontSize: 45, color: '#E24E3C' }} />

    const handleSetActive = (e) => {
        console.log('jjjk');
        if (e === 0) {
            setSelected({
                addr1: 'address-active',
                addr2: 'inactive',
                addr3: 'inactive'
            })
        } else if (e === 1) {
            setSelected({
                addr2: 'address-active',
                addr1: 'inactive',
                addr3: 'inactive'
            })
        } else if (e === 2) {
            setSelected({
                addr3: 'address-active',
                addr2: 'inactive',
                addr1: 'inactive'
            })
        }
    }

    return (
        <Card
            title="Addresses"
            icon={<RoomRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            <div className="address-container" style={{ border: 0 }}>
                <div>
                    <div onClick={() => handleSetActive(0)} className={`addresses-details ${selected.addr1}`}>
                        <div>
                            <div style={{ fontSize: 20, fontWeight: 500, }}>Permanent Address</div>
                            <div style={{ fontSize: 17, margin: '9px 0' }}>941 Baker's Street</div>
                            <div style={{ fontSize: 17, }}>New York NY 50008</div>
                        </div>
                        <NavigateNextRounded style={{ fontSize: 32, fontWeight: 600 }} />
                    </div>
                    <div onClick={() => handleSetActive(1)} className={`addresses-details ${selected.addr2}`}>
                        <div>
                            <div style={{ fontSize: 20, fontWeight: 500 }}>Temporary Address 1</div>
                            <div style={{ fontSize: 17, margin: '9px 0' }}>941 Baker's Street</div>
                            <div style={{ fontSize: 17, }}>New York NY 50008</div>
                        </div>
                        <NavigateNextRounded style={{ fontSize: 32, fontWeight: 600 }} />
                    </div>
                    <div onClick={() => handleSetActive(2)} className={`addresses-details ${selected.addr3}`}>
                        <div>
                            <div style={{ fontSize: 20, fontWeight: 500 }}>Temporary Address 2</div>
                            <div style={{ fontSize: 17, margin: '9px 0' }}>941 Baker's Street</div>
                            <div style={{ fontSize: 17, }}>New York NY 50008</div>
                        </div>
                        <NavigateNextRounded style={{ fontSize: 32, fontWeight: 600 }} />
                    </div>
                </div>
                <div className="addresses-fields" style={{ padding: 0 }}>
                    <div style={{ height: '370px', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyAMLkvMBnv8lUJOdlCz4a3Kns6zRoVYT3A' }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={40.739020}
                                lng={-73.840226}
                                text="This is marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default Addresses;