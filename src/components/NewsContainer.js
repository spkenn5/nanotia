import React, { Component, Fragment } from "react";
import AuthorAvatar from './AuthorAvatar';
import AuthorHolder from './AuthorHolder';
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
                    <AuthorHolder data={data.author} readTime={data.read_time} />                    
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