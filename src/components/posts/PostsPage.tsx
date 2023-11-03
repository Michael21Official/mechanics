import React from 'react';
import Header from '../common/Header';
import ProfileInPosts from './ProfileInPosts';
import PostService from './PostService';

function PostPage() {
  const user = {
    avatarUrl: '/assets/image/logo.png',
    username: 'NazwaUzytkownika',
  };

  // Przykładowe dane postów
  const posts = [
    {
      image: 'awatarztlem.png',
      name: 'Nazwa Postu 1',
      status: 'Aktywny',
      comments: 32,
      category: 'IT',
    },
    {
      image: 'logo.png',
      name: 'Nazwa Postu 2',
      status: 'Nieaktywny',
      comments: 15,
      category: 'Inna kategoria',
    },
    {
      image: 'awatarztlem.png',
      name: 'Nazwa Postu 1',
      status: 'Aktywny',
      comments: 32,
      category: 'IT',
    },
    {
      image: 'logo.png',
      name: 'Nazwa Postu 2',
      status: 'Nieaktywny',
      comments: 15,
      category: 'Inna kategoria',
    },
    
    
    // Dodaj więcej postów według potrzeb
  ];

  return (
    <div className="post-page">
      <Header />
      <ProfileInPosts user={user} />
      <PostService posts={posts} /> {/* Przekazuj dane postów do PostService */}
      {/* Dodaj tutaj formularz do tworzenia nowych postów lub inne funkcje */}
    </div>
  );
}

export default PostPage;
