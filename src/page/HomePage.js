import React, {Fragment, Component} from 'react';
import MainPageNewsContainer from '../components/MainPageNewsContainer';
import {render} from "react-dom";
import axios from 'axios';

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasMore: true,
            error: false,
            loading: false,
            totalPage: 0,
            currentPage: 0,
            data: [],
        };

        window.onscroll = () => {
            const {
                loadUsers,
                state: {
                    error,
                    loading,
                    currentPage,
                    totalPage
                },
            } = this;

            if (error || loading || currentPage === totalPage) {
                return;
            }

            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                loadUsers(currentPage);
            }
        };
    }

    loadUsers = (currentPage) => {
        this.setState({
            loading: true
        }, () => {
            axios.get(`https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=${currentPage+1}&per_page=10`)
                .then((results) => {
                    const {data} = results;
                    if (data) {
                        const {total_pages, current_page, posts} = data;
                        this.setState({
                            data: [
                                ...this.state.data,
                                ...posts
                            ],
                            totalPage: total_pages,
                            currentPage: current_page,
                            hasMore: current_page < total_pages
                        });
                    }
                })
                .catch((err) => {
                    console.log('DEBUG err', err);
                })
                .then(() => {
                    this.setState({loading: false});
                })
        });
    }

    componentWillMount() {
        this.loadUsers(this.state.currentPage);
    }

    render() {
        const {data, error, loading, hasMore} = this.state;
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>My Nano TIA Page</h1>
                    <p>Please scroll to the infinity and beyond!</p>
                </div>
                {data.map(item => (<MainPageNewsContainer data={item}/>))}
                <hr/>
                {error && <div style={{color: '#900'}}>{error}</div>}
                {loading && <div>Loading...</div>}
                {!hasMore && <div>You did it! You reached the end!</div>}
            </div>
        );
    }
}