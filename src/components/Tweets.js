import React from 'react';
import { Timeline } from 'react-twitter-widgets'

export default (props) => {
    return (
        <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: props.profile
            }}
            />
    );
}
