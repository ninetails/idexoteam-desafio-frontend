import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { StyleRoot } from 'radium';
import { BrowserRouter as Router } from 'react-router-dom';

import Time from '../src/atoms/Time';
import ComicListItemThumb from '../src/atoms/ComicListItemThumb';
import ComicListItemTitle from '../src/atoms/ComicListItemTitle';
import ComicListItemDescription from '../src/atoms/ComicListItemDescription';

import ComicListItem from '../src/molecules/ComicListItem';

import ComicList from '../src/organisms/ComicList';

addDecorator(story => (
  <Router>
    <StyleRoot>
      <div style={{ fontFamily: 'sans-serif' }}>
        {story()}
      </div>
    </StyleRoot>
  </Router>
));

storiesOf('atoms/ComicListItem', module)
  .add('Time', () => (
    <Time dateTime="2018-02-09T21:06:30" />
  ))
  .add('ComicListItemThumb', () => (
    <ComicListItemThumb src="http://i.annihil.us/u/prod/marvel/i/mg/c/b0/5a68ecca9083f.jpg" alt="Capa de teste" />
  ))
  .add('ComicListItemTitle', () => (
    <ComicListItemTitle>Título</ComicListItemTitle>
  ))
  .add('ComicListItemDescription', () => (
    <ComicListItemDescription>descrição do periódico</ComicListItemDescription>
  ));

storiesOf('molecules', module)
  .add('ComicListItem', () => (
    <div style={{ alignItems: 'stretch', display: 'flex', flexDirection: 'column' }}>
      <ComicListItem
        data={
          {
            id: 1,
            title: 'Title',
            description: 'description',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/5a68ecca9083f',
              extension: 'jpg'
            }
          }
        }
      />
    </div>
  ));

storiesOf('organisms', module)
  .add('ComicList', () => (
    <ComicList
      data={[
        {
          id: 1,
          title: 'Title',
          description: 'description',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/5a68ecca9083f',
            extension: 'jpg'
          }
        },
        {
          id: 2,
          title: 'Title',
          description: 'description',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/5a68ecca9083f',
            extension: 'jpg'
          }
        },
        {
          id: 3,
          title: 'Title',
          description: 'description',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/5a68ecca9083f',
            extension: 'jpg'
          }
        }
      ]}
    />
  ));
