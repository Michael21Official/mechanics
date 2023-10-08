import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Importuj styl CSS

function Login() {
  return (
    <div className="login-container">
      <input type="text" className="input-field" placeholder="E-mail" />
      <input type="password" className="input-field" placeholder="Hasło" />
      <button className="button">Zaloguj się</button>
      {/* <Link to="/registration">Przejdź do rejestracji</Link> */}
    </div>
  );
}

export default Login;
