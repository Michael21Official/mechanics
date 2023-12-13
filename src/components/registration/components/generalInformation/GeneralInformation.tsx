import React, { ChangeEvent } from 'react';
import BirthDateInput from './components/birthDateInput/BirthDateInput';

interface GeneralInformationProps {
  formData: {
    username: string;
    email: string;
    password: string;
    birth_year: string;
  };
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const GeneralInformation: React.FC<GeneralInformationProps> = ({ formData, handleInputChange }) => {
  const handleBirthYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    // No need to manually create an object, use the event directly
    handleInputChange(e);
  };

  return (
    <div className="general-info-container">
      <div className="container-username">
        <input
          type="text"
          name="username"
          className="input input-username"
          value={formData.username}
          onChange={handleInputChange}
          required
          placeholder="Username"
        />
      </div>

      <div className="container-password">
        <input
          type="password"
          name="password"
          className="input input-password"
          value={formData.password}
          onChange={handleInputChange}
          required
          placeholder="Password"
        />
      </div>

      <div className="container-email">
        <input
          type="email"
          name="email"
          className="input input-email"
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder="Email"
        />
      </div>

      <BirthDateInput birthYear={formData.birth_year} onBirthYearChange={handleBirthYearChange} />
    </div>
  );
};

export default GeneralInformation;
