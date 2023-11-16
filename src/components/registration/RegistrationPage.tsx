// RegistrationPage.tsx

import React, { useState } from 'react';
import { createUser } from '../../services/api/userApi';

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    scientificInterests: '',
    birthYear: 0,
    universityName: '',
    faculty: '',
    fieldOfStudy: '',
    degreeLevel: '',
    userTitle: '',
    otherUserDetails: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      username,
      email,
      password,
      scientificInterests,
      birthYear,
      universityName,
      faculty,
      fieldOfStudy,
      degreeLevel,
      userTitle,
      otherUserDetails,
    } = formData;

    try {
      // Dodawanie użytkownika do bazy danych
      const userId = await createUser(
        username,
        email,
        password,
        new Date(),
        scientificInterests,
        birthYear,
        universityName,
        faculty,
        fieldOfStudy,
        degreeLevel,
        userTitle,
        otherUserDetails
      );

      console.log(`Użytkownik o ID ${userId} został dodany do bazy danych.`);
    } catch (error) {
      console.error('Błąd podczas rejestracji:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Dodaj tutaj pola formularza, np.: */}
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      {/* ... pozostałe pola formularza ... */}
      <button type="submit">Zarejestruj się</button>
    </form>
  );
};

export default RegistrationPage;
