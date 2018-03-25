import React from 'react';
import { Timeline } from 'react-twitter-widgets'

export default (props) => {
    return (
        <div className="Twitter">
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: props.profile
                }}
            />
        </div>
    );
}
