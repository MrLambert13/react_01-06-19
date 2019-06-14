import './ImageBox.sass';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ImageItem} from 'components/ImageItem';
import {ImageInfo} from 'components/ImageInfo';
import {ImageType} from 'components/ImageType';


export class ImageBox extends Component {
    render() {
        const {image, likes, comments} = this.props;

        return (
            <div className="gallery-item" tabIndex="0">
                <ImageItem image={image}/>
                <ImageType/>
                <ImageInfo likes={likes} comments={comments}/>>
            </div>
        );
    }
}

ImageBox.propTypes = {
    image: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number
};
