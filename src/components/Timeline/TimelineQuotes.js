import React from 'react';
import './timeline.css'
import { DoneRounded } from '@material-ui/icons';

const TimelineQuotes = (props) => {
    let classCust = ""
    let classQuote = ""
    if (props.step === 0) {
        classCust = "active on"
    } else if (props.step === 1) {
        classCust = "active"
        classQuote = "active on"
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
                <li className={`timeline-list ${classQuote}`} >
                    <span>Quote</span>
                </li>

            </ul>
        </div>
    )
}

export default TimelineQuotes;