import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/Menu';
import Tweets from '../components/Tweets';
import './Home.css';

const Home = (props) => {
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

Home.propTypes = {
  timeline: PropTypes.object,
  onClick: PropTypes.func,
};

export default Home;
