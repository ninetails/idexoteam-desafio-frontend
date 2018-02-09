import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import fecha from 'fecha';

const styles = {
  description: {},
  image: {
    display: 'inline-block',
    float: 'left',
    height: 'auto',
    marginRight: '.5em',
    maxWidth: '70px'
  },
  li: {
    display: 'inline-block',
    listStyleType: 'none'
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
  },
  time: {
    fontSize: '.8em',
    fontWeight: 'bold'
  },
  title: {
    margin: 0,
    fontSize: '1em'
  }
};

const ComicListItem = ({ data }) => {
  const thumbUrl = `${data.thumbnail.path}.${data.thumbnail.extension}`;
  const onsaleDate = data.dates.find(date => date.type === 'onsaleDate').date;
  console.log(data, onsaleDate);

  return (
    <li style={styles.li}>
      <Link to={`/${data.id}`} style={{ ...styles.link }}>
        <div style={[styles.link.bg, { backgroundImage: `url('${thumbUrl}')` }]} aria-hidden="true" />
        <div style={styles.link.gradient} aria-hidden="true" />
        <img src={thumbUrl} alt={`Capa da edição ${data.title}`} style={styles.image} />
        <time dateTime={onsaleDate} style={styles.time}>
          {fecha.format(fecha.parse(onsaleDate, 'YYYY-MM-DDTHH:mm:ss'), 'DD/MM/YYYY')}
        </time>
        <h3 style={styles.title}>{data.title}</h3>
        <p>{data.description}</p>
      </Link>
    </li>
  );
};

ComicListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired
};

export default Radium(ComicListItem);
