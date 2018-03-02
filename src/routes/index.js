import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Radium from 'radium';
import DocumentTitle from 'react-document-title';
import MarvelComicListContainer from '../containers/MarvelComicListContainer';
import ComicDetailsPage from '../pages/ComicDetailsPage';
import StarkDexContainer from '../organisms/StarkDexContainer';

const blankDetailsStyle = {
  flex: '1 0 100%',
  width: '100vw',
  '@media (min-width: 768px)': {
    display: 'none'
  }
};

const BlankMobilePage = Radium(props => <div {...props} style={blankDetailsStyle} />);

export default () => (
  <DocumentTitle title="Starkdex">
    <Router>
      <Route
        path="/"
        component={props => (
          <StarkDexContainer {...props}>
            <MarvelComicListContainer {...props} />
            <Switch>
              <Route path="/:comicId" component={ComicDetailsPage} />
              <Route component={BlankMobilePage} />
            </Switch>
          </StarkDexContainer>
        )}
      />
    </Router>
  </DocumentTitle>
);
