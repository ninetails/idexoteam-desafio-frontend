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
    height: '100%',
    width: '100%'
  }
};

export class ComicList extends PureComponent {
  static propTypes = {
    next: PropTypes.func,
    registerScroll: PropTypes.func,
    unregisterScroll: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number
    }))
  };

  static defaultProps = {
    data: [],
    next: () => undefined,
    registerScroll: null,
    unregisterScroll: null
  };

  componentDidMount() {
    this.props.next();
  }

  componentWillUnmount() {
    if (this.props.unregisterScroll) {
      this.props.unregisterScroll();
    }
  }

  refList = el => {
    if (!this.list) {
      if (this.props.registerScroll) {
        this.props.registerScroll(el);
      }
      this.list = el;
    }
  }

  render() {
    const { data } = this.props;

    if (!data.length) {
      return <p>Carregando...</p>;
    }

    return (
      <div style={[styles.wrapper]}>
        <ul ref={this.refList} style={[styles.list]}>
          {data.map(entry => <ComicListItem key={entry.id} data={entry} />)}
        </ul>
      </div>
    );
  }
}

export default Radium(ComicList);
