// UserProfile.tsx
import React from 'react';
import { UserProfileProps } from '../../types/types';

function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="profile">
      <div className="bg-profile"></div>
      <img src={user.avatarUrl} className="pic-profile" alt="User Avatar" />
      <div className="profil">
        <img src="https://cdn-icons-png.flaticon.com/512/7011/7011411.png" alt="Stats Icon" />
        <span>Stats</span>
      </div>
      <div className="trophy">
        <img src="https://cdn-icons-png.flaticon.com/512/7011/7011471.png" alt="Trophies Icon" />
        <span>Trophies</span>
      </div>
    </div>
  );
}

export default UserProfile;
