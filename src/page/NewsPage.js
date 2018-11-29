import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, fetchRelated } from '../actions';
import NewsContainer from '../components/NewsContainer';

class NewsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {            
            error: false,
            loading: false,
            hasMore: true,
            articleSlug: props.match.params.articleSlug
        };

        window.onscroll = () => {
            const { post, data, error, loading, currentPage, totalPage } = this.props;                           
            if (error || loading) {
                return;
            }
            
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {                
                if(post){                                     
                    const article = _.map(post, item => {            
                        return item;
                    });
                    if(article){
                        props.fetchRelated(article[article.length-1].id);
                    }                    
                }
            }
        };
    }

    componentDidMount() {
        const { articleSlug } = this.state;            
        this.props.fetchPost(articleSlug);
    }

    renderPosts() {
        const { post } = this.props;
        const { data, error, loading, hasMore } = post;            
        
        return _.map(post, item => {            
            return (<NewsContainer data={item} />);;
        });
    }

    render() {
        const { post } = this.props;
        const {data, error, loading, hasMore} = post;

        if(!post){
            return <div>Loading...</div>;
        }

        return (
            <div>                
                {this.renderPosts()}             
                <hr/>                
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {       
    return { post: posts };
}

export default connect(mapStateToProps, { fetchPost, fetchRelated })(NewsPage);