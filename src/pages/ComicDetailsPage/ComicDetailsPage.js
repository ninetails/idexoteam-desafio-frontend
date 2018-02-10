import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { NavLink } from 'react-router-dom';
import MarvelComicDetailsContainer from '../../containers/MarvelComicDetailsContainer';

const styles = {
  flex: '1 0 100%',
  overflow: 'auto',
  padding: '1em',
  width: '100vw',
  '@media (min-width: 768px)': {
    flex: '2 2',
    width: 'auto'
  },
  back: {
    color: 'inherit',
    fontSize: '1.2em',
    arrow: {
      display: 'inline-block',
      float: 'left',
      paddingBottom: '1em',
      '@media (min-width: 768px)': {
        display: 'none'
      }
    },
    close: {
      display: 'none',
      '@media (min-width: 768px)': {
        display: 'inline-block',
        float: 'right',
        fontSize: '3em'
      }
    }
  }
};

export const ComicDetailsPage = ({ match: { params: { comicId } } }) => (
  <div style={styles}>
    <NavLink to="/" style={styles.back}>
      <span style={styles.back.arrow}><span style={{ fontSize: '3em', lineHeight: '1em' }}>&larr;</span> Voltar</span>
      <span style={styles.back.close}>&times;</span>
    </NavLink>
    <MarvelComicDetailsContainer id={+comicId} />
  </div>
);

ComicDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      comicId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Radium(ComicDetailsPage);
