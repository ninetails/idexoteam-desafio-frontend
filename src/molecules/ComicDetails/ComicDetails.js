import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import DocumentTitle from 'react-document-title';

import Time from '../../atoms/Time';

const styles = {
  list: {
    label: {
      fontWeight: 'bold',
      marginTop: '.5em'
    },
    item: {
      margin: 0
    }
  },
  thumb: {
    float: 'right',
    height: 'auto',
    maxWidth: '30%',
    margin: '1em'
  },
  wrapper: {
    clear: 'both'
  }
};

export const ComicDetails = ({
  title,
  description,
  thumbnail,
  issueNumber,
  pageCount,
  dates,
  characters,
  creators,
  series
}) => {
  const thumbUrl = thumbnail
    ? `${thumbnail.path}.${thumbnail.extension}`.replace(/^https?:\/\//i, 'https://')
    : null;

  return (
    <DocumentTitle title={title}>
      <div style={styles.wrapper}>
        {thumbUrl && <img src={thumbUrl} alt={`Capa de ${title}`} style={styles.thumb} />}

        {dates && dates.length && dates.map(date =>
          date.type === 'onsaleDate' && (
            <Time key={date.date} dateTime={date.date} />
          ))}

        <h2>{title}</h2>

        {description && <p>{description}</p>}

        {series && <p>Série: {series.name}</p>}

        {issueNumber && <p>Edição #{issueNumber}</p>}

        <dl style={styles.list}>

          {characters && (
            <Fragment>
              <dt style={styles.list.label}>Personagens</dt>
              {characters.items.map(char =>
                (<dd style={styles.list.item} key={char.name}>{char.name}</dd>))}
            </Fragment>
          )}

          {creators && (
            <Fragment>
              <dt style={styles.list.label}>Autores</dt>
              {creators.items.map(creator => (
                <dd style={styles.list.item} key={creator.name}>
                  {creator.name}
                  {creator.role && ` - ${creator.role}`}
                </dd>
              ))}
            </Fragment>
          )}

          {pageCount && (
            <Fragment>
              <dt style={styles.list.label}>Páginas</dt>
              <dd style={styles.list.item}>{pageCount} páginas</dd>
            </Fragment>
          )}

        </dl>
      </div>
    </DocumentTitle>
  );
};

ComicDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }),
  dates: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    date: PropTypes.string
  })),
  issueNumber: PropTypes.number,
  pageCount: PropTypes.number,
  characters: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired
  }),
  creators: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string
    }))
  }),
  series: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

ComicDetails.defaultProps = {
  description: null,
  thumbnail: null,
  dates: [],
  issueNumber: null,
  pageCount: null,
  characters: null,
  creators: null,
  series: null
};

export default Radium(ComicDetails);
