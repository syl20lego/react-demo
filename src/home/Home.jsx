import React from 'react';
import Menu from '../components/Menu';
import Tweets from '../components/Tweets';

export default (props) => {
    return (
        <div>
            <Menu timeline={props.timeline} onClick={props.onClick}/>
            {props.timeline?<Tweets profile={props.timeline.profile}/>:'Loading'}
        </div>   
    );
}
