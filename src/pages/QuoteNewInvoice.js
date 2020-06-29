import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { Typography } from '@material-ui/core';
import { RoomRounded, LabelImportantRounded, MonetizationOnRounded } from '@material-ui/icons';
import Invoice from '../components/Invoice Table/InvoiceEdit';
import Card from '../components/Card/Card'
import BannerButtonOnly from '../components/CustomerBanner/BannerButtonOnly';
import Others from '../components/Others/Others';
import AppointmentAddressInvoice from '../components/AppointmentAddressInvoice/AppointmentAddressInvoice';
import { items, services } from '../data/NewInvoiceData'
import TimelineQuotes from '../components/Timeline/TimelineQuotes';

const data = {
    tags: [],
    attachments: [],
    source: 0
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    },
    formControl: {
        minWidth: 185,
    }
}));

export default function QuoteNewInvoice() {
    const classes = useStyles();
    const [fieldValue, setFieldValue] = useState({
        street_address: '941, Baker’s Street',
        notes: "",
    })


    const handleOnChange = (e) => {
        setFieldValue({
            ...fieldValue,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Layout active={3}>
            <div className={classes.root}>
                <BannerButtonOnly text="SAVE" link='/quote' />
                <TimelineQuotes step={1} />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card
                                    title="Appointment Address"
                                    icon={<RoomRounded className="main-title-icon" />}
                                >
                                    <Typography variant="body2" component="p" style={{ fontSize: 20 }}>
                                        <AppointmentAddressInvoice />
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    title="Others"
                                    icon={<LabelImportantRounded className="main-title-icon" />}
                                >
                                    <Others
                                        notes={fieldValue.notes}
                                        source={fieldValue.source}
                                        handleOnChange={handleOnChange}
                                        data={data}
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card
                                    title="Invoice"
                                    icon={<MonetizationOnRounded className="main-title-icon" />}
                                    cardType={0}
                                >
                                    <Invoice
                                        items={items}
                                        services={services}
                                        type={1}
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Layout >
    );
}
