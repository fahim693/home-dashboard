import { Card, CardContent } from '@material-ui/core';
import React from 'react';

const PackageDetails = () => {
    return (
        <Card style={{ border: '1px solid #E0E0E0' }}>
            <div style={{ color: '#fff', backgroundColor: '#2A95C5', height: 56, fontSize: 27, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                What’s Included
            </div>
            <CardContent>
                <div style={{ display: 'flex', padding: '26px 32px 26px 26px' }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 22 }}>
                            <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.1063 15.1293L18.5604 13.5834L11.4438 20.7001L8.35208 17.6084L6.80625 19.1543L11.4438 23.7918L20.1063 15.1293ZM23.7083 3.37509H22.25V0.45842H19.3333V3.37509H7.66667V0.45842H4.75V3.37509H3.29167C1.67292 3.37509 0.389583 4.68759 0.389583 6.29175L0.375 26.7084C0.375 28.3126 1.67292 29.6251 3.29167 29.6251H23.7083C25.3125 29.6251 26.625 28.3126 26.625 26.7084V6.29175C26.625 4.68759 25.3125 3.37509 23.7083 3.37509ZM23.7083 26.7084H3.29167V10.6668H23.7083V26.7084Z" fill="#BDBDBD" />
                            </svg>
                            <span style={{ color: '#333', fontSize: 22, fontWeight: 500, marginLeft: 14 }}>Scheduling & Dispatching</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 22 }}>
                            <svg width="27" height="30" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4999 0.684296C6.87356 0.684296 0.684082 6.87377 0.684082 14.5001C0.684082 22.1264 6.87356 28.3159 14.4999 28.3159C22.1262 28.3159 28.3157 22.1264 28.3157 14.5001C28.3157 6.87377 22.1262 0.684296 14.4999 0.684296ZM16.4479 22.9139V23.7152C16.4479 24.7238 15.6189 25.5527 14.6104 25.5527H14.5966C13.588 25.5527 12.7591 24.7238 12.7591 23.7152V22.8863C10.9216 22.4994 9.29132 21.4909 8.60053 19.7915C8.28277 19.0317 8.87684 18.1889 9.70579 18.1889H10.0374C10.5486 18.1889 10.963 18.5343 11.1565 19.0179C11.5571 20.054 12.6071 20.7725 14.6242 20.7725C17.3321 20.7725 17.94 19.4185 17.94 18.5757C17.94 17.429 17.3321 16.3514 14.2512 15.6192C10.8249 14.7902 8.47619 13.381 8.47619 10.5488C8.47619 8.17245 10.3966 6.62509 12.7729 6.1139V5.28495C12.7729 4.2764 13.6018 3.44745 14.6104 3.44745H14.6242C15.6328 3.44745 16.4617 4.2764 16.4617 5.28495V6.14153C18.3683 6.61127 19.5703 7.79943 20.0953 9.2639C20.3716 10.0238 19.7913 10.8251 18.9762 10.8251H18.617C18.1058 10.8251 17.6913 10.4659 17.5532 9.96851C17.2354 8.91851 16.365 8.24153 14.6242 8.24153C12.5518 8.24153 11.3084 9.18101 11.3084 10.5073C11.3084 11.6678 12.2064 12.4277 14.9972 13.1461C17.788 13.8646 20.7722 15.0665 20.7722 18.5481C20.7446 21.0764 18.8518 22.458 16.4479 22.9139Z" fill="#BDBDBD" />
                            </svg>
                            <span style={{ color: '#333', fontSize: 22, fontWeight: 500, marginLeft: 14 }}>Generate Invoices</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <svg width="27" height="30" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.375 14.9583H12.0417V0.375H0.375V14.9583ZM0.375 26.625H12.0417V17.875H0.375V26.625ZM14.9583 26.625H26.625V12.0417H14.9583V26.625ZM14.9583 0.375V9.125H26.625V0.375H14.9583Z" fill="#BDBDBD" />
                            </svg>
                            <span style={{ color: '#333', fontSize: 22, fontWeight: 500, marginLeft: 14 }}>Reporting & Dashboard</span>
                        </div>
                    </div>


                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 22 }}>
                            <svg width="31" height="30" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.1675 6.75068H21.3341V3.83401C21.3341 2.21526 20.0362 0.917343 18.4175 0.917343H12.5841C10.9654 0.917343 9.66748 2.21526 9.66748 3.83401V6.75068H3.83415C2.2154 6.75068 0.932064 8.04859 0.932064 9.66734L0.91748 25.709C0.91748 27.3278 2.2154 28.6257 3.83415 28.6257H27.1675C28.7862 28.6257 30.0841 27.3278 30.0841 25.709V9.66734C30.0841 8.04859 28.7862 6.75068 27.1675 6.75068ZM18.4175 6.75068H12.5841V3.83401H18.4175V6.75068Z" fill="#BDBDBD" />
                            </svg>
                            <span style={{ color: '#333', fontSize: 22, fontWeight: 500, marginLeft: 14 }}>Manage Appointments</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 22 }}>
                            <svg width="31" height="30" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.1675 0.832642H3.83415C2.2154 0.832642 0.932064 2.13056 0.932064 3.74931L0.91748 21.2493C0.91748 22.8681 2.2154 24.166 3.83415 24.166H27.1675C28.7862 24.166 30.0841 22.8681 30.0841 21.2493V3.74931C30.0841 2.13056 28.7862 0.832642 27.1675 0.832642ZM27.1675 21.2493H3.83415V12.4993H27.1675V21.2493ZM27.1675 6.66597H3.83415V3.74931H27.1675V6.66597Z" fill="#BDBDBD" />
                            </svg>
                            <span style={{ color: '#333', fontSize: 22, fontWeight: 500, marginLeft: 14 }}>Capture Payments</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <svg width="31" height="30" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.2508 11.041V13.9576H30.0841V11.041H24.2508ZM21.3341 20.6806C22.7341 21.716 24.5571 23.0868 26.0008 24.166C26.5841 23.3931 27.1675 22.6056 27.7508 21.8326C26.3071 20.7535 24.4841 19.3826 23.0841 18.3326C22.5008 19.1201 21.9175 19.9076 21.3341 20.6806ZM27.7508 3.16597C27.1675 2.39306 26.5841 1.60556 26.0008 0.832642C24.5571 1.91181 22.7341 3.28264 21.3341 4.33264C21.9175 5.10556 22.5008 5.89306 23.0841 6.66597C24.4841 5.61597 26.3071 4.25972 27.7508 3.16597ZM3.83415 8.12431C2.22998 8.12431 0.91748 9.43681 0.91748 11.041V13.9576C0.91748 15.5618 2.22998 16.8743 3.83415 16.8743H5.29248V22.7076H8.20915V16.8743H9.66748L16.9591 21.2493V3.74931L9.66748 8.12431H3.83415ZM20.605 12.4993C20.605 10.5597 19.7591 8.80972 18.4175 7.61389V17.3701C19.7591 16.1889 20.605 14.4389 20.605 12.4993Z" fill="#BDBDBD" />
                            </svg>
                            <span style={{ color: '#333', fontSize: 22, fontWeight: 500, marginLeft: 14 }}>Follow-up Marketing</span>
                        </div>
                    </div>


                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 22 }}>
                            <svg width="25" height="30" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.9819 0.698409C25.7986 0.698409 25.6154 0.768897 25.4885 0.909875L24.3748 2.0236C24.0928 2.30555 23.6558 2.30555 23.3738 2.0236L22.2601 0.909875C21.9781 0.62792 21.5411 0.62792 21.2591 0.909875L20.1454 2.0236C19.8635 2.30555 19.4264 2.30555 19.1445 2.0236L18.0308 0.909875C17.7488 0.62792 17.3118 0.62792 17.0298 0.909875L15.9161 2.0236C15.6342 2.30555 15.1971 2.30555 14.9152 2.0236L13.8014 0.909875C13.5195 0.62792 13.0825 0.62792 12.8005 0.909875L11.6868 2.0236C11.4048 2.30555 10.9678 2.30555 10.6858 2.0236L9.55802 0.895777C9.27607 0.613822 8.83904 0.613822 8.55708 0.895777L7.44336 2.0236C7.16141 2.30555 6.72438 2.30555 6.44242 2.0236L5.3287 0.895777C5.04675 0.613822 4.60972 0.613822 4.32776 0.895777L3.21404 2.0236C2.93208 2.30555 2.49505 2.30555 2.2131 2.0236L1.09938 0.895777C0.972498 0.768897 0.789228 0.698409 0.605957 0.698409V28.3159C0.789228 28.3159 0.972498 28.2454 1.09938 28.1044L2.2131 26.9907C2.49505 26.7087 2.93208 26.7087 3.21404 26.9907L4.32776 28.1044C4.60972 28.3864 5.04675 28.3864 5.3287 28.1044L6.44242 26.9907C6.72438 26.7087 7.16141 26.7087 7.44336 26.9907L8.55708 28.1044C8.83904 28.3864 9.27607 28.3864 9.55802 28.1044L10.6717 26.9907C10.9537 26.7087 11.3907 26.7087 11.6727 26.9907L12.7864 28.1044C13.0684 28.3864 13.5054 28.3864 13.7873 28.1044L14.9011 26.9907C15.183 26.7087 15.6201 26.7087 15.902 26.9907L17.0157 28.1044C17.2977 28.3864 17.7347 28.3864 18.0167 28.1044L19.1304 26.9907C19.4123 26.7087 19.8494 26.7087 20.1313 26.9907L21.2451 28.1044C21.527 28.3864 21.964 28.3864 22.246 28.1044L23.3597 26.9907C23.6417 26.7087 24.0787 26.7087 24.3607 26.9907L25.4744 28.1044C25.6154 28.2454 25.7986 28.3159 25.9678 28.3159V0.698409H25.9819ZM20.3428 21.549H6.24505C5.46968 21.549 4.83528 20.9146 4.83528 20.1392C4.83528 19.3638 5.46968 18.7294 6.24505 18.7294H20.3428C21.1182 18.7294 21.7526 19.3638 21.7526 20.1392C21.7526 20.9146 21.1182 21.549 20.3428 21.549ZM20.3428 15.9099H6.24505C5.46968 15.9099 4.83528 15.2755 4.83528 14.5001C4.83528 13.7247 5.46968 13.0903 6.24505 13.0903H20.3428C21.1182 13.0903 21.7526 13.7247 21.7526 14.5001C21.7526 15.2755 21.1182 15.9099 20.3428 15.9099ZM20.3428 10.2708H6.24505C5.46968 10.2708 4.83528 9.63638 4.83528 8.861C4.83528 8.08563 5.46968 7.45123 6.24505 7.45123H20.3428C21.1182 7.45123 21.7526 8.08563 21.7526 8.861C21.7526 9.63638 21.1182 10.2708 20.3428 10.2708Z" fill="#BDBDBD" />
                            </svg>
                            <span style={{ color: '#333', fontSize: 22, fontWeight: 500, marginLeft: 14 }}>Create Quotes</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 22 }}>
                            <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4992 29.0826C14.1034 29.0826 15.4159 27.7701 15.4159 26.166H9.58252C9.58252 27.7701 10.8804 29.0826 12.4992 29.0826ZM21.2492 20.3326V13.041C21.2492 8.56389 18.8575 4.81597 14.6867 3.82431V2.83264C14.6867 1.62222 13.7096 0.645142 12.4992 0.645142C11.2888 0.645142 10.3117 1.62222 10.3117 2.83264V3.82431C6.12627 4.81597 3.74919 8.54931 3.74919 13.041V20.3326L0.83252 23.2493V24.7076H24.1659V23.2493L21.2492 20.3326Z" fill="#BDBDBD" />
                            </svg>
                            <span style={{ color: '#333', fontSize: 22, fontWeight: 500, marginLeft: 14 }}>Notifications & Alerts</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <svg width="25" height="30" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.2085 24.25C7.60433 24.25 6.30641 25.5625 6.30641 27.1667C6.30641 28.7708 7.60433 30.0833 9.2085 30.0833C10.8127 30.0833 12.1252 28.7708 12.1252 27.1667C12.1252 25.5625 10.8127 24.25 9.2085 24.25ZM0.458496 0.916656V3.83332H3.37516L8.62516 14.9021L6.65641 18.475C6.42308 18.8833 6.29183 19.3646 6.29183 19.875C6.29183 21.4792 7.60433 22.7917 9.2085 22.7917H26.7085V19.875H9.821C9.61683 19.875 9.45641 19.7146 9.45641 19.5104L9.50016 19.3354L10.8127 16.9583H21.6772C22.771 16.9583 23.7335 16.3604 24.2293 15.4562L29.4502 5.99166C29.5668 5.78749 29.6252 5.53957 29.6252 5.29166C29.6252 4.48957 28.9689 3.83332 28.1668 3.83332H6.59808L5.22725 0.916656H0.458496ZM23.7918 24.25C22.1877 24.25 20.8897 25.5625 20.8897 27.1667C20.8897 28.7708 22.1877 30.0833 23.7918 30.0833C25.396 30.0833 26.7085 28.7708 26.7085 27.1667C26.7085 25.5625 25.396 24.25 23.7918 24.25Z" fill="#BDBDBD" />
                            </svg>
                            <span style={{ color: '#333', fontSize: 22, fontWeight: 500, marginLeft: 14 }}>Online Booking</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default PackageDetails;