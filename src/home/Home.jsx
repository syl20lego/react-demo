import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/Menu';
import Tweets from '../components/Tweets';
import './Home.css';

const Home = ({ onClick, timeline }) => {
  return (
        <div className="home">
            {timeline ?
              <div>
                <Menu timeline={timeline} onClick={onClick}/>
                <Tweets profile={timeline.profile}/>
              </div>
            : 'Loading'}
        </div>
  );
};

Home.propTypes = {
  timeline: PropTypes.shape({
    profile: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default Home;
