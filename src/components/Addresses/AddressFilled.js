import React from 'react'
import Card from '../Card/Card'
import { NavigateNextRounded, RoomRounded } from '@material-ui/icons';
import './addresses.css'
import GoogleMapReact from 'google-map-react';

const Addresses = () => {
    const defaultProps = {
        center: {
            lat: 40.739020,
            lng: -73.840226
        },
        zoom: 11
    };

    const AnyReactComponent = ({ text }) => <RoomRounded style={{fontSize: 45, color:'#E24E3C'}}/>

    return (
        <Card
            title="Addresses"
            icon={<RoomRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            <div className="address-container" style={{ border: 0 }}>
                <div>
                    <div className="addresses-details active">
                        <div>
                            <div style={{ fontSize: 20, fontWeight: 500, color: '#2A95C5' }}>Permanent Address</div>
                            <div style={{ fontSize: 17, color: '#2A95C5', margin: '9px 0' }}>941 Baker's Street</div>
                            <div style={{ fontSize: 17, color: '#2A95C5' }}>New York NY 50008</div>
                        </div>
                        <NavigateNextRounded style={{ fontSize: 32, fontWeight: 600, color: '#2A95C5' }} />
                    </div>
                    <div className="addresses-details inactive">
                        <div>
                            <div style={{ fontSize: 20, fontWeight: 500 }}>Temporary Address 1</div>
                            <div style={{ fontSize: 17, margin: '9px 0' }}>941 Baker's Street</div>
                            <div style={{ fontSize: 17, }}>New York NY 50008</div>
                        </div>
                        <NavigateNextRounded style={{ fontSize: 32, fontWeight: 600, color: '#333' }} />
                    </div>
                    <div className="addresses-details inactive">
                        <div>
                            <div style={{ fontSize: 20, fontWeight: 500 }}>Temporary Address 2</div>
                            <div style={{ fontSize: 17, margin: '9px 0' }}>941 Baker's Street</div>
                            <div style={{ fontSize: 17, }}>New York NY 50008</div>
                        </div>
                        <NavigateNextRounded style={{ fontSize: 32, fontWeight: 600, color: '#333' }} />
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