import _ from 'lodash';
import React, {Fragment, Component} from 'react';
import MainPageNewsContainer from '../components/MainPageNewsContainer';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            error: false,
            loading: false, 
            totalPage: 999999
        };

        window.onscroll = () => {
            const { error, loading, currentPage, totalPage } = this.props.posts;            
            if (error || loading || currentPage === totalPage) {
                return;
            }

            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {                                             
                props.fetchPosts(currentPage+1, 5);
            }
        };
    }

    renderPosts() {
        return _.map(this.props.posts.data, post => {            
            return (<MainPageNewsContainer data={post}/>)
        });
    }

    componentWillMount() {
        this.props.fetchPosts(this.state.currentPage+1, 5);        
    }

    render() {
        const { posts } = this.props;
        const {data, error, loading, hasMore} = posts;
        return (
            <div>
                <div className="jumbotron text-center">
                  <Link to="/"><h1>My Nano TIA Page</h1></Link>
                  <p>Please scroll to the infinity and beyond!</p>
                </div>
                {this.renderPosts()}
                <hr/>
            </div>
        );
    }
}

function mapStateToProps(state) {    
    return { posts: state.posts };
}

export default connect(mapStateToProps, {fetchPosts})(HomePage);