import React from 'react';
import PropTypes from 'prop-types';
import AuthorAvatar from './AuthorAvatar';

export default function AuthorHolder(props){
	const { data, readTime } = props;
	return (
    <div>
  		<a href={`${data.author_url}`} data-cy="author-link">
        <AuthorAvatar url={data.avatar_url} />{data.display_name}
      </a>
      <span style={{marginLeft: 5, marginRight:5}}>·</span>
      <span style={{fontSize: 12}}>{`${readTime} min read`}</span>
    </div>
	);
}

AuthorHolder.propTypes = {
	data: PropTypes.object,
  readTime: PropTypes.number,
}

AuthorHolder.defaultProps = {
	data: {},
  readTime: 0
}