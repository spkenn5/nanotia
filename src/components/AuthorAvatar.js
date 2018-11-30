import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorAvatar(props){
	const { url } = props;
	return (
		<img
      width="24"
      height="24"
      src={url}
      data-src={url}   
			style={{
        objectFit: 'cover',
        display: 'inline-block',
        backgroundColor: 'rgba(0, 0, 0, 0.067)',
        borderRadius: 123123,
				marginRight: 10
      }}   
    />
	);
}

AuthorAvatar.propTypes = {
	url: PropTypes.string,
}

AuthorAvatar.defaultProps = {
	url: ''
}