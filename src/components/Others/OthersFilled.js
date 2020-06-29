import React from 'react';
import { Typography, Chip } from '@material-ui/core';
import { ImageRounded, GetAppRounded } from '@material-ui/icons';

const OthersFilled = (props) => {
    return (
        <React.Fragment>
            <Typography className="title-heads" variant="body2" component="p" >
                Tags
                                            </Typography>
            <div className="chips">
                {
                    props.data.tags.map(tag => (
                        <Chip key={tag} className="chip" label={tag} />
                    ))
                }
            </div>
            <br />
            <Typography className="title-heads" variant="body2" component="p" >
                Source
                                            </Typography>
            <Typography variant="body2" component="p" style={{ fontSize: 20 }}>{props.data.source_name}</Typography>
            <br />
            <Typography className="title-heads" variant="body2" component="p" >
                Notes
                                            </Typography>
            <Typography variant="body2" component="p" style={{ fontSize: 20 }}>{props.data.notes}</Typography>
            <br />
            <Typography className="title-heads" variant="body2" component="p" >
                Attachments
                                            </Typography>
            {
                props.data.attachments.map((attachment, idx) => (
                    <div key={idx} className="attachment-card">
                        <div>
                            <ImageRounded style={{ marginRight: 10 }} />
                            <Typography variant="body2" component="p" >{attachment}</Typography>
                        </div>
                        <GetAppRounded style={{ cursor: 'pointer' }} />
                    </div>
                ))
            }
        </React.Fragment>
    )
}

export default OthersFilled;