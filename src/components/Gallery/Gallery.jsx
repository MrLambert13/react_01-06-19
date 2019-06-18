import './Gallery.sass';

import React, {Component} from 'react';
import {pictures} from 'src/pictures';
import {ImageBox} from 'components/ImageBox';

export class Gallery extends Component {

    render() {
        return (
            <div className="gallery">
                {pictures.map((picture, idx) => <ImageBox key={idx} {...picture} />)}
            </div>
        );
    }
};
    
