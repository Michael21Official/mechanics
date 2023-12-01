import { LoginUserData } from '../../types/types';

const exampleUserData: LoginUserData = {
  email: 'przykladowy@email.com',
  password: 'haslo123',
};

function handleLogin(email: string, password: string): Promise<{ user: LoginUserData }> {
  return new Promise((resolve, reject) => {
    // Przykładowa asynchroniczna logika logowania (np. wywołanie API)
    setTimeout(() => {
      if (email === exampleUserData.email && password === exampleUserData.password) {
        // Logowanie się powiodło, przypisz dane do obiektu LoginUserData
        resolve({ user: exampleUserData });
      } else {
        // Błąd logowania, wywołaj reject z odpowiednim komunikatem błędu
        reject('Nieprawidłowy e-mail lub hasło');
      }
    }, 1000); // Symulacja opóźnienia w procesie logowania
  });
}

export default handleLogin;
