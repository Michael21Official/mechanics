// types.ts

import { ReactNode } from 'react';


// Typ dla danych użytkownika
export interface UserData {
    email: string;
    password: string;
    // Dodaj inne pola użytkownika, jeśli są potrzebne
  }
  
  // Typ dla postu
  export interface PostType {
    id: number;
    author: string;
    content: string;
    date: string;
  }

  //Typy do PrivateRoute
  export interface RouteType {
    element: Element;
    isAuthenticated: boolean;
  }

  // Interfejs dla props komponentu PrivateRoute
  export interface PrivateRouteProps {
    isAuthenticated: boolean;
    children: ReactNode;
  }
  
  // Dodaj inne typy danych, jeśli są potrzebne
  