import { Divider } from '@material-ui/core'
import React from 'react'

const services = [
    {
        name: 'Carpet Cleaning (1 Bedroom)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate metus ut urna blandit, ac ornare eros facilisis. Suspendisse magna arcu, ultricies et ante ut, dictum cursus arcu.',
        qty: '1',
        price: '2,000.00',
        total: '2,000.00'
    },
    {
        name: 'Room Cleaning (2 Bedrooms)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate metus ut urna blandit, ac ornare eros facilisis. Suspendisse magna arcu, ultricies et ante ut, dictum cursus arcu.',
        qty: '1',
        price: '1,800.00',
        total: '1,800.00'
    },
    {
        name: 'Bathroom Cleaning (1 Bathroom)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate metus ut urna blandit, ac ornare eros facilisis. Suspendisse magna arcu, ultricies et ante ut, dictum cursus arcu.',
        qty: '1',
        price: '1,500.00',
        total: '1,500.00'
    },

]

const items = [
    {
        name: 'Wipes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate metus ut urna blandit, ac ornare eros facilisis. Suspendisse magna arcu, ultricies et ante ut, dictum cursus arcu.',
        qty: '1',
        price: '3,200.00',
        total: '3,200.00'
    },
    {
        name: 'Microfiber Cloth',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate metus ut urna blandit, ac ornare eros facilisis. Suspendisse magna arcu, ultricies et ante ut, dictum cursus arcu.',
        qty: '1',
        price: '4,800.00',
        total: '4,800.00'
    },
    {
        name: 'Mop Refill',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate metus ut urna blandit, ac ornare eros facilisis. Suspendisse magna arcu, ultricies et ante ut, dictum cursus arcu.',
        qty: '1',
        price: '2,600.00',
        total: '2,600.00'
    },

]

const Invoice = () => {
    return (
        <div style={{ padding: '54px 32px' }}>
            <div style={{ display: 'flex', marginBottom: 50 }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 19 }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#27AE60" />
                            <path d="M21.123 9.50298C20.2182 9.74058 20.1691 9.77718 15.5219 13.6089C13.1029 15.607 10.5054 17.7392 9.7485 18.3545C8.99791 18.9696 8.26528 19.5969 8.13006 19.7553C7.81604 20.1147 7.31133 21.1321 7.16977 21.6802C7.00972 22.3321 7.02214 23.4895 7.20675 24.1475C7.61294 25.646 8.64692 26.901 10.081 27.6318C10.9243 28.0642 11.3181 28.1557 12.5369 28.1923C13.1156 28.2106 15.8483 28.2289 18.6243 28.2349C23.3946 28.2349 23.6653 28.2289 23.7823 28.1253C23.8499 28.0644 25.9427 25.2014 28.4232 21.7594C32.5406 16.0576 32.9407 15.4849 32.9407 15.2656C32.9407 15.0949 32.8977 14.9914 32.7807 14.8819L32.6206 14.7358L28.8537 14.7175L25.0806 14.7052L25.2962 14.1691C25.4808 13.7182 25.5177 13.5478 25.5423 13.0299C25.5732 12.2868 25.4932 11.8602 25.2101 11.2938C24.6129 10.112 23.4189 9.3992 22.0587 9.41149C21.7326 9.41149 21.3079 9.4541 21.123 9.50298ZM27.2043 21.4975L23.1297 27.1383L17.4303 27.0957L11.737 27.0591L11.2753 26.9067C10.5981 26.6874 10.0197 26.328 9.45957 25.7676C8.64084 24.9452 8.2777 24.1715 8.21616 23.0993C8.1607 22.1551 8.33316 21.5215 8.85635 20.7235C9.36106 19.956 10.2289 19.3407 11.0844 19.1517C11.5891 19.0359 12.3462 19.0603 12.8201 19.2066C13.5218 19.4259 14.2602 19.9987 14.6479 20.62C15.005 21.1987 15.1402 22.1063 14.968 22.7459C14.7773 23.4587 14.2417 24.1043 13.5831 24.4272C13.2508 24.5856 13.1523 24.6039 12.5982 24.6039C11.8843 24.6039 11.5764 24.4881 11.1332 24.0617C10.0068 22.9835 10.6161 21.223 12.1117 21.223C12.4379 21.223 12.5118 21.1987 12.6534 21.0646C12.7704 20.9488 12.8135 20.8393 12.8135 20.6746C12.8135 20.3761 12.6043 20.1811 12.2163 20.1265C11.564 20.023 10.8131 20.2849 10.259 20.8027C9.6558 21.3631 9.40358 21.9722 9.40966 22.8068C9.42207 23.6597 9.73583 24.3419 10.3945 24.939C11.5024 25.944 13.1827 26.0721 14.4567 25.2498C14.6844 25.1036 16.451 23.3858 19.3992 20.4433L23.9846 15.8684H27.6285L31.2784 15.8624L27.2043 21.4975Z" fill="white" />
                        </svg>
                        <div style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 12 }}>Bright Cleaners</div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                            <svg width="14" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0.5C3.0975 0.5 0.75 2.8475 0.75 5.75C0.75 9.6875 6 15.5 6 15.5C6 15.5 11.25 9.6875 11.25 5.75C11.25 2.8475 8.9025 0.5 6 0.5ZM6 7.625C4.965 7.625 4.125 6.785 4.125 5.75C4.125 4.715 4.965 3.875 6 3.875C7.035 3.875 7.875 4.715 7.875 5.75C7.875 6.785 7.035 7.625 6 7.625Z" fill="#828282" />
                            </svg>
                            <div style={{ marginLeft: 10 }}>49 Downing St, New York, NY</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                            <svg width="14" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 0H2C1.175 0 0.5075 0.675 0.5075 1.5L0.5 10.5C0.5 11.325 1.175 12 2 12H14C14.825 12 15.5 11.325 15.5 10.5V1.5C15.5 0.675 14.825 0 14 0ZM14 3L8 6.75L2 3V1.5L8 5.25L14 1.5V3Z" fill="#828282" />
                            </svg>
                            <div style={{ marginLeft: 10 }}>billing@brightcleaners.com</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0075 9.535C12.085 9.535 11.1925 9.385 10.36 9.115C10.0975 9.025 9.805 9.0925 9.6025 9.295L8.425 10.7725C6.3025 9.76 4.315 7.8475 3.2575 5.65L4.72 4.405C4.9225 4.195 4.9825 3.9025 4.9 3.64C4.6225 2.8075 4.48 1.915 4.48 0.9925C4.48 0.5875 4.1425 0.25 3.7375 0.25H1.1425C0.7375 0.25 0.25 0.43 0.25 0.9925C0.25 7.96 6.0475 13.75 13.0075 13.75C13.54 13.75 13.75 13.2775 13.75 12.865V10.2775C13.75 9.8725 13.4125 9.535 13.0075 9.535Z" fill="#828282" />
                            </svg>
                            <div style={{ marginLeft: 10 }}>+1 (926) 721-4127</div>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <div style={{ color: 'rgba(0, 0, 0, 0.48)', marginBottom: 36, width: 212 }}>
                        <div style={{ marginBottom: 10 }}>Invoice Number #942209049</div>
                        <div>Invoice Date: 06/26/2020</div>
                    </div>
                    <div>
                        <div style={{ fontSize: 10, fontWeight: 'bold', marginBottom: 8, color: 'rgba(0, 0, 0, 0.48)' }}>BILL TO</div>
                        <div style={{ lineHeight: '24px', width: 213 }}>
                            <div style={{ fontWeight: 'bold' }}>John Williams,</div>
                            <div>941 Baker’s Street Eva Park Parkinson County NY 50008</div>
                            <div>(773) 529-1929</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ display: 'flex', color: 'rgba(0, 0, 0, 0.48)', fontSize: 10, fontWeight: 'bold', marginBottom: 8 }}>
                    <div style={{ flex: 1.3 }} >SERVICES</div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', marginLeft: -48 }}>QTY</div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>PRICE</div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>TOTAL</div>
                    </div>
                </div>
                <Divider style={{ marginBottom: 8 }} />
                {
                    services.map((item, idx) => {
                        return (
                            <React.Fragment>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ flex: 1.3, lineHeight: '24px' }}>
                                        <div style={{ fontSize: 18, fontWeight: 600 }}>{item.name}</div>
                                        <div style={{ fontSize: 14 }}>{item.description}</div>
                                    </div>
                                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', marginLeft: -48 }}>{item.qty}</div>
                                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>${item.price}</div>
                                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', fontWeight: 600 }}>${item.total}</div>
                                    </div>
                                </div>
                                <br />
                            </React.Fragment>
                        )
                    })
                }
            </div>
            <div>
                <div style={{ display: 'flex', color: 'rgba(0, 0, 0, 0.48)', fontSize: 10, fontWeight: 'bold', marginBottom: 8 }}>
                    <div style={{ flex: 1.3 }} >ITEMS</div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', marginLeft: -48 }}>QTY</div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>PRICE</div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>TOTAL</div>
                    </div>
                </div>
                <Divider style={{ marginBottom: 8 }} />
                {
                    items.map((item, idx) => {
                        return (
                            <React.Fragment>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ flex: 1.3, lineHeight: '24px' }}>
                                        <div style={{ fontSize: 18, fontWeight: 600 }}>{item.name}</div>
                                        <div style={{ fontSize: 14 }}>{item.description}</div>
                                    </div>
                                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', marginLeft: -48 }}>{item.qty}</div>
                                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>${item.price}</div>
                                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', fontWeight: 600 }}>${item.total}</div>
                                    </div>
                                </div>
                                <br />
                            </React.Fragment>
                        )
                    })
                }
            </div>
            <Divider style={{ margin: '0 0 16px' }} />
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: 4, color: 'rgba(0, 0, 0, 0.48)', fontSize: 10 }}>NOTES</div>
                    <div style={{ width: 261, lineHeight: '19px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sagittis est. Vivamus euismod cursus varius.</div>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ marginRight: 40 }}>
                        <div style={{ fontWeight: 'bold', marginBottom: 20, textAlign: 'right' }}>Subtotal:</div>
                        <div style={{ fontWeight: 'bold', marginBottom: 8, textAlign: 'right' }}>Tax:</div>
                        <div style={{ fontWeight: 600, marginBottom: 8, color: '#828282', textAlign: 'right' }}>State Tax (5%):</div>
                        <div style={{ fontWeight: 600, marginBottom: 8, color: '#828282', textAlign: 'right' }}>SVC Charge (7%):</div>
                        <div style={{ fontWeight: 'bold', marginTop: 20, textAlign: 'right', fontSize: 22 }}>Total:</div>
                    </div>
                    <div>
                        <div style={{ fontWeight: 'bold', marginBottom: 20, textAlign: 'right' }}>$15,900.00</div>
                        <div style={{ fontWeight: 'bold', marginBottom: 8, textAlign: 'right' }}>$451.2</div>
                        <div style={{ fontWeight: 600, marginBottom: 8, color: '#828282', textAlign: 'right' }}>$190.25</div>
                        <div style={{ fontWeight: 600, marginBottom: 8, color: '#828282', textAlign: 'right' }}>$260.95</div>
                        <div style={{ fontWeight: 'bold', marginTop: 20, textAlign: 'right', fontSize: 22 }}>$16,351.2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice;