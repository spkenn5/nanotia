import React, { Component } from 'react';

export default class NewsPage extends Component {
		constructor(props) {
			super(props);
			const { articleSlug } = props.match.params
			console.log('DEBUG -> ', articleSlug);
		}
		
    render() {
        return (
            <p></p>
        );
    }
}