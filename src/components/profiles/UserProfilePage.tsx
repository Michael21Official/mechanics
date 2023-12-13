import React, { useState } from 'react';
import './UserProfilePage.css';
import Header from '../common/Header';
import UserProfile from './components/userProfile/UserProfile';
import Messenger from './components/messenger/Messenger';
import { UserProfileProps, UserStats, UserData } from '../../types/types';

function UserProfilePage() {
  const [userData, setUserData] = useState<UserData>({
    user_id: 1,
    avatarUrl: '/image/logo.png',
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    account_created_at: '2023-01-01T12:00:00',
    scientific_interests: 'Mechanika kwantowa',
    birth_year: 1990,
    university_name: 'Uniwersytet Techniczny',
    faculty: 'Informatyka',
    field_of_study: 'Inżynieria oprogramowania',
    degree_level: 'Inżynier',
    user_title: 'Student',
    other_user_details: 'Dodatkowe informacje o użytkowniku',
    posts_count: 0, // Provide default or actual value
    likes_count: 0, // Provide default or actual value
    comments_count: 0, // Provide default or actual value
    successful_posts_count: 0, // Provide default or actual value
    failed_posts_count: 0, // Provide default or actual value
    other_user_stats_details: '', // Provide default or actual value
  });
  
  const [userStats, setUserStats] = useState<UserStats>({
    user_id: 1,
    posts_count: 10,
    likes_count: 20,
    comments_count: 5,
    successful_posts_count: 8,
    failed_posts_count: 2,
    account_created_at: '2023-01-01T12:00:00',
    scientific_interests: 'Mechanika kwantowa',
    other_user_stats_details: 'Dodatkowe informacje o statystykach użytkownika',
  });
  
  

  const isAuthenticated = true;

  return (
    <div id='PAGE-PROFILE'>
      <div id='HEADER'>
        <Header />
      </div>
      <div id='PROFILE'>
        {userData && userStats && <UserProfile user={userData} stats={userStats} />}
      </div>
      <div id='MESSENGER'>
        <Messenger user={userData} isAuthenticated={isAuthenticated} />
      </div>
    </div>
  );
}

export default UserProfilePage;
