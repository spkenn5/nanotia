import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthorAvatar from './AuthorAvatar';
import ImageHolder from './ImageHolder';
import AuthorHolder from './AuthorHolder';
export default function MainContainer(props){
	const { data } = props;
	return (
		<Fragment key={data.id}>
            <div className="main-page-news-container">
                <div className="main-page-news-container-img">
					<Link to={`/article/${data.slug}`}>
						<ImageHolder url={data.featured_image.source}/>
					</Link>
				</div>
                <div className="main-page-news-container-detail">
                    <Link to={`/article/${data.slug}`}><h2>{data.title}</h2></Link>
                    <div>{data.excerpt}</div>
                    <div className="main-page-news-container-detail-author">
						<AuthorHolder data={data.author} readTime={data.read_time} />
					</div>
                </div>
            </div>
     </Fragment>
   );
}

MainContainer.propTypes = {
	data: PropTypes.any
}

MainContainer.defaultProps = {
	data: {
		author: {}
	}
}