// ProfileInPosts.tsx
import React from 'react';
import { UserProfileProps } from '../../types/types';

function ProfileInPosts({ user }: UserProfileProps) {
  return (
    <div className="profile-in-posts">
      <img className="avatar" src={user.avatarUrl} alt="User Avatar" />
      <div className="username">{user.username}</div>
    </div>
  );
}

export default ProfileInPosts;
