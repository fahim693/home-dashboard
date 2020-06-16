import React from 'react'
import './breadcrumbs.css'
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <MdKeyboardArrowLeft style={{ fontSize: 20 }} />
            <div className='breadcrumbs-text'>
                Customer
            </div>
        </div>
    )
}

export default Breadcrumbs;