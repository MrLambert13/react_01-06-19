import './ProfileStat.sass';

import React, {Component} from 'react';

export class ProfileStat extends Component {

    render() {
        const {posts, followers, following} = this.props;

        return (
            <div className="profile-stats">
                <ul>
                    <li><span className="profile-stat-count">{posts}</span> posts</li>
                    <li><span className="profile-stat-count">{followers}</span> followers</li>
                    <li><span className="profile-stat-count">{following}</span> following</li>
                </ul>
            </div>
        );
    }
};
    
