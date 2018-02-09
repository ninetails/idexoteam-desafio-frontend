import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const style = {
  fontSize: '.9em'
};

export const ComicListItemDescription = ({ children }) => (
  <p style={style}>{children}</p>
);

ComicListItemDescription.propTypes = {
  children: PropTypes.node.isRequired
};

export default Radium(ComicListItemDescription);
