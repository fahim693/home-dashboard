import React from 'react'

const Success = (props) => {
    return (
        <div >
            <div style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 18px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.22)', marginBottom: 1, borderTopLeftRadius: 6, borderTopRightRadius: 6 }}>
                <div style={{ flex: 1, fontWeight: 500, fontSize: 24, color: '#000' }}>Payment Successful</div>
                <div onClick={() => {
                    props.setOpen(false)
                    window.setTimeout(() => {
                        props.setPage(0)
                    }, 200)
                }} className='not-icon-hover' style={{ cursor: 'pointer', height: 30, width: 30, borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg width="20" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.4498 0.564956C18.8648 -0.0200436 17.9198 -0.0200436 17.3348 0.564956L9.99984 7.88496L2.66483 0.549956C2.07983 -0.035044 1.13483 -0.035044 0.549834 0.549956C-0.035166 1.13496 -0.035166 2.07996 0.549834 2.66496L7.88484 9.99996L0.549834 17.335C-0.035166 17.92 -0.035166 18.865 0.549834 19.45C1.13483 20.035 2.07983 20.035 2.66483 19.45L9.99984 12.115L17.3348 19.45C17.9198 20.035 18.8648 20.035 19.4498 19.45C20.0348 18.865 20.0348 17.92 19.4498 17.335L12.1148 9.99996L19.4498 2.66496C20.0198 2.09496 20.0198 1.13496 19.4498 0.564956Z" fill="black" />
                    </svg>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 380, padding: '0 40px' }}>
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.0001 0.166668C16.2201 0.166668 0.166748 16.22 0.166748 36C0.166748 55.78 16.2201 71.8333 36.0001 71.8333C55.7801 71.8333 71.8334 55.78 71.8334 36C71.8334 16.22 55.7801 0.166668 36.0001 0.166668ZM26.2892 51.3725L13.4251 38.5083C12.0276 37.1108 12.0276 34.8533 13.4251 33.4558C14.8226 32.0583 17.0801 32.0583 18.4776 33.4558L28.8334 43.7758L53.4867 19.1225C54.8842 17.725 57.1418 17.725 58.5393 19.1225C59.9368 20.52 59.9368 22.7775 58.5393 24.175L31.3417 51.3725C29.9801 52.77 27.6867 52.77 26.2892 51.3725Z" fill="#62C796" />
                </svg>
                <div style={{ color: '#333', fontWeight: 500, fontSize: 22, marginBottom: 20, marginTop: 42 }}>Thank you for subscribing!</div>
                <div style={{ color: '#828282', fontWeight: 500, textAlign: 'center' }}>Your Professional Plan has been activated and is valid until Nov 14, 2021.</div>
            </div>
        </div >
    )
}

export default Success;