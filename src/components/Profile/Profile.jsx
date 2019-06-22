import './Profile.sass';

import React, {Component} from 'react';
import {ProfileImage} from 'components/ProfileImage';
import {ProfileSetting} from 'components/ProfileSetting';
import {ProfileStat} from 'components/ProfileStat';
import {ProfileBio} from 'components/ProfileBio';
import {profile} from 'src/profile';

export class Profile extends Component {

    constructor(props) {
        super(props);

        fetch(`http://localhost:8888/api/users`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${props.token}`,
            },
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <div className="profile">
                <ProfileImage image={profile.image}/>
                <ProfileSetting/>
                <ProfileStat {...profile}/>
                <ProfileBio/>
            </div>
        );
    }
};
    
