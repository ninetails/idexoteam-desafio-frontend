import URI from 'urijs';

export default (path, query = {}) =>
  URI(`${process.env.REACT_APP_MARVEL_API_URL}${path}`)
    .query(query)
    .addQuery('apikey', process.env.REACT_APP_MARVEL_API_KEY);
