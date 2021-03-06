/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Home from '../src/home/Home';
import Tweet from '../src/components/Tweets';
import Menu from '../src/components/Menu';

storiesOf('Home', module)
  .add('Loading', () => <Home />)
  .add('Git Hub', () => <Home timeline={{ name: 'Git Hub', profile: 'github' }} onClick={action('clicked')}/>);
storiesOf('Tweets', module)
  .add('Git Hub', () => <Tweet profile='github'/>);
storiesOf('Menu', module)
  .add('Default', () => <Menu />)
  .add('Text & click', () => <Menu timeline={{ name: 'Text', profile: 'Tester' }} onClick={action('clicked')}/>);
/* eslint-disable */
