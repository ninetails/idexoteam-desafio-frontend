import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const style = {
  display: 'inline-block',
  float: 'left',
  height: 'auto',
  marginRight: '.5em',
  maxWidth: '70px'
};

const ComicListItemThumb = ({ src, alt }) => (
  <img src={src} alt={alt} style={style} />
);

ComicListItemThumb.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Radium(ComicListItemThumb);
