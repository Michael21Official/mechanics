import React from 'react';
import PostRow from './components/PostRow';
import { PostServiceProps } from '../../types/types';
import './PostService.css';


const PostService: React.FC<PostServiceProps> = ({ posts }) => {
    return (
      <div className='post-component'>
        <div className="post-view">
          {posts.map((post, index) => (
            <PostRow
              key={index}
              image={post.image}
              postName={post.name}
              status={post.status}
              comments={post.comments}
              category={post.category}
            />
          ))}
        </div>
      </div>
    );
  };
  

export default PostService;
