import React, { useState, ChangeEvent, FormEvent, useContext, useRef } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { RegistrationUserData } from '../../types/types';
import './RegistrationPage.css';

import GeneralInformation from './components/generalInformation/GeneralInformation';
import EducationInformation from './components/educationInformation/EducationInformation';
import OtherUserDetails from './components/otherUserDetails/OtherUserDetails';
import Summary from './components/summary/Summary';
import MenuButton from './components/menuButton/MenuButton'; // Make sure to import MenuButton

const fakeCreateUser = async (userData: RegistrationUserData) => {
  console.log('Simulated API Call:', userData);


  const response = {
    ...userData,
    account_created_at: new Date().toISOString(),
  };

  return response;
};

const AuthContext = React.createContext<{ isAuthenticated: boolean; login: () => void }>({
  isAuthenticated: false,
  login: () => {},
});

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationUserData>({
    user_id: 0,
    avatarUrl: '',
    username: '',
    email: '',
    password: '',
    account_created_at: '',
    scientific_interests: '',
    birth_year: '00-00-0000',
    university_name: '',
    faculty: '',
    field_of_study: '',
    degree_level: '',
    user_title: '',
    other_user_details: '',
  });

  const [activeSection, setActiveSection] = useState<string>('general');
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const navigate: NavigateFunction = useNavigate(); // Fix the unused variable warning
  const authContext = useContext(AuthContext);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTextAreaChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleMenuClick = (section: string) => {
    setActiveSection(section);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userId = await fakeCreateUser(formData);
      authContext.login();
      console.log(`Simulated Registration: User ID ${userId}`);
      setShowSummary(true);
    } catch (error) {
      console.error('Error during simulated registration:', error);
    }
  };

  return (
    <div className="registration-view">
      <div className="registration-form" id="registration-form-container">
        <div className="menu" id="MENU">
          {['general', 'education', 'other', 'summary'].map((section) => (
            <MenuButton
              key={section}
              label={`${section.charAt(0).toUpperCase()}${section.slice(1)}`}
              onClick={() => handleMenuClick(section)}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} ref={formRef} id="REGISTER-VIEW">
          {activeSection === 'general' && (
            <GeneralInformation formData={formData} handleInputChange={handleInputChange} />
          )}

          {activeSection === 'education' && (
            <EducationInformation formData={formData} handleInputChange={handleInputChange} />
          )}

          {activeSection === 'other' && (
            <OtherUserDetails
              value={formData.other_user_details}
              onChange={handleTextAreaChange}
            />
          )}

          {activeSection === 'summary' && showSummary && (
            <Summary formData={formData} />
          )}

          <div className='btn-register'>
            <button type="submit" className="button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
