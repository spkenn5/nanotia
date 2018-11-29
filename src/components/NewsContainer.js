import React, { Component, Fragment } from "react";
import { render } from "react-dom";

export default function NewsContainer(props){
    const { data } = props;
    const paywalled = !data.is_paywalled ? "news-page-news-container" : "news-page-news-container-paywalled";  
    const paywalled2 = !data.is_paywalled ? "news-page-news-container-detail" : "news-page-news-container-detail-paywalled";
    const paywalled3 = !data.is_paywalled ? "news-page-news-content" : "news-page-news-content-paywalled";      
    return (
        <Fragment key={data.id}>
            <div className={paywalled}>
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
                <div className={paywalled2}>
                    <h2>{data.title}</h2>
                    <div className={paywalled3} dangerouslySetInnerHTML={{__html: data.content}} />
                    {data.is_paywalled ? <div><b>Please subscribe for complete content</b></div> : null}
                </div>
            </div>
        </Fragment>
    );
}