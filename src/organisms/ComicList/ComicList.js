import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import ComicListItem from '../../molecules/ComicListItem';

const styles = {
  list: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0
  },
  wrapper: {
    flex: '1 0 100%',
    height: '100%',
    overflow: 'auto',
    width: '100vw',
    '@media (min-width: 768px)': {
      flex: '1 1',
      width: 'auto'
    }
  }
};

export class ComicList extends PureComponent {
  static propTypes = {
    next: PropTypes.func,
    registerScroll: PropTypes.func,
    unregisterScroll: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number
    })),
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  };

  static defaultProps = {
    data: [],
    next: () => undefined,
    registerScroll: null,
    unregisterScroll: null,
    location: null,
  };

  componentDidMount() {
    this.props.next();
  }

  componentWillUnmount() {
    if (this.props.unregisterScroll) {
      this.props.unregisterScroll();
    }
  }

  onEnter = entry => {
    if (this.props.data.length - this.props.data.indexOf(entry) < 10) {
      this.props.next();
    }
  };

  refList = el => {
    if (!this.list) {
      if (this.props.registerScroll) {
        this.props.registerScroll(el);
      }
      this.list = el;
    }
  }

  render() {
    const { data, location } = this.props;

    if (!data.length) {
      return <p>Carregando...</p>;
    }

    return (
      <div style={[styles.wrapper]}>
        <ul ref={this.refList} style={[styles.list]}>
          {data.map(entry => (
            <ComicListItem key={entry.id} location={location} data={entry} onEnter={this.onEnter} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Radium(ComicList);
