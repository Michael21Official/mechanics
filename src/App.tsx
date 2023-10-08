import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login/LoginPage'; // Importuj stronę logowania
import PostsPage from './Posts/PostsPage'; // Importuj stronę z postami

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route index element={<LoginPage />} /> {/* Dodaj trasę dla domyślnej strony */}
      </Routes>
    </Router>
  );
}

export default App;
