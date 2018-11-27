import React, { Component, Fragment } from 'react';
import PropTypes from'prop-types';
export default function MainPageNewsContainer(props){
	const { data } = props;
	
	return (
		<Fragment key={data.id}>
       <hr />
       <div style={{ display: 'flex' }}>
	       <img className="avatar-placeholder" alt={data.author.display_name} src={data.author.avatar_url}/>
	       <div>	         
	         <p className="news-header"><a href={`/article/${data.slug}`}>{data.title}</a></p>	        
	         <p>Name: {data.author.display_name}</p>
	         <p>Email: {data.author.display_name}</p>
	       </div>
       </div>
     </Fragment>
   );
}

MainPageNewsContainer.propTypes = {
	data: PropTypes.any
}

MainPageNewsContainer.defaultProps = {
	data: {
		author: {}
	}
}