import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// Ten komponent renderuje komponent tylko, gdy użytkownik jest zalogowany
function PrivateRoute({ isAuthenticated }: { isAuthenticated: boolean }) {
  return isAuthenticated ? (
    <Outlet /> // Outlet jest używany w nowej wersji react-router-dom
  ) : (
    <Navigate to="/login" replace={true} />
  );
}

export default PrivateRoute;
