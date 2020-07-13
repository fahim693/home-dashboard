import React from 'react'
import Card from '../Card/Card'
import { EventNoteRounded } from '@material-ui/icons'
import './upcoming-appointments.css'

const data = [
    {
        name: "Jane Cooper",
        date: "Feb 24th, 8:00AM"
    },
    {
        name: "Wade Warren",
        date: "Feb 24th,11:00AM"
    },
    {
        name: "Esther Howard",
        date: "Feb 24th, 12:30PM"
    },
    {
        name: "Jenny Wilson",
        date: "Feb 25th, 9:00AM"
    },
    {
        name: "Brooklyn Simmons",
        date: "Feb 25th, 11:00AM"
    },
    {
        name: "Guy Hawkins",
        date: "Feb 26th, 11:15AM"
    },
]

const UpcomingAppointments = (props) => {
    return (
        <Card
            title="Upcoming Appointments"
            icon={<EventNoteRounded className="main-title-icon" />}
            noBoxShadow={true}
        >
            <div className="upcoming-appointments-container">
                {
                    data.map((row, idx) => (
                        <div key={idx} className="appointment-flexbox">
                            <div>{row.name}</div>
                            <div>{row.date}</div>
                        </div>
                    ))
                }
            </div>
        </Card >
    )
}

export default UpcomingAppointments;