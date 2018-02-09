import React, { PureComponent } from 'react';
import ironManComics from '../../api/marvel/ironManComics';
import ComicList from '../../organisms/ComicList';

export default class MarvelComicListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      query: {
        offset: 0,
        limit: 20
      },
      data: []
    };
  }

  setLimit = (limit = 20) => {
    this.setState(state => ({
      ...state,
      query: {
        ...state.query,
        limit
      }
    }));
  }

  next = () => {
    ironManComics(this.state.query)
      .then(res => res.json())
      .then(res => this.setState(state => ({
        ...state,
        data: [
          ...this.state.data,
          ...res.data.results
        ],
        query: {
          ...state.query,
          offset: state.query.offset + state.query.limit
        }
      })))
      .catch(err => this.setState(state => ({
        ...state,
        err
      }), console.error.bind(console))); // eslint-disable-line no-console
  }

  render() {
    const { err } = this.state;

    if (err) {
      return <p>Ocorreu um erro!</p>;
    }

    return (
      <ComicList
        setLimit={this.setLimit}
        next={this.next}
        data={this.state.data}
      />
    );
  }
}
