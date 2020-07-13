import React from 'react'
import Card from '../Card/Card'
import { EmojiPeopleRounded } from '@material-ui/icons'
import './employee-on-call.css'

const data = [
    {
        name: "Sophia Davis"
    },
    {
        name: "Rob Tyler"
    },
    {
        name: "Thomas Davis"
    },
    {
        name: "Jane Cooper"
    },
    {
        name: "Wade Warren"
    },
    {
        name: "Esther Howard"
    },
]

const EmployeeOnCall = (props) => {
    return (
        <Card
            title="Employees On Call"
            icon={<EmojiPeopleRounded className="main-title-icon" />}
            noBoxShadow={true}
        >
            <div className="upcoming-appointments-container">
                {
                    data.map((row, idx) => (
                        <div key={idx} className="employee-on-call-flexbox">
                            <img style={{
                                borderRadius: '100%',
                                height: 30,
                                width: 30,
                                marginRight: 12
                            }} src="/profile-img.png" alt=""/>
                            <div>{row.name}</div>
                        </div>
                    ))
                }
            </div>
        </Card >
    )
}

export default EmployeeOnCall;