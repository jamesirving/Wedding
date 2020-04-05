import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

// eslint-disable-next-line no-unused-vars
const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  const pageHeader = {
    preheading: entry.getIn(['data', 'preheading']),
    heading: entry.getIn(['data', 'heading']),
    subheading: entry.getIn(['data', 'subheading']),
    image: getAsset(entry.getIn(['data', 'image'])),
  };

  if (data) {
    return (
      <IndexPageTemplate
        pageHeaderBlock={pageHeader || {}}
        detailsBlock={data.detailsBlock || {}}
        rsvpBlock={data.rsvpBlock || {}}
      />
    );
  }
  return <div>Loading...</div>;
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
