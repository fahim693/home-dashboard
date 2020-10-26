import { Button, Switch } from '@material-ui/core'
import React, { useState } from 'react'
import Billing from './Billing';
import Packages from './Packages';
import './subscription.css'

const Subscribe = (props) => {
    const [page, setPage] = useState(0)
    return (
        <div>
            <div style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 18px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.22)', marginBottom: 1 }}>
                <div style={{ flex: 1, fontWeight: 500, fontSize: 24, color: '#000' }}>Choose Plan</div>
                <div className='subscription-switch'>
                    <div style={{ fontSize: 20, fontWeight: 500, marginRight: 7 }}>Billed Monthly</div>
                    <Switch
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <div style={{ fontSize: 20, fontWeight: 500, marginLeft: 7 }}>Billed Yearly</div>
                    <div style={{ marginLeft: 14, backgroundColor: '#F2C94C', height: 30, width: 92, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, fontSize: 16, fontWeight: 500 }}>Save 20%</div>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant='outlined' style={{ border: '2px solid #2A95C5', color: '#2A95C5', marginRight: 24 }}>Cancel</Button>
                    <Button variant='contained' onClick={() => setPage(page + 1)} style={{ backgroundColor: '#2A95C5', color: '#fff' }}>Pay Now</Button>
                </div>
            </div>

            {
                page === 0 ?
                    <div style={{ padding: '40px 60px' }}>
                        <Packages />
                    </div> : page === 1 ?
                        <div style={{ padding: '30px 60px 40px', backgroundColor: '#fff' }}>
                            <Billing />
                        </div> : ''
            }

        </div >
    )
}

export default Subscribe;