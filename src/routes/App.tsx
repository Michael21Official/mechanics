import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import LoginPage from '../components/login/LoginPage';
import PostsPage from '../components/posts/PostsPage';
import UserProfilePage from '../components/profiles/UserProfilePage';
import PrivateRoute from './PrivateRoute';
import LoadingSpinner from '../components/login/LoadingSpinner'; // Importuj LoadingSpinner
import RegistrationPage from '../components/registration/RegistrationPage'; 


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Tutaj możesz dodać kod do sprawdzenia autentykacji użytkownika lub innego procesu, który może trwać chwilę.
    // Po zakończeniu tego procesu ustaw `isLoading` na `false`.

    // Przykład:
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Symulacja zakończenia ładowania po 3 sekundach
  }, []);

  return (
    <Router>
      {isLoading ? (
        // Wyświetl LoadingSpinner podczas ładowania
        <LoadingSpinner />
      ) : (
        // Po zakończeniu ładowania, wyświetl odpowiednią zawartość aplikacji
        <Routes>
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/registration" // Dodaj trasę dla RegistrationPage
            element={<RegistrationPage />}
          />
          <Route
            path="/posts"
            element={
              isAuthenticated ? (
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <PostsPage />
                </PrivateRoute>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <UserProfilePage />
                </PrivateRoute>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route
            index
            element={
              isAuthenticated ? (
                <Navigate to="/posts" replace={true} />
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;
