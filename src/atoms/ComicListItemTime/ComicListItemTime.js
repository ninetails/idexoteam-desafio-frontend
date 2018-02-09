import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { format, parse } from 'fecha';

const style = {
  fontSize: '.8em',
  fontWeight: 'bold'
};

const formatDate = dateTime =>
  format(parse(dateTime, 'YYYY-MM-DDTHH:mm:ss'), 'DD/MM/YYYY');

export const ComicListItemTime = ({ dateTime }) => (
  <time dateTime={dateTime} style={style}>
    {formatDate(dateTime)}
  </time>
);

ComicListItemTime.propTypes = {
  dateTime: PropTypes.string.isRequired
};

export default Radium(ComicListItemTime);
