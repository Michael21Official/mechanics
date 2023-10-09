// PrivateRoute.tsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from './types'; // Zaimportuj interfejs z pliku types.ts

function PrivateRoute({ isAuthenticated, children }: PrivateRouteProps) {
  if (isAuthenticated) {
    return <>{children}</>; // Wyświetl dzieci, jeśli użytkownik jest uwierzytelniony
  } else {
    return <Navigate to="/login" replace={true} />;
  }
}

export default PrivateRoute;
