// LoginPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'; // Importuj komponent Login
import './LoginPage.css'; // Importuj styl CSS dla strony logowania (możesz utworzyć nowy plik CSS)

interface LoginPageProps {
  setIsAuthenticated: (value: boolean) => void; // Określenie typu setIsAuthenticated
}

function LoginPage({ setIsAuthenticated }: LoginPageProps) { // Dodaj LoginPageProps jako typ props
  return (
    <div className="login-page">
      <Login setIsAuthenticated={setIsAuthenticated} /> {/* Przekazujemy setIsAuthenticated do komponentu Login */}
      <div className="registration-container">
        <Link to="/registration" className="registration-link">Przejdź do rejestracji</Link>
      </div>
    </div>
  );
}

export default LoginPage;
