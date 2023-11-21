import React from 'react';
import PostRow from './components/postRow/PostRow';
import { PostServiceProps } from '../../types/types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PostService.css';

const PostService: React.FC<PostServiceProps> = ({ posts }) => {
  const sliderSettings = {
    dots: true, // Wyświetl kropki nawigacji
    infinite: true, // Zapętlenie slidera
    speed: 500, // Szybkość przewijania
    slidesToShow: 4, // Liczba wyświetlanych elementów na raz
    slidesToScroll: 1, // Liczba elementów do przewinięciacenterMode: true, // Dodaj centerMode
    centerMode: true, // Dodaj centerMode
    centerPadding: '0', // Ustaw zero padding w trybie centerMode
    
  };

  return (
    <div className='post-component'>
      <Slider {...sliderSettings}>
        {posts.map((post, index) => (
          <div key={index}>
            <div className="post-row-container"> {/* Dodaj wewnętrzny kontener */}
              <PostRow
                image={post.image}
                postName={post.name}
                status={post.status}
                comments={post.comments}
                category={post.category}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PostService;
