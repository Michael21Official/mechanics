import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import LoginPage from '../components/login/LoginPage';
import PostsPage from '../components/posts/PostsPage';
import UserProfilePage from '../components/profiles/UserProfilePage'; // Importuj komponent UserProfilePage
import PrivateRoute from './PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
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
          path="/profile" // Upewnij się, że dynamiczny segment jest obecny
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
        {/* Trasa domyślna, którą użytkownik zobaczy po wejściu na stronę */}
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
    </Router>
  );
}

export default App;
