import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const style = {
  background: 'rgba(0, 0, 0, 0.2)',
  color: '#eee',
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  overflow: 'hidden',
  width: '100vw',
  '@media (min-width : 992px)': {
    maxHeight: '576px',
    maxWidth: '1024px',
    padding: '.5em',
  }
};

export const StarkDexContainer = ({ children }) => (
  <div style={style}>
    {children}
  </div>
);

StarkDexContainer.propTypes = {
  children: PropTypes.node
};

StarkDexContainer.defaultProps = {
  children: null
};

export default Radium(StarkDexContainer);
