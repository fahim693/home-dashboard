import React from 'react'
import { Typography } from '@material-ui/core';
import Card from '../Card/Card'
import { LocationOnRounded, RoomRounded } from '@material-ui/icons';
import GoogleMapReact from 'google-map-react';

const BusinessAddresses = () => {

    const defaultProps = {
        center: {
            lat: 40.739020,
            lng: -73.840226
        },
        zoom: 11
    };

    const AnyReactComponent = ({ text }) => <RoomRounded style={{ fontSize: 45, color: '#E24E3C' }} />

    return (
        <Card
            title="Business Address"
            icon={<LocationOnRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            <div style={{ height: '200px', width: '100%' }}>
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
            <div style={{ padding: '17px 25px 17px 25px' }}>
                <Typography className="title-heads" variant="body2" component="p" >
                    Street Address
            </Typography>
                <Typography variant="body2" component="p" style={{ fontSize: 20 }}>941 Baker's Street</Typography>
                <br />
                <Typography className="title-heads" variant="body2" component="p" >
                    City
            </Typography>
                <Typography variant="body2" component="p" style={{ fontSize: 20 }}>New York</Typography>
                <br />
                <Typography className="title-heads" variant="body2" component="p" >
                    State
            </Typography>
                <Typography variant="body2" component="p" style={{ fontSize: 20 }}>New York</Typography>
                <br />
                <Typography className="title-heads" variant="body2" component="p" >
                    ZIP
            </Typography>
                <Typography variant="body2" component="p" style={{ fontSize: 20 }}>50008</Typography>
            </div>
        </Card>
    )
}

export default BusinessAddresses;