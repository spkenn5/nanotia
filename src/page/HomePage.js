import React, { Fragment, Component } from 'react';
import MainPageNewsContainer from '../components/MainPageNewsContainer';
import { render } from "react-dom";
import axios from 'axios';

export default class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: false,
            hasMore: true,
            loading: false,
            totalPage: 0,
            currentPage: 1,
            data: [],
        };

        window.onscroll = () => {
            const {
                loadUsers,
                state: {
                    error,
                    loading,
                    hasMore,
                },
            } = this;

            if (this.state.error || this.state.isLoading || !this.state.hasMore) return;

            // Checks that the page has scrolled to the bottom
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                loadUsers();
            }
        };
    }

    loadUsers = () => {
        this.setState({ 
            loading: true 
        }, () => {
        axios.get('https://www.techinasia.com/wp-json/techinasia/2.0/posts')
            .then((results) => {
                const { data } = results;
                if(data){
                    const { total_pages, current_page, posts } = data;
                    console.log('DEBUG posts ', results, total_pages, current_page, posts);
                    this.setState({
                        data: posts,
                        totalPage: total_pages,
                        currentPage: current_page
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
        this.loadUsers();
    }

    render() {
        const { data, error, loading, hasMore } = this.state;
        console.log('DEBUG data ', data);
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>My First Bootstrap Page</h1>
                    <p>Resize this responsive page to see the effect!</p>
                </div>
                <div className = "container" >
                    <div>
                    <h1>Infinite Posts!</h1>
                        <p>Scroll down to load more!!</p>
                        {
                            data.map(item => 
                            (<MainPageNewsContainer data={item} />)
                            )
                        }
                        <hr />
                        {error &&
                          <div style={{ color: '#900' }}>
                            {error}
                          </div>
                        }
                        {loading &&
                          <div>Loading...</div>
                        }
                        {!hasMore &&
                          <div>You did it! You reached the end!</div>
                        }
                  </div>
                </div>
            </div>
        );
    }
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<HomePage />, container);