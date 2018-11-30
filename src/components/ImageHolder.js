import React from 'react';
import PropTypes from 'prop-types';

export default function ImageHolder(props){
	const { url } = props;
	return (
		<img
        width="250"
        height="170"
        src={url}        
        style={{
          objectFit: 'cover', 
          display: 'inline-block', 
          backgroundColor: 'rgba(0, 0, 0, 0.067)'
        }}
    />
	);
}

ImageHolder.propTypes = {
	url: PropTypes.string,
}

ImageHolder.defaultProps = {
	url: ''
}