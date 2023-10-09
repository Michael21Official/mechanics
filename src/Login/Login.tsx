import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import handleLogin from './handleLogin';

interface LoginProps {
  setIsAuthenticated: (value: boolean) => void; // Określenie typu setIsAuthenticated
}

function Login({ setIsAuthenticated }: LoginProps) { // Dodaj LoginProps jako typ props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await handleLogin(email, password);

      // Jeśli logowanie się powiodło, ustaw isAuthenticated na true i przekieruj użytkownika na stronę z postami
      setIsAuthenticated(true); // Ustawienie stanu na true po zalogowaniu

      navigate('/posts');

      // Zresetuj pola e-mail i hasło po zalogowaniu
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      setError(error as string);
    }
  };

  return (
    <div className="login-container">
      <h2>Zaloguj się</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          id="email"
          name="email"
          className="input-field"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          className="input-field"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button">
          Zaloguj się
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
