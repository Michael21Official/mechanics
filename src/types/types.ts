// types.ts
import { ReactNode } from 'react';


export interface CalendarProps {
  onDaySelect: (day: number) => void;
}

export interface LoginUserData {
  email: string;
  password: string;
}

// Typ dla danych użytkownika
export interface UserData {
  user_id: number;
  avatarUrl: string;
  username: string;
  email: string;
  account_created_at: string;
  scientific_interests: string;
  birth_year: number;
  university_name: string;
  faculty: string;
  field_of_study: string;
  degree_level: string;
  user_title: string;
  other_user_details: string;
  posts_count: number;
  likes_count: number;
  comments_count: number;
  successful_posts_count: number;
  failed_posts_count: number;
  other_user_stats_details: string;
}

// Typ dla danych użytkownika
export interface RegistrationUserData {
  user_id: number;
  avatarUrl: string;
  username: string;
  email: string;
  password: string;
  account_created_at: string;
  scientific_interests: string;
  birth_year: string;
  university_name: string;
  faculty: string;
  field_of_study: string;
  degree_level: string;
  user_title: string;
  other_user_details: string;
}


export interface Message {
  message_id: number;
  user_id: number;
  content: string;
  created_at: string;
}

export interface MessageImage {
  message_image_id: number;
  message_id: number;
  image_data: string;
  created_at: string;
}

export interface UserStats {
  user_id: number;
  posts_count: number;
  likes_count: number;
  comments_count: number;
  successful_posts_count: number;
  failed_posts_count: number;
  account_created_at?: string;
  scientific_interests?: string;
  other_user_stats_details?: string;
}

export interface CommentType {
  commentId: number;
  postId: number;
  author: {
    avatarUrl: string;
    username: string;
  };
  content: string;
  created_at: Date;
  likes_count: number;
  dislikes_count: number;
  other_comment_details: string;
}

export interface Post {
  image: string;
  name: string;
  status: string;
  comments: number;
  category: string;
}

export interface PostPageProps {
  user: UserData;
  posts: Post[];
}

export interface PostType {
  id: number;
  author: string;
  content: string;
  date: string;
  comments: CommentType[];
}

export interface PostServiceProps {
  posts: {
    image: string;
    name: string;
    status: string;
    comments: number;
    category: string;
  }[];
}

export interface RouteType {
  element: ReactNode;
  isAuthenticated: boolean;
}

export interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

export interface UserProfileProps {
  user: UserData;
  stats: UserStats;
}

export interface Match {
  result: string;
  date: string;
  time: string;
}

export interface SkillBarProps {
  label: string;
  value: number;
  color: string;
}

export interface UserStatsProps {
  stats: {
    pvp: number;
    farming: number;
    victories: number;
    supporting: number;
  };
}

// Dodaj inne typy danych, jeśli są potrzebne
