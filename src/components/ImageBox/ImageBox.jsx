import './ImageBox.sass';

import React, {Component} from 'react';
import {pictures} from 'src/pictures';
import {ImageItem} from 'components/ImageItem';


export class ImageBox extends Component {
    render() {
        const {} = this.props;
        return (
            <div className="gallery">
                {pictures.map((picture, idx) => <ImageItem key={idx} {...picture} />)}
            </div>
        );
    }
}

