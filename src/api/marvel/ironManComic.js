import createUrlRequest from './createUrlRequest';

export default comicId => fetch(`${createUrlRequest(`/v1/public/comics/${comicId}`)}`);
