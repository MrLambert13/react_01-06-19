import './Comments.sass';

import React, {Component} from 'react';

export class Comments extends Component {

    render() {
        const {comments} = this.props;

        return (
            <div className="Comments">
                <span className="visually-hidden">Comments:</span>
                <i className="fas fa-comment" aria-hidden="true"></i> {comments}
            </div>
        );
    }
};
    
