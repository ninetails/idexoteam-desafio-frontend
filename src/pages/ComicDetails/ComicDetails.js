import React from 'react';
import PropTypes from 'prop-types';

const ComicDetails = ({ match: { params: { comicId } } }) => <p>comicId: {comicId}</p>;

ComicDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      comicId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ComicDetails;
