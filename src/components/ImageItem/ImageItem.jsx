import './ImageItem.sass';

import React, {Component} from 'react';

export class ImageItem extends Component {

    render() {
        const {image} = this.props;

        return (
            <img src={image} className="gallery-image" alt=""/>
        );
    }
}
