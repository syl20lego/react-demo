import React from 'react';
import Menu from '../components/Menu';
import Tweets from '../components/Tweets';
import './Home.css';

export default (props) => {
    return (
        <div className="home">
            <Menu timeline={props.timeline} onClick={props.onClick}/>
            {props.timeline?<Tweets profile={props.timeline.profile}/>:'Loading'}
        </div>   
    );
}
