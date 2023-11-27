// UserProfile.tsx
import React from 'react';
import './UserProfile.css'; // Import the CSS file
import { UserProfileProps, UserStats } from '../../../../types/types';

// Komponent UserProfile przyjmujący dane użytkownika i statystyki i renderujący je
function UserProfile({ user, stats }: UserProfileProps & { stats: UserStats }) {
  return (
    <div className="UserProfile">
      <div className="AvatarSection">
        <img className="Avatar" src={user.avatarUrl} alt="User Avatar" />
      </div>
      <div className="UserInfo">
        <h2>{user.username}</h2>
        <p className="UserEmail">Email: {user.email}</p>
        <p>Data utworzenia konta: {user.account_created_at}</p>
        <p>Zainteresowania naukowe: {user.scientific_interests}</p>
        <p>Rok urodzenia: {user.birth_year}</p>
        <p>Uniwersytet: {user.university_name}</p>
        <p>Wydział: {user.faculty}</p>
        <p>Kierunek studiów: {user.field_of_study}</p>
        <p>Stopień: {user.degree_level}</p>
        <p>Stanowisko: {user.user_title}</p>
        <p>Dodatkowe informacje: {user.other_user_details}</p>
      </div>
      <div className="StatsSection">
        <h3>Statystyki użytkownika:</h3>
        <div className="Stats">
          <p>Liczba postów: {stats.posts_count}</p>
          <p>Liczba polubień: {stats.likes_count}</p>
          <p>Liczba komentarzy: {stats.comments_count}</p>
          <p>Liczba udanych postów: {stats.successful_posts_count}</p>
          <p>Liczba nieudanych postów: {stats.failed_posts_count}</p>
          <p>Data utworzenia konta: {stats.account_created_at}</p>
          <p>Zainteresowania naukowe: {stats.scientific_interests}</p>
          <p>Dodatkowe informacje: {stats.other_user_stats_details}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;