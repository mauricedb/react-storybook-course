import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import MovieListItem from './MovieListItem';

const pulpFiction = {
  id: 680,
  title: 'Pulp Fiction',
  vote_average: 8.4,
  backdrop_path: '/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg',
  overview:
    "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
  release_date: '1994-09-10'
};

storiesOf('MovieListItem', module)
  .add('default', () => <MovieListItem {...pulpFiction} />)
  .add('No image', () => <MovieListItem {...pulpFiction} backdrop_path="" />);
