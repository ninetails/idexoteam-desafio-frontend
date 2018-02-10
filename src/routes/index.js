import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MarvelComicListContainer from '../containers/MarvelComicListContainer';
import ComicDetails from '../pages/ComicDetails';
import StarkDexContainer from '../organisms/StarkDexContainer';

export default () => (
  <Router>
    <Route
      path="/"
      component={props => (
        <StarkDexContainer {...props}>
          <MarvelComicListContainer {...props} />
          <Route path="/:comicId" component={ComicDetails} />
        </StarkDexContainer>
      )}
    />
  </Router>
);
