import React from 'react';
import './timeline.css'
import { DoneRounded } from '@material-ui/icons';

const Timeline = (props) => {
    let classCust = ""
    let classApt = ""
    let classSched = ""
    if (props.step === 0) {
        classCust = "active on"
    } else if (props.step === 1) {
        classCust = "active"
        classApt = "active on"
    }
    return (
        <div className="timeline">
            <ul>
                <li className={`timeline-list ${classCust}`}>
                    <span>Customer</span>
                    {
                        props.step === 1 ?
                            <DoneRounded
                                className='timeline-list-icon'
                            /> : ''
                    }
                </li>
                <li className={`timeline-list ${classApt}`} >
                    <span>Appointment</span>
                </li>
                <li className={`timeline-list ${classSched}`}>
                    Schedule
                </li>

            </ul>
        </div>
    )
}

export default Timeline;