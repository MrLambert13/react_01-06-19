import './ImageInfo.sass';

import React, {Component} from 'react';
import {Likes} from 'components/Likes';
import {Comments} from 'components/Comments';

export class ImageInfo extends Component {

    render() {
        const {likes, comments} = this.props;

        return (
            <div className="gallery-item-info">
                <ul>
                    <li className="gallery-item-likes">
                        <Likes likes={likes}/>
                    </li>
                    <li className="gallery-item-comments">
                        <Comments comments={comments}/>
                    </li>
                </ul>
            </div>
        );
    }
}
