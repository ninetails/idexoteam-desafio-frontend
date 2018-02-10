import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ironManComic from '../../api/marvel/ironManComic';
import ComicDetails from '../../molecules/ComicDetails';

export default class MarvelComicDetailsContainer extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this.state = null;
  }

  componentDidMount() {
    this.fetchDetails(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.fetchDetails(this.props.id);
    }
  }

  fetchDetails = id => ironManComic(id)
    .then(res => res.json())
    .then(data => this.setState(state => ({
      ...state,
      ...data.data.results[0]
    })))
    .catch(err => this.setState(state => ({
      ...state,
      err
    })));

  render() {
    if (!this.state) {
      return <p>Carregando...</p>;
    }

    const { err } = this.state;
    if (err) {
      return <p>Ocorreu um erro!</p>;
    }

    return (
      <ComicDetails {...this.state} />
    );
  }
}
