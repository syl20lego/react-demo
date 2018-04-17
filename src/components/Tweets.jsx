import React from 'react';
import PropTypes from 'prop-types';
import { Timeline } from 'react-twitter-widgets';

const Tweets = ({ profile }) => {
  return (
        <div className="Twitter">
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: profile,
                }}
            />
        </div>
  );
};

Tweets.propTypes = {
  profile: PropTypes.string,
};

export default Tweets;
