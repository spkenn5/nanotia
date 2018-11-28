import React, { Component, Fragment } from "react";
import { render } from "react-dom";

export default function NewsContainer(props){
    const { data } = props;    
    return (
        <Fragment key={data.id}>
            <div className="news-page-news-container">
                <div className="news-page-news-container-detail-author">
                    <a href={`${data.author.author_url}`} data-cy="author-link">
                        <img
                            width="24"
                            height="24"
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
                <div className="news-page-news-container-detail">
                    <h2><a href={`/article/${data.slug}`}>{data.title}</a></h2>
                    <div className="news-page-news-content" dangerouslySetInnerHTML={{__html: data.content}} />
                </div>
            </div>
        </Fragment>
    );
}