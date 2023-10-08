// types.ts

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
  
  // Dodaj inne typy danych, jeśli są potrzebne
  