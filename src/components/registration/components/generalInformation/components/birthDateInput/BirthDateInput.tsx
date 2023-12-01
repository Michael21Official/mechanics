import React, { ChangeEvent } from 'react';

interface BirthDateInputProps {
  birthYear: string;
  onBirthYearChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BirthDateInput: React.FC<BirthDateInputProps> = ({ birthYear, onBirthYearChange }) => {
  return (
    <div className="container-birth-year">
      <label>Birth Year:</label>
      <input
        type="text"
        name="birth_year"
        className="input input-birth-year"
        value={birthYear}
        onChange={onBirthYearChange}
        placeholder="DD-MM-YYYY"
        pattern="\d{2}-\d{2}-\d{4}"
        title="Please enter the birth year in the format DD-MM-YYYY"
      />
    </div>
  );
};

export default BirthDateInput;
