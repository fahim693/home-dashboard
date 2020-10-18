import { Card, CardContent } from '@material-ui/core'
import { ArrowDropUp } from '@material-ui/icons';
import React from 'react'
import './notification.css'

const Notification = (props) => {
    return (
        <div style={{ width: 390 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ArrowDropUp style={{ color: '#fff', fontSize: 62 }} />
            </div>
            <div style={{ marginTop: -28, borderRadius: 6, backgroundColor: '#F3F4F6', }}>
                <div style={{ backgroundColor: '#fff', borderRadius: 6, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 18px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.22)', marginBottom: 1 }}>
                    <div style={{ fontWeight: 500, fontSize: 24, color: '#000' }}>Notifications</div>
                    <div onClick={() => props.setNotification(false)} className='not-icon-hover' style={{ cursor: 'pointer', height: 30, width: 30, borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <svg width="26" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3501 0.661633C14.8951 0.206633 14.1601 0.206633 13.7051 0.661633L8.00009 6.35497L2.29509 0.649966C1.84009 0.194966 1.10509 0.194966 0.650088 0.649966C0.195088 1.10497 0.195088 1.83997 0.650088 2.29497L6.35509 7.99997L0.650088 13.705C0.195088 14.16 0.195088 14.895 0.650088 15.35C1.10509 15.805 1.84009 15.805 2.29509 15.35L8.00009 9.64497L13.7051 15.35C14.1601 15.805 14.8951 15.805 15.3501 15.35C15.8051 14.895 15.8051 14.16 15.3501 13.705L9.64509 7.99997L15.3501 2.29497C15.7934 1.85163 15.7934 1.10497 15.3501 0.661633Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'scroll', height: 580, }}>
                    <div style={{ color: '#2C3C63', backgroundColor: '#E7EAF1', fontWeight: 'bold', padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>FRIDAY</div>
                        <div>JAN 3</div>
                    </div>
                    <div style={{ padding: 18 }}>
                        <Card style={{ padding: 18 }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ color: '#BDBDBD', fontSize: 14, marginBottom: 6 }}>5:06 PM</div>
                                    <div style={{ color: '#333333', fontSize: 20, fontWeight: 500, marginBottom: 6 }}>Appointment Completed</div>
                                    <div style={{ color: '#828282' }}>Appointment completed for John Doe on January 3rd, 2020 at 5:02 PM.</div>
                                </div>
                                <div style={{ cursor: 'pointer' }}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F2F2F2" />
                                        <path d="M20.7749 9.23414C20.4174 8.87664 19.8399 8.87664 19.4824 9.23414L14.9999 13.7075L10.5174 9.22497C10.1599 8.86747 9.58241 8.86747 9.22491 9.22497C8.86741 9.58247 8.86741 10.16 9.22491 10.5175L13.7074 15L9.22491 19.4825C8.86741 19.84 8.86741 20.4175 9.22491 20.775C9.58241 21.1325 10.1599 21.1325 10.5174 20.775L14.9999 16.2925L19.4824 20.775C19.8399 21.1325 20.4174 21.1325 20.7749 20.775C21.1324 20.4175 21.1324 19.84 20.7749 19.4825L16.2924 15L20.7749 10.5175C21.1232 10.1691 21.1232 9.58247 20.7749 9.23414Z" fill="black" />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                        <Card style={{ padding: 18, marginTop: 18 }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ color: '#BDBDBD', fontSize: 14, marginBottom: 6 }}>4:26 PM</div>
                                    <div style={{ color: '#333333', fontSize: 20, fontWeight: 500, marginBottom: 6 }}>Invoice Paid</div>
                                    <div style={{ color: '#828282' }}>Invoice paid by John Doe on January 3rd, 2020 at 4:12 PM.</div>
                                </div>
                                <div style={{ cursor: 'pointer' }}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F2F2F2" />
                                        <path d="M20.7749 9.23414C20.4174 8.87664 19.8399 8.87664 19.4824 9.23414L14.9999 13.7075L10.5174 9.22497C10.1599 8.86747 9.58241 8.86747 9.22491 9.22497C8.86741 9.58247 8.86741 10.16 9.22491 10.5175L13.7074 15L9.22491 19.4825C8.86741 19.84 8.86741 20.4175 9.22491 20.775C9.58241 21.1325 10.1599 21.1325 10.5174 20.775L14.9999 16.2925L19.4824 20.775C19.8399 21.1325 20.4174 21.1325 20.7749 20.775C21.1324 20.4175 21.1324 19.84 20.7749 19.4825L16.2924 15L20.7749 10.5175C21.1232 10.1691 21.1232 9.58247 20.7749 9.23414Z" fill="black" />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                        <Card style={{ padding: 18, marginTop: 18 }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ color: '#BDBDBD', fontSize: 14, marginBottom: 6 }}>3:02 PM</div>
                                    <div style={{ color: '#333333', fontSize: 20, fontWeight: 500, marginBottom: 6 }}>Appointment Completed</div>
                                    <div style={{ color: '#828282' }}>Appointment completed for John Doe on January 3rd, 2020 at 5:02 PM.</div>
                                </div>
                                <div style={{ cursor: 'pointer' }}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F2F2F2" />
                                        <path d="M20.7749 9.23414C20.4174 8.87664 19.8399 8.87664 19.4824 9.23414L14.9999 13.7075L10.5174 9.22497C10.1599 8.86747 9.58241 8.86747 9.22491 9.22497C8.86741 9.58247 8.86741 10.16 9.22491 10.5175L13.7074 15L9.22491 19.4825C8.86741 19.84 8.86741 20.4175 9.22491 20.775C9.58241 21.1325 10.1599 21.1325 10.5174 20.775L14.9999 16.2925L19.4824 20.775C19.8399 21.1325 20.4174 21.1325 20.7749 20.775C21.1324 20.4175 21.1324 19.84 20.7749 19.4825L16.2924 15L20.7749 10.5175C21.1232 10.1691 21.1232 9.58247 20.7749 9.23414Z" fill="black" />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div style={{ color: '#2C3C63', backgroundColor: '#E7EAF1', fontWeight: 'bold', padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>FRIDAY</div>
                        <div>JAN 3</div>
                    </div>
                    <div style={{ padding: 18 }}>
                        <Card style={{ padding: 18 }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ color: '#BDBDBD', fontSize: 14, marginBottom: 6 }}>5:06 PM</div>
                                    <div style={{ color: '#333333', fontSize: 20, fontWeight: 500, marginBottom: 6 }}>Appointment Completed</div>
                                    <div style={{ color: '#828282' }}>Appointment completed for John Doe on January 3rd, 2020 at 5:02 PM.</div>
                                </div>
                                <div style={{ cursor: 'pointer' }}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F2F2F2" />
                                        <path d="M20.7749 9.23414C20.4174 8.87664 19.8399 8.87664 19.4824 9.23414L14.9999 13.7075L10.5174 9.22497C10.1599 8.86747 9.58241 8.86747 9.22491 9.22497C8.86741 9.58247 8.86741 10.16 9.22491 10.5175L13.7074 15L9.22491 19.4825C8.86741 19.84 8.86741 20.4175 9.22491 20.775C9.58241 21.1325 10.1599 21.1325 10.5174 20.775L14.9999 16.2925L19.4824 20.775C19.8399 21.1325 20.4174 21.1325 20.7749 20.775C21.1324 20.4175 21.1324 19.84 20.7749 19.4825L16.2924 15L20.7749 10.5175C21.1232 10.1691 21.1232 9.58247 20.7749 9.23414Z" fill="black" />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                        <Card style={{ padding: 18, marginTop: 18 }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ color: '#BDBDBD', fontSize: 14, marginBottom: 6 }}>4:26 PM</div>
                                    <div style={{ color: '#333333', fontSize: 20, fontWeight: 500, marginBottom: 6 }}>Invoice Paid</div>
                                    <div style={{ color: '#828282' }}>Invoice paid by John Doe on January 3rd, 2020 at 4:12 PM.</div>
                                </div>
                                <div style={{ cursor: 'pointer' }}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F2F2F2" />
                                        <path d="M20.7749 9.23414C20.4174 8.87664 19.8399 8.87664 19.4824 9.23414L14.9999 13.7075L10.5174 9.22497C10.1599 8.86747 9.58241 8.86747 9.22491 9.22497C8.86741 9.58247 8.86741 10.16 9.22491 10.5175L13.7074 15L9.22491 19.4825C8.86741 19.84 8.86741 20.4175 9.22491 20.775C9.58241 21.1325 10.1599 21.1325 10.5174 20.775L14.9999 16.2925L19.4824 20.775C19.8399 21.1325 20.4174 21.1325 20.7749 20.775C21.1324 20.4175 21.1324 19.84 20.7749 19.4825L16.2924 15L20.7749 10.5175C21.1232 10.1691 21.1232 9.58247 20.7749 9.23414Z" fill="black" />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                        <Card style={{ padding: 18, marginTop: 18 }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ color: '#BDBDBD', fontSize: 14, marginBottom: 6 }}>3:02 PM</div>
                                    <div style={{ color: '#333333', fontSize: 20, fontWeight: 500, marginBottom: 6 }}>Appointment Completed</div>
                                    <div style={{ color: '#828282' }}>Appointment completed for John Doe on January 3rd, 2020 at 5:02 PM.</div>
                                </div>
                                <div style={{ cursor: 'pointer' }}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F2F2F2" />
                                        <path d="M20.7749 9.23414C20.4174 8.87664 19.8399 8.87664 19.4824 9.23414L14.9999 13.7075L10.5174 9.22497C10.1599 8.86747 9.58241 8.86747 9.22491 9.22497C8.86741 9.58247 8.86741 10.16 9.22491 10.5175L13.7074 15L9.22491 19.4825C8.86741 19.84 8.86741 20.4175 9.22491 20.775C9.58241 21.1325 10.1599 21.1325 10.5174 20.775L14.9999 16.2925L19.4824 20.775C19.8399 21.1325 20.4174 21.1325 20.7749 20.775C21.1324 20.4175 21.1324 19.84 20.7749 19.4825L16.2924 15L20.7749 10.5175C21.1232 10.1691 21.1232 9.58247 20.7749 9.23414Z" fill="black" />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Notification;