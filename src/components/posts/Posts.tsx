import React, { useEffect, useState } from 'react';
import Post from './Post'; // Importuj komponent Post
import { PostType } from '../../types/types'; // Importuj typ PostType z pliku types.ts

function Posts() {
  // Stan przechowujący posty
  const [posts, setPosts] = useState<PostType[]>([]);

  // Symulacja pobierania postów z API
  useEffect(() => {
    // Tutaj możesz wywołać funkcję do pobierania postów z API
    // np. axios.get('/api/posts').then(response => setPosts(response.data))
    // Poniżej przykład danych dla symulacji
    const fakePosts: PostType[] = [
      {
        id: 1,
        author: 'User1',
        content: 'To jest treść pierwszego posta.',
        date: '2023-10-10',
      },
      {
        id: 2,
        author: 'User2',
        content: 'To jest treść drugiego posta.',
        date: '2023-10-11',
      },
      {
        id: 1,
        author: 'User1',
        content: 'To jest treść trzeciego posta.',
        date: '2023-10-10',
      },
      {
        id: 2,
        author: 'User2',
        content: 'To jest treść czwartego posta.',
        date: '2023-10-11',
      },
      {
        id: 1,
        author: 'User1',
        content: 'To jest treść piątego posta.',
        date: '2023-10-10',
      },
    ];

    setPosts(fakePosts);
  }, []);

  return (
    <div className="posts-container">
      {posts.map(post => (
        <Post
          key={post.id}
          post={post} // Przekazujemy cały obiekt postu jako właściwość post
        />
      ))}
    </div>
  );
}

export default Posts;