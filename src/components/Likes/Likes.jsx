import './Likes.sass';

import React, {Component} from 'react';

export class Likes extends Component {

    render() {
        const {likes} = this.props;

        return (
            <div className="Likes">
                <span className="visually-hidden">Likes:</span>
                <i className="fas fa-heart" aria-hidden="true"></i> {likes}
            </div>
        );
    }
};
    
