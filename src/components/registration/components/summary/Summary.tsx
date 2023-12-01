import React from 'react';
import { RegistrationUserData } from '../../../../types/types';

interface SummaryProps {
  formData: RegistrationUserData;
}

const Summary: React.FC<SummaryProps> = ({ formData }) => {
  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <div>
        <strong>Username:</strong> {formData.username}
      </div>
      <div>
        <strong>Email:</strong> {formData.email}
      </div>
      <div>
        <strong>Password:</strong> {formData.password}
      </div>
      <div>
        <strong>Birth Year:</strong> {formData.birth_year}
      </div>
      <div>
        <strong>University Name:</strong> {formData.university_name}
      </div>
      <div>
        <strong>Faculty:</strong> {formData.faculty}
      </div>
      <div>
        <strong>Field of Study:</strong> {formData.field_of_study}
      </div>
      <div>
        <strong>Degree Level:</strong> {formData.degree_level}
      </div>
      <div>
        <strong>User Title:</strong> {formData.user_title}
      </div>
      <div>
        <strong>Scientific Interests:</strong> {formData.scientific_interests}
      </div>
      <div>
        <strong>Other User Details:</strong> {formData.other_user_details}
      </div>
    </div>
  );
};

export default Summary;
