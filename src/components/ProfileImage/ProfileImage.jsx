import './ProfileImage.sass';

import React, {Component} from 'react';

export class ProfileImage extends Component {

    render() {
        const {image} = this.props;

        return (
            <div className="profile-image">
                <img src={image} alt=""/>
            </div>
        );
    }
}
