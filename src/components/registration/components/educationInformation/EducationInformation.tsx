import React, { ChangeEvent } from 'react';

interface EducationInformationProps {
  formData: {
    university_name: string;
    faculty: string;
    field_of_study: string;
    degree_level: string;
    user_title: string;
  };
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EducationInformation: React.FC<EducationInformationProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="education-info-container">
      {/* Removed the label for Education Information */}

      <div className="container-university-name">
        {/* Removed the label for University Name */}
        <input
          type="text"
          name="university_name"
          className="input input-university-name"
          value={formData.university_name}
          onChange={handleInputChange}
          placeholder="University Name"
        />
      </div>

      <div className="container-faculty">
        {/* Removed the label for Faculty */}
        <input
          type="text"
          name="faculty"
          className="input input-faculty"
          value={formData.faculty}
          onChange={handleInputChange}
          placeholder="Faculty"
        />
      </div>

      <div className="container-field-of-study">
        {/* Removed the label for Field of Study */}
        <input
          type="text"
          name="field_of_study"
          className="input input-field-of-study"
          value={formData.field_of_study}
          onChange={handleInputChange}
          placeholder="Field of Study"
        />
      </div>

      <div className="container-degree-level">
        {/* Removed the label for Degree Level */}
        <input
          type="text"
          name="degree_level"
          className="input input-degree-level"
          value={formData.degree_level}
          onChange={handleInputChange}
          placeholder="Degree Level"
        />
      </div>

      <div className="container-user-title">
        {/* Removed the label for User Title */}
        <input
          type="text"
          name="user_title"
          className="input input-user-title"
          value={formData.user_title}
          onChange={handleInputChange}
          placeholder="User Title"
        />
      </div>
    </div>
  );
};

export default EducationInformation;
