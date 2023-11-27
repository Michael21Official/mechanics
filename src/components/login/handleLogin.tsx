import { UserData } from '../../types/types';
import React from 'react';

function handleLogin(email: string, password: string): Promise<{ user: UserData }> {
  // Przykład przykładowego e-maila i hasła do logowania
  const exampleEmail = 'przykladowy@email.com';
  const examplePassword = 'haslo123';

  // Tutaj możesz dodać logikę logowania, np. wywołując odpowiednie API lub funkcje autentykacji.
  // W tym przypadku, porównujemy przekazane dane z przykładowymi danymi.
  return new Promise((resolve, reject) => {
    if (email === exampleEmail && password === examplePassword) {
      // Logowanie się powiodło, przypisz dane do obiektu UserData
      const user: UserData = {
        user_id: 1, // Dodaj user_id
        email: email,
        password: password,
        avatarUrl: 'url-do-awatara', // Dostosuj to do rzeczywistych danych użytkownika
        username: 'Nazwa Użytkownika', // Dostosuj to do rzeczywistych danych użytkownika
      };
      resolve({ user });
    } else {
      // Błąd logowania, wywołaj reject z odpowiednim komunikatem błędu
      reject('Nieprawidłowy e-mail lub hasło');
    }
  });
}

export default handleLogin;
