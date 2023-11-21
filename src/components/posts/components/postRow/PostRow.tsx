import React from 'react';
import './PostRow.css';
import * as ImageService from 'D:/Studia/DYPLOMÓWKA/mechanics-nexus/mechanics/src/services/ImageService';


interface PostRowProps {
  image: string;
  postName: string;
  status: string;
  comments: number;
  category: string;
}

const PostRow: React.FC<PostRowProps> = ({
  image,
  postName,
  status,
  comments,
  category,
}) => {

  // Załaduj obrazek
  //const imageUrl = ImageService.loadImage(image);
  return (
    <div className="post-row">
      <button className="cell-more-button">
        <svg
          xmlns=""
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-more-vertical"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </button>
      <div className="post-cell image">
        <img src='/image/background.jpg' alt="Zdjęcie" />
      </div>
      <div>
      <span>{postName}</span>
      </div>
      <div className="post-cell category">
        <span className="cell-label">Category:</span>
        {category}
      </div>
      <div className="post-cell status-cell">
        <span className="cell-label">Status:</span>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>
      <div className="post-cell sales">
        <span className="cell-label">Comments:</span>
        {comments}
      </div>
    </div>
  );
};

export default PostRow;
