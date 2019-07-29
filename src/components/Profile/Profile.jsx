import './Profile.sass';

import React, { Component } from 'react';
import { ProfileImage } from 'components/ProfileImage';
import { ProfileSetting } from 'components/ProfileSetting';
import { ProfileStat } from 'components/ProfileStat';
import { ProfileBio } from 'components/ProfileBio';

export class Profile extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="profile">
        <ProfileImage image={user.avatar} />
        <ProfileSetting email={user.firstName} />
        <ProfileStat posts='13' followers='13' following='13' />
        <ProfileBio {...user} />
      </div>
    );
  }
}
