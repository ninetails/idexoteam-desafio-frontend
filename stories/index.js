import React from 'react';
import { storiesOf, action } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { linkTo } from '@storybook/addon-links'; // eslint-disable-line import/no-extraneous-dependencies
import Button from './Button';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="example emoji 1">😀</span>
      <span role="img" aria-label="example emoji 2">😎</span>
      <span role="img" aria-label="example emoji 3">👍</span>
      <span role="img" aria-label="example emoji 4">💯</span>
    </Button>
  ));
