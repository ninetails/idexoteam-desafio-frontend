import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const style = {
  background: 'rgba(0, 0, 0, 0.2)',
  color: '#eee',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  height: '100vh',
  transform: 'translateX(0)',
  transition: 'transform 1s',
  width: '100vw',
  '@media (min-width: 768px)': {
    transform: 'translateX(0)',
    transition: 'all 0'
  },
  '@media (min-width: 992px)': {
    maxHeight: '576px',
    maxWidth: '1024px',
    padding: '.5em'
  },
  details: {
    transform: 'translateX(-100%)',
    '@media (min-width: 768px)': {
      transform: 'translateX(0)'
    }
  }
};

export const StarkDexContainer = ({ children, location }) => {
  const detailsPage = /^\/(\d+)$/.test(location.pathname);

  return (
    <div style={[style, detailsPage ? style.details : null]}>
      {children}
    </div>
  );
};

StarkDexContainer.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

StarkDexContainer.defaultProps = {
  children: null,
  location: null
};

export default Radium(StarkDexContainer);
