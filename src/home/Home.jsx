import React from 'react';
import Menu from '../components/Menu';
import Tweets from '../components/Tweets';
import './Home.css';

export default (props) => {
  return (
        <div className="home">
            {props.timeline ?
              <div>
                <Menu timeline={props.timeline} onClick={props.onClick}/>
                <Tweets profile={props.timeline.profile}/>
              </div>
            : 'Loading'}
        </div>
  );
};
