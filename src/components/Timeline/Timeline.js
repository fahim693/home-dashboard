import React from 'react';
import './timeline.css'

const Timeline = () => {
    return (
        <div className="timeline">
            <ul>
                <li className="active">
                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50468 14.897L2.58801 9.98033C2.04015 9.43247 1.1692 9.43247 0.621342 9.98033C0.0734848 10.5282 0.0734848 11.3991 0.621342 11.947L6.5073 17.833C7.05516 18.3808 7.94016 18.3808 8.48802 17.833L23.3785 2.95651C23.9264 2.40865 23.9264 1.5377 23.3785 0.989842C22.8306 0.441985 21.9597 0.441985 21.4118 0.989842L7.50468 14.897Z"
                            fill="white" />
                    </svg>Created
					</li>
                <li className="active">
                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50468 14.897L2.58801 9.98033C2.04015 9.43247 1.1692 9.43247 0.621342 9.98033C0.0734848 10.5282 0.0734848 11.3991 0.621342 11.947L6.5073 17.833C7.05516 18.3808 7.94016 18.3808 8.48802 17.833L23.3785 2.95651C23.9264 2.40865 23.9264 1.5377 23.3785 0.989842C22.8306 0.441985 21.9597 0.441985 21.4118 0.989842L7.50468 14.897Z"
                            fill="white" />
                    </svg>Schedule
					</li>
                <li className="active on">In Progress</li>
                <li>Complete</li>
                <li>Closed</li>
            </ul>
        </div>
    )
}

export default Timeline;