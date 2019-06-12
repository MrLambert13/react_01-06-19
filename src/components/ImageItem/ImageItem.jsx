import './ImageItem.sass';

import React, {Component} from 'react';
import {Likes} from 'components/Likes';
import {Comments} from 'components/Comments';
import PropTypes from 'prop-types';

export class ImageItem extends Component {

    render() {
        const {image, likes, comments} = this.props;

        return (
            <div className="gallery-item" tabIndex="0">
                <img src={image} className="gallery-image" alt=""/>
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
            </div>
        );
    }
}

ImageItem.propTypes = {
    image: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number
};
