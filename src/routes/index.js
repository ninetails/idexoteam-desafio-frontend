import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import MarvelComicListContainer from '../containers/MarvelComicListContainer';
import ComicDetailsPage from '../pages/ComicDetailsPage';
import StarkDexContainer from '../organisms/StarkDexContainer';

export default () => (
  <DocumentTitle title="Starkdex">
    <Router>
      <Route
        path="/"
        component={props => (
          <StarkDexContainer {...props}>
            <MarvelComicListContainer {...props} />
            <Route path="/:comicId" component={ComicDetailsPage} />
          </StarkDexContainer>
        )}
      />
    </Router>
  </DocumentTitle>
);
