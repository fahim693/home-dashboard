import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { FormatListBulletedRounded, StarBorderRounded, BusinessRounded, CreditCardRounded, AttachMoneyRounded, QueryBuilderRounded } from '@material-ui/icons';
import MoreOptionCard from '../components/Card/MoreOptionCard';
import '../styles/more.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    }
}));

const options = [
    {
        icon: <FormatListBulletedRounded style={{ color: '#58BFEF' }} className='option-icon-style' />,
        name: 'Price Book',
        url: '/item-table'
    },
    {
        icon: <QueryBuilderRounded style={{ color: '#7EC96F' }} className='option-icon-style' />,
        name: 'Hours',
        url: '/hours',
    },
    {
        icon: <AttachMoneyRounded style={{ color: '#5F9FFF' }} className='option-icon-style' />,
        name: 'Finance'
    },
    {
        icon: <CreditCardRounded style={{ color: '#A083F2' }} className='option-icon-style' />,
        name: 'Credit Card Sign-Up'
    },
    {
        icon: <BusinessRounded style={{ color: '#F99090' }} className='option-icon-style' />,
        name: 'Business Profile',
        url: '/business-profile'
    },
    {
        icon: <StarBorderRounded style={{ color: '#FFB281' }} className='option-icon-style' />,
        name: 'Subscription',
        url: true
    },
]

export default function More() {
    const classes = useStyles();

    return (
        <Layout active={6}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {
                        options.map(item => (
                            <Grid key={item.name} item xs={12} md={3} >
                                <MoreOptionCard
                                    icon={item.icon}
                                    name={item.name}
                                    url={item.url}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </Layout >
    );
}
