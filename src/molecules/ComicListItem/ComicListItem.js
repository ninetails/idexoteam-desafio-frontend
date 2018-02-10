import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { NavLink } from 'react-router-dom';
import Waypoint from 'react-waypoint';
import Time from '../../atoms/Time';
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
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), #000)',
      bottom: 0,
      content: '',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: -1
    }
  },
  more: {
    display: 'inline-block',
    float: 'right',
    fontWeight: 'bold',
    textAlign: 'right',
    '@media (min-width: 768px)': {
      display: 'none'
    }
  }
};

export class ComicListItem extends PureComponent {
  static propTypes = {
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
    }).isRequired,
    onEnter: PropTypes.func
  };

  static defaultProps = {
    onEnter: () => undefined
  };

  constructor(props) {
    super(props);

    this.state = {
      render: false
    };
  }

  toRender = data =>
    () =>
      !this.state.render && this.setState(
        () => ({ render: true }),
        () => this.props.onEnter(data)
      );

  render() {
    const { data } = this.props;

    if (!this.state.render) {
      return (
        <li style={{ height: '100px' }}>
          <Waypoint onEnter={this.toRender(data)} />
        </li>
      );
    }

    const thumbUrl = data.thumbnail
      ? `${data.thumbnail.path}.${data.thumbnail.extension}`.replace(/^https?:\/\//i, 'https://')
      : null;
    const onsaleDate = data.dates && data.dates.find(date => date.type === 'onsaleDate').date;

    return (
      <li style={styles.li}>
        <NavLink to={`/${data.id}`} style={{ ...styles.link }} activeStyle={{ border: '1px solid #eee' }}>

          {thumbUrl && <div style={[styles.link.bg, { backgroundImage: `url('${thumbUrl}')` }]} aria-hidden="true" />}
          <div style={styles.link.gradient} aria-hidden="true" />

          {thumbUrl && <ComicListItemThumb src={thumbUrl} alt={`Capa da edição ${data.title}`} />}

          {onsaleDate && <Time dateTime={onsaleDate} />}

          <ComicListItemTitle>{data.title}</ComicListItemTitle>

          <ComicListItemDescription>{data.description}</ComicListItemDescription>

          <div style={styles.more}>ver detalhes &raquo;</div>

          <div style={{ clear: 'both' }} aria-hidden="true" />
        </NavLink>
      </li>
    );
  }
}

export default Radium(ComicListItem);
