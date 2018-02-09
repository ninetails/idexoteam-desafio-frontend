import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import ComicListItemTime from '../../atoms/ComicListItemTime';
import ComicListItemThumb from '../../atoms/ComicListItemThumb';
import ComicListItemTitle from '../../atoms/ComicListItemTitle';
import ComicListItemDescription from '../../atoms/ComicListItemDescription';

const styles = {
  description: {},
  li: {
    color: '#fff',
    display: 'inline-block',
    listStyleType: 'none',
    marginBottom: '.5em'
  },
  link: {
    color: 'inherit',
    display: 'block',
    height: '100%',
    padding: '.5em',
    position: 'relative',
    textDecoration: 'none',
    bg: {
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      bottom: 0,
      content: '',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: -2
    },
    gradient: {
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), #000)',
      bottom: 0,
      content: '',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: -1
    }
  }
};

const ComicListItem = ({ data }) => {
  const thumbUrl = data.thumbnail ? `${data.thumbnail.path}.${data.thumbnail.extension}` : null;
  const onsaleDate = data.dates && data.dates.find(date => date.type === 'onsaleDate').date;

  return (
    <li style={styles.li}>
      <Link to={`/${data.id}`} style={{ ...styles.link }}>
        {thumbUrl && <div style={[styles.link.bg, { backgroundImage: `url('${thumbUrl}')` }]} aria-hidden="true" />}
        <div style={styles.link.gradient} aria-hidden="true" />
        {thumbUrl && <ComicListItemThumb src={thumbUrl} alt={`Capa da edição ${data.title}`} />}
        {onsaleDate && <ComicListItemTime dateTime={onsaleDate} />}
        <ComicListItemTitle>{data.title}</ComicListItemTitle>
        <ComicListItemDescription>{data.description}</ComicListItemDescription>
        <div style={{ clear: 'both' }} aria-hidden="true" />
      </Link>
    </li>
  );
};

ComicListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }),
    dates: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }))
  }).isRequired
};

export default Radium(ComicListItem);
