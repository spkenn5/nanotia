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
            const { data, error, loading, currentPage, totalPage } = this.props.post;               
            console.log('DEBUG --> ', this.props.post);
            if (error || loading) {
                return;
            }
            
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {                                        
                if(data){                  
                  props.fetchRelated(data.id);  
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
        
        if(data){
          return (<NewsContainer data={data} />);  
        }
        return null;
    }

    render() {
        const { post } = this.props;
        const {data, error, loading, hasMore} = post;

        if(!post){
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>My Nano TIA Page</h1>
                    <p>Please scroll to the infinity and beyond!</p>
                </div>   
                {this.renderPosts()}             
                <hr/>
                {error && <div style={{color: '#900'}}>{error}</div>}
                {loading && <div>Loading...</div>}
                {!hasMore && <div>You did it! You reached the end!</div>}
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {  
  return { post: posts };
}

export default connect(mapStateToProps, { fetchPost, fetchRelated })(NewsPage);