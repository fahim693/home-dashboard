import React from 'react'
import { Typography } from '@material-ui/core';

const JobAssigned = (props) => {
    return (
        <React.Fragment>
            {
                props.data.assigned ?
                    <div style={{ padding: 0 }} className="logged-in-user">
                        <img src="/profile-img.png" alt="" />
                        <div>
                            <div style={{ fontSize: 22, marginBottom: 6 }} className="name">Ray Wilson</div>
                            <div className="subtitle-dark">Project Manager</div>
                        </div>
                    </div> :
                    <div className="subtitle-dark" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px 0'
                    }
                    }>
                        <Typography variant="body2" component="p" style={{ fontSize: '1.125rem' }}>
                            Unassigned
                        </Typography>
                    </div>
            }

        </React.Fragment>
    )
}

export default JobAssigned;