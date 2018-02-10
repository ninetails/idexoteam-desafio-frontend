import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import ellipsize from 'ellipsize';

const style = {
  fontSize: '.9em'
};

export const ComicListItemDescription = ({ children }) => (
  <p style={style}>{ellipsize(children, 250)}</p>
);

ComicListItemDescription.propTypes = {
  children: PropTypes.node.isRequired
};

export default Radium(ComicListItemDescription);
