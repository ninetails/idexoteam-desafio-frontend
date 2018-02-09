import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const style = {
  margin: 0,
  fontSize: '1em'
};

export const ComicListItemTitle = ({ children }) => (
  <h3 style={style}>{children}</h3>
);

ComicListItemTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default Radium(ComicListItemTitle);
