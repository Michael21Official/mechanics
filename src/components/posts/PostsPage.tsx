// PostPage.tsx
import React from 'react';
import Posts from './Posts';
import Header from '../common/Header';
import { UserProfileProps } from '../../types/types';
import ProfileInPosts from './ProfileInPosts'; // Import nowego komponentu

function PostPage() {
  const user = {
    avatarUrl: '/assets/image/logo.png',
    username: 'NazwaUzytkownika',
  };

  return (
    <div className="post-page">
      <Header />
      <ProfileInPosts user={user} /> {/* Użyj nowego komponentu ProfileInPosts */}
      <h2>Twoje Posty</h2>
      <Posts />
      {/* Dodaj tutaj formularz do tworzenia nowych postów lub inne funkcje */}
    </div>
  );
}

export default PostPage;
