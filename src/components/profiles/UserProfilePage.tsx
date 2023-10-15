// UserProfilePage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../profiles/UserProfile';
import UserStats from '../profiles/UserStats';
import RecentMatches from '../profiles/RecentMatches';
import Header from '../common/Header';
import { UserData } from '../../types/types'; // Import user data type
import './UserProfilePage.css';

function UserProfilePage() {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    // Simulate fetching user data from the server
    const fakeUser: UserData = {
      avatarUrl: require('../../assets/image/awatarbetla.png'), // Use require for the image path
      username: 'ExampleUser',
    };

    setUser(fakeUser);
  }, [userId]);

  const userStats = {
    pvp: 62,
    farming: 48,
    victories: 91,
    supporting: 77,
  };

  const recentMatches = [
    { result: 'Win', date: '20/09/2017 19:35', time: '24:19' },
    { result: 'Loss', date: '18/09/2017 17:22', time: '42:07' },
    { result: 'Loss', date: '18/09/2017 13:45', time: '33:25' },
    { result: 'Win', date: '14/09/2017 20:24', time: '18:25' },
  ];

  return (
    <div className="user-profile-page">
      <Header />
      {user ? (
        <div className="container">
          <div className="left">
            <UserProfile user={user} />
            <UserStats stats={userStats} />
          </div>
          <div className="right">
            <RecentMatches matches={recentMatches} />
          </div>
        </div>
      ) : (
        <p>Ładowanie danych użytkownika...</p>
      )}
    </div>
  );
}

export default UserProfilePage;
