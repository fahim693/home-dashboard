import React from 'react';
import './timeline.css'
import { DoneRounded } from '@material-ui/icons';

const Timeline = (props) => {
    let classCrated = ""
    let classSched = ""
    let classStart = ""
    let classFinish = ""
    let classPay = ""
    if (props.step === 0) {
        classCrated = "active"
        classSched = "active on"
    } else if (props.step === 1) {
        classCrated = "active"
        classSched = "active"
        classStart = "active on"
    } else if (props.step === 2) {
        classCrated = "active"
        classSched = "active"
        classStart = "active"
        classFinish = "active on"
    } else if (props.step === 3) {
        classCrated = "active"
        classSched = "active"
        classStart = "active"
        classFinish = "active"
        classPay = "active on"
    }
    else if (props.step === 4) {
        classCrated = "active"
        classSched = "active"
        classStart = "active"
        classFinish = "active"
        classPay = "active"
    }
    return (
        <div className="timeline">
            <ul>
                <li className={`timeline-list ${classCrated}`}>
                    <span>Created</span>
                    {
                        props.step >= 0 ?
                            <DoneRounded
                                className='timeline-list-icon'
                            /> : ''
                    }
                </li>
                <li className={`timeline-list ${classSched}`}>
                    <span>{
                        props.step >= 1 ? 'Scheduled' : 'Schedule'
                    }</span>
                    {
                        props.step >= 1 ?
                            <DoneRounded
                                className='timeline-list-icon'
                            /> : ''
                    }
                </li>
                <li className={`timeline-list ${classStart}`}>
                    <span>
                        {
                            props.step >= 2 ? 'Started' : 'Start'
                        }
                    </span>
                    {
                        props.step >= 2 ?
                            <DoneRounded
                                className='timeline-list-icon'
                            /> : ''
                    }
                </li>
                <li className={`timeline-list ${classFinish}`}>
                    <span>
                        {
                            props.step >= 3 ? 'Finished' : 'Finish'
                        }
                    </span>
                    {
                        props.step >= 3 ?
                            <DoneRounded
                                className='timeline-list-icon'
                            /> : ''
                    }
                </li>
                <li className={`timeline-list ${classPay}`}>
                    <span>
                        {
                            props.step >= 4 ? 'Paid' : 'Pay'
                        }
                    </span>
                    {
                        props.step >= 4 ?
                            <DoneRounded
                                className='timeline-list-icon'
                            /> : ''
                    }
                </li>
            </ul>
        </div>
    )
}

export default Timeline;