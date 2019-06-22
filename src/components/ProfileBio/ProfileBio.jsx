import './ProfileBio.sass';

import React, {Component} from 'react';

export class ProfileBio extends Component {

    render() {
        // const {text} = this.props;
        return (
            <div className="profile-bio">
                <p><span className="profile-real-name">Jane Doe</span> text ️</p>
            </div>
        );
    }
}
