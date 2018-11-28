import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class NewsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articleSlug: props.match.params
        };
    }

    componentDidMount() {
        const { articleSlug } = this.state;
        this.props.fetchPost(articleSlug);
    }

    render() {
        const { post } = this.props;

        if(!post){
            return <div>Loading...</div>;
        }

        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(NewsPage);