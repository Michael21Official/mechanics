// PostPage.tsx
import React from 'react';
import Header from '../common/Header';
import ProfileInPosts from './ProfileInPosts';
import Posts from './Posts';
import GlobalMessanger from './components/globalMessanger/GlobalMessanger';
import './PostPage.css';

function PostPage() {
  const user = {
    avatarUrl: '/assets/image/logo.png',
    username: 'NazwaUzytkownika',
  };

  const posts = [
    {
      id: 1,
      author: 'Autor 1',
      content: 'Treść postu 1',
      date: '2023-11-20',
      comments: [] // Dodaj pustą tablicę komentarzy, zgodnie z modelem PostType
    },
    {
      id: 2,
      author: 'Autor 2',
      content: 'Treść postu 2',
      date: '2023-11-21',
      comments: [] // Dodaj pustą tablicę komentarzy, zgodnie z modelem PostType
    },

    // Dodaj więcej postów według potrzeb
  ];

  return (
    <div className="post-page">
      <div id="NAGLOWEK"><ProfileInPosts user={user} /></div>
      <div id="MENU"><Header /></div>
      <div id="POST">
        <Posts posts={posts} />
      </div>
      <div id="GLOBALMESSANGER">
        <GlobalMessanger globalMessages={[]} />
      </div>
      <div id="STOPKA"></div>
    </div>
  );
}

export default PostPage;
