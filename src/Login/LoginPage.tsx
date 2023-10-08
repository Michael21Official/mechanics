import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'; // Importuj komponent Login
import './LoginPage.css'; // Importuj styl CSS dla strony logowania (możesz utworzyć nowy plik CSS)

function LoginPage() {
  return (
    <div className="login-page">
      <Login /> {/* Wykorzystaj komponent Login */}
      <div className="registration-container">
        <Link to="/registration" className="registration-link">Przejdź do rejestracji</Link>
      </div>
    </div>
  );
}

export default LoginPage;
