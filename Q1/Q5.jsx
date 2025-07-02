// AuthContext.js
import { createContext, useContext } from 'react';

export const AuthContext = createContext({ isAuthenticated: false });

export const useAuth = () => useContext(AuthContext);

// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

// In your Router setup (App.jsx or Routes.jsx)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import ProtectedRoute from './ProtectedRoute';

<Router>
  <Routes>
    <Route path="/checkout" element={
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    } />
  </Routes>
</Router>
