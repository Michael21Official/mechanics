// App.tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import PostsPage from './Posts/PostsPage';
import PrivateRoute from './PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/posts"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route index element={<PostsPage />} />
        </Route>
        <Route index element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App; // Dodaj eksport domyślny dla komponentu App
