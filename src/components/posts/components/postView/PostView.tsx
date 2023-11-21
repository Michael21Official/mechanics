// PostView.tsx
import React, { useState } from 'react';
import Post from '../../Post';
import { PostType, CommentType, UserData } from '../../../../types/types';
import PostComments from './components/PostComments'; // Importuj nowy komponent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Importuj ikonę krzyża
import './PostView.css';

interface PostViewProps {
  post: PostType;
  onClose: () => void;
}

const PostView: React.FC<PostViewProps> = ({ post, onClose }) => {
  const [newComment, setNewComment] = useState<string>(''); // Nowe pole stanu

  // Przykładowe treści komentarzy (możesz dostosować do swoich potrzeb)
  const sampleComments: CommentType[] = [
    {
    commentId: 1,
      postId: post.id, // Dostosuj postId do odpowiedniego pola w Twoim przypadku
      author: {
        avatarUrl: '/path/to/avatar.jpg', // Popraw ścieżkę do prawidłowego URL awatara
        username: 'ExampleUser',
      },
      content: 'Świetny post!',
      created_at: new Date(),
      likes_count: 5,
      dislikes_count: 0,
      other_comment_details: '',
    },
    {
      commentId: 2,
      postId: post.id, // Dostosuj postId do odpowiedniego pola w Twoim przypadku
      author: {
        avatarUrl: '/path/to/another-avatar.jpg', // Popraw ścieżkę do prawidłowego URL awatara
        username: 'AnotherUser',
      },
      content: 'Dzięki za udostępnienie!',
      created_at: new Date(),
      likes_count: 10,
      dislikes_count: 2,
      other_comment_details: '',
    },
  ];

  // Obsługa zmiany treści nowego komentarza
  const handleNewCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  // Obsługa dodawania nowego komentarza
  const handleAddComment = () => {
    // Tutaj można dodać logikę dodawania komentarza do bazy danych lub aktualizować stan komentarzy lokalnych
    // Przykład dodawania lokalnie nowego komentarza
    const newCommentObj: CommentType = {
      commentId: sampleComments.length + 1, // Przyjmujemy, że commentId jest unikalne
      postId: post.id,
      author: {
        avatarUrl: '/path/to/new-avatar.jpg', // Popraw ścieżkę do prawidłowego URL awatara
        username: 'NewUser',
      },
      content: newComment,
      created_at: new Date(),
      likes_count: 0,
      dislikes_count: 0,
      other_comment_details: '',
    };

    setNewComment(''); // Wyczyść pole nowego komentarza po dodaniu
    // Aktualizuj stan komentarzy
    // setSampleComments([...sampleComments, newCommentObj]); // Rozkomentuj, jeśli chcesz aktualizować stan komentarzy lokalnie
  };

  return (
    <div className="post-view-overlay">
      <div className="post-detail">
        

        <div className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </div>


        <Post post={post} />

        <div className="add-comment-section">
          <textarea
            placeholder="Dodaj nowy komentarz..."
            value={newComment}
            onChange={handleNewCommentChange}
          />
          <button onClick={handleAddComment}>Dodaj komentarz</button>
        </div>

        <PostComments comments={sampleComments} />

      </div>
    </div>
  );
};

export default PostView;
