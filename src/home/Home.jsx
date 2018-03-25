import React from 'react';
import Tweets from '../components/Tweets';

export default (props) => {
    return (
        <div>{props.timeline?<Tweets profile={props.timeline.profile}/>:'Loading'}</div>   
    );
}
