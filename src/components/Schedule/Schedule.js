import React from 'react'
import { Typography } from '@material-ui/core';

const Schedule = (props) => {
    return (
        <React.Fragment>
            <div className="start">
                <div className="step-status-drawing">
                    <span className="step-status-dot"></span>
                    <span className="step-status-line"></span>
                </div>
                <div>
                    <Typography className="title-heads" variant="body2" component="p">
                        Start
                                                </Typography>
                    <div className="subtitle-dark">
                        {
                            props.data.start_date !== '' ?
                                <React.Fragment>
                                    <Typography variant="body2" component="p" style={{ fontSize: '1.125rem', marginBottom: 6 }}>
                                        {props.data.start_date}
                                    </Typography>
                                    <Typography variant="body2" component="p" style={{ fontSize: '1.125rem' }}>
                                        {props.data.start_time}
                                    </Typography>
                                </React.Fragment> :
                                <Typography variant="body2" component="p" style={{ fontSize: '1.125rem', marginBottom: 6, color: '#BDBDBD' }}>
                                    Not Scheduled Yet
                                </Typography>
                        }
                    </div>
                </div>
            </div>
            <div className="end">
                <div className="step-status-drawing">
                    <span className="step-status-dot"></span>
                </div>
                <div>
                    <Typography className="title-heads" variant="body2" component="p">
                        End
                    </Typography>
                    <div className="subtitle-dark">
                        {
                            props.data.end_date !== '' ?
                                <React.Fragment>
                                    <Typography variant="body2" component="p" style={{ fontSize: '1.125rem', marginBottom: 6,color: '#4F4F4F' }}>
                                        {props.data.end_date}
                                    </Typography>
                                    <Typography variant="body2" component="p" style={{ fontSize: '1.125rem',color: '#4F4F4F' }}>
                                        {props.data.end_time}
                                    </Typography>
                                </React.Fragment> :
                                <Typography variant="body2" component="p" style={{ fontSize: '1.125rem', marginBottom: 6, color: '#BDBDBD' }}>
                                    Not Scheduled Yet
                                </Typography>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Schedule;