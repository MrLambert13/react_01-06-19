import './ProfileBio.sass';

import React, {Component} from 'react';

export class ProfileBio extends Component {

    render() {
        const {firstName, lastName, bio} = this.props;
        return (
            <div className="profile-bio">
                <p><span className="profile-real-name">{firstName} {lastName}</span> {bio} ️</p>
            </div>
        );
    }
}
