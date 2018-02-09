import createUrlRequest from './createUrlRequest';

const url = `/v1/public/characters/${process.env.REACT_APP_MARVEL_CHARACTER_ID}/comics`;

export default (query = {}) => fetch(`${createUrlRequest(url, {
  format: 'comic',
  formatType: 'comic',
  orderBy: '-onsaleDate',
  dateRange: `1900-01-01,${(new Date()).getFullYear() + 1}-01-01`,
  ...query
})}`);
