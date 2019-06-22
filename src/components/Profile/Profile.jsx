import './Profile.sass';

import React, {Component} from 'react';
import {ProfileImage} from 'components/ProfileImage';
import {ProfileSetting} from 'components/ProfileSetting';
import {ProfileStat} from 'components/ProfileStat';
import {ProfileBio} from 'components/ProfileBio';
import {profile} from 'src/profile';

export class Profile extends Component {

    render() {
        const {token} = this.props;
        return (
            <div className="profile">
                <ProfileImage image={profile.image}/>
                <ProfileSetting/>
                <ProfileStat {...profile}/>
                <ProfileBio/>
            </div>
        );
    }
}
    
