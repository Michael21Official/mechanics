import { ReactNode } from 'react';

// Typ dla danych użytkownika
export interface UserData {
  avatarUrl: string; // URL awatara użytkownika
  username: string; // nazwa użytkownika
  email?: string; // Pole email jako opcjonalne
  password?: string; // Pole password jako opcjonalne
  // Dodaj inne pola użytkownika, jeśli są potrzebne
}

export interface CommentType {
  commentId: number;
  postId: number;
  author: {
    avatarUrl: string;
    username: string;
  };
  content: string;
  created_at: Date; // Zmienione z 'date' na 'created_at'
  likes_count: number;
  dislikes_count: number;
  other_comment_details: string;
}




// ... reszta kodu ...

// Typ dla danych użytkownika
export interface UserData {
  avatarUrl: string; // URL awatara użytkownika
  username: string; // nazwa użytkownika
  email?: string; // Pole email jako opcjonalne
  password?: string; // Pole password jako opcjonalne
  // Dodaj inne pola użytkownika, jeśli są potrzebne
}

// ... reszta kodu ...


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

// Typ dla postu
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


// Typy do PrivateRoute
export interface RouteType {
  element: ReactNode; // element może być dowolnym elementem React (komponentem lub JSX)
  isAuthenticated: boolean; // informacja, czy użytkownik jest uwierzytelniony
}

// Interfejs dla props komponentu PrivateRoute
export interface PrivateRouteProps {
  isAuthenticated: boolean; // informacja, czy użytkownik jest uwierzytelniony
  children: ReactNode; // children może być dowolnym elementem React (komponentem lub JSX)
}

// Typ dla danych użytkownika w komponencie UserProfile
export interface UserProfileProps {
  user: {
    avatarUrl: string; // URL awatara użytkownika
    username: string; // nazwa użytkownika
  };
}

// Typ dla danych meczu w komponencie RecentMatches
export interface Match {
  result: string; // wynik meczu (np. 'Win' lub 'Loss')
  date: string; // data meczu
  time: string; // czas trwania meczu
}

// Typ dla paska umiejętności w komponencie SkillBar
export interface SkillBarProps {
  label: string; // etykieta paska (np. 'PVP' lub 'Farming')
  value: number; // wartość paska umiejętności
  color: string; // kolor paska umiejętności
}

// Typ dla statystyk użytkownika w komponencie UserStats
export interface UserStatsProps {
  stats: {
    pvp: number; // liczba punktów w umiejętności PVP
    farming: number; // liczba punktów w umiejętności Farming
    victories: number; // liczba zwycięstw
    supporting: number; // liczba punktów w umiejętności Supporting
  };
}

// Dodaj inne typy danych, jeśli są potrzebne
