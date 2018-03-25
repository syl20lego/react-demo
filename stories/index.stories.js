import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Tweet from '../src/components/Tweets';

storiesOf('Tweets', module)
  .add('Trump', () => <Tweet profile='realDonaldTrump'/>)
  .add('Hillary', () => <Tweet profile='HillaryClinton'/>)
