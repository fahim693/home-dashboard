import { Button, Switch } from '@material-ui/core'
import React, { useState } from 'react'
import Billing from './Billing';
import Packages from './Packages';
import './subscription.css'
import Success from './Success';

const Subscribe = (props) => {
    const [checked, setChecked] = useState(false)
    return (
        <div >
            {
                props.page === 2 ?
                    <Success setOpen={props.setOpen} setPage={props.setPage} /> :
                    <div style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 18px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.22)', marginBottom: 1, borderTopLeftRadius: 6, borderTopRightRadius: 6 }}>
                        <div style={{ flex: 1, fontWeight: 500, fontSize: 24, color: '#000' }}>Choose Plan</div>
                        <div className='subscription-switch'>
                            <div style={{ fontSize: 20, fontWeight: 500, marginRight: 7 }}>Billed Monthly</div>
                            <Switch
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                                color="primary"
                                name="checked"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            <div style={{ fontSize: 20, fontWeight: 500, marginLeft: 7 }}>Billed Yearly</div>
                            <div style={{ marginLeft: 14, backgroundColor: '#F2C94C', height: 30, width: 92, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, fontSize: 16, fontWeight: 500 }}>Save 20%</div>
                        </div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Button variant='outlined' onClick={() => {
                                props.setOpen(false)
                                window.setTimeout(() => {
                                    props.setPage(0)
                                }, 200)
                            }} style={{ border: '2px solid #2A95C5', color: '#2A95C5', marginRight: 24 }}>Cancel</Button>
                            <Button variant='contained' onClick={() => props.setPage(props.page + 1)} style={{ backgroundColor: '#2A95C5', color: '#fff' }}>Pay Now</Button>
                        </div>
                    </div>
            }

            {
                props.page === 0 ?
                    <div style={{ padding: '28px 60px', backgroundColor: '#f3f4f6', borderRadius: '0 0 6px 6px' }}>
                        <Packages checked={checked} />
                    </div> : props.page === 1 ?
                        <div style={{ padding: '28px 60px', backgroundColor: '#fff', borderRadius: '0 0 6px 6px' }}>
                            <Billing />
                        </div> : ''
            }

        </div >
    )
}

export default Subscribe;