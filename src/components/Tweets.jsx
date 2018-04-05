import React from 'react';
import PropTypes from 'prop-types';
import { Timeline } from 'react-twitter-widgets';

const Tweets = (props) => {
  return (
        <div className="Twitter">
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: props.profile,
                }}
            />
        </div>
  );
};

Tweets.propTypes = {
  profile: PropTypes.string,
};

export default Tweets;
