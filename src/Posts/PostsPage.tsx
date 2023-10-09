import React from 'react';
import Posts from './Posts'; // Importuj komponent z postami
import './PostPage.css'; // Importuj plik ze stylami CSS

function PostPage() {
  return (
    <div className="post-page">
      <h2>Twoje Posty</h2>
      <Posts />
      {/* Dodaj tutaj formularz do tworzenia nowych postów lub inne funkcje */}
    </div>
  );
}

export default PostPage;