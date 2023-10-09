import React, { useState, FormEvent } from 'react'; // Importuj FormEvent
import { Link } from 'react-router-dom';
import './Login.css'; // Importuj styl CSS
import handleLogin from './handleLogin'; // Importuj funkcję handleLogin

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>(''); // Określ typ 'error' jako string

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => { // Określ typ 'e' jako FormEvent<HTMLFormElement>
    e.preventDefault();

    try {
      // Wywołaj funkcję handleLogin, aby sprawdzić e-mail i hasło
      const userData = await handleLogin(email, password);

      // Jeśli logowanie się powiodło, możesz przekierować użytkownika na inną stronę lub wykonać inne działania
      console.log('Zalogowano:', userData);

      // Zresetuj pola e-mail i hasło po zalogowaniu
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      // Jeśli wystąpił błąd logowania, ustaw odpowiedni komunikat błędu
      setError(error as string); // Rzutuj 'error' na typ string
    }
  };

  return (
    <div className="login-container">
      <h2>Zaloguj się</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          className="input-field"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
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
