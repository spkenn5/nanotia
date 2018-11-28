import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
export default function MainPageNewsContainer(props){
	const { data } = props;
	
	return (
		<Fragment key={data.id}>
            <div className="main-page-news-container">
                <div className="main-page-news-container-img">
					<a href={`/article/${data.slug}`}>
						<img
							width="250"
							height="170"
							src={data.featured_image.source}
							data-src="https://cdn.techinasia.com/wp-content/uploads/2016/03/Inside-Netflixs-battle-to-win-the-world-photo-04.jpg"
							style={{objectFit: 'cover', display: 'inline-block', backgroundColor: 'rgba(0, 0, 0, 0.067)'}}
						/>
					</a>
				</div>
                <div className="main-page-news-container-detail">
                    <h2><a href={`/article/${data.slug}`}>{data.title}</a></h2>
                    <div>{data.excerpt}</div>
                    <div className="main-page-news-container-detail-author">
						<a href={`${data.author.author_url}`} data-cy="author-link">
                        <img
                            width="34"
                            height="34"
                            src={data.author.avatar_url}
                            data-src={data.author.avatar_url}
                            style={{
                                objectFit: 'cover',
                                display: 'inline-block',
                                backgroundColor: 'rgba(0, 0, 0, 0.067)',
                                borderRadius: 123123,
								marginRight: 10
                            }}
                        />{data.author.display_name}
                        </a>·
						<span style={{fontSize: 12, marginLeft: 10}}>{`${data.read_time} min read`}</span>
					</div>
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