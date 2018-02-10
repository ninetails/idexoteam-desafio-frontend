import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { NavLink } from 'react-router-dom';

const styles = {
  flex: '1 0 100%',
  padding: '1em',
  width: '100vw',
  '@media (min-width: 768px)': {
    flex: '2 2',
    width: 'auto'
  }
};

export const ComicDetails = ({ match: { params: { comicId } } }) => (
  <div style={styles}>
    <NavLink to="/" style={{ color: 'inherit' }}>Voltar</NavLink>
    <p>comicId: {comicId}</p>
  </div>
);

ComicDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      comicId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Radium(ComicDetails);
