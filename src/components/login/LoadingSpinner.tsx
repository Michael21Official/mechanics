import React from 'react';
import './LoadingSpinner.css'; // Importuj styl CSS dla strony logowania (możesz utworzyć nowy plik CSS)

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle className="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
  </div>
);

export default LoadingSpinner;
