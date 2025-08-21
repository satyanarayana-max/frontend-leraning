import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { registerUser as apiRegisterUser, verifyEmail, loginUser } from '../services/apiService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken'));
  const navigate = useNavigate();

  useEffect(() => {
    if (authToken) {
      const decodedToken = jwtDecode(authToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        logout();
      } else {
        setUser({
          email: decodedToken.sub,
          roles: decodedToken.roles, // Extract roles from the token
        });
      }
    }
  }, [authToken]);

  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      setAuthToken(token);
      const decodedToken = jwtDecode(token);
      setUser({
        email: decodedToken.sub,
        roles: decodedToken.roles,
      });
      navigateBasedOnRole(decodedToken.roles);
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  const logout = () => {
    console.log('Logout function called'); // Debugging log
    localStorage.removeItem('authToken'); // Remove the token from localStorage
    console.log('Token removed from localStorage'); // Debugging log
    setAuthToken(null); // Clear the authToken state
    setUser(null); // Clear the user state
    navigate('/login'); // Redirect to the login page
    console.log('Navigated to login page'); // Debugging log
  };

  const sendVerificationEmail = async (email, token) => {
    try {
      const response = await fetch('http://localhost:8082/api/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, token }),
      });
      if (!response.ok) {
        throw new Error('Failed to send verification email');
      }
      console.log('Verification email sent successfully');
    } catch (error) {
      console.error('Error sending verification email:', error);
    }
  };

  const registerUser = async (userData) => {
    try {
      const response = await apiRegisterUser(userData);
      console.log('User registered successfully:', response.data);
      alert('Registration successful! Please check your email to verify your account.');
    } catch (error) {
      console.error('Registration failed:', error.response ? error.response.data : error.message);
      alert('Registration failed. Please try again.');
    }
  };

  const navigateBasedOnRole = (roles) => {
    if (roles.includes('ROLE_USER')) {
      navigate('/user-home');
    } else if (roles.includes('ROLE_ADMIN')) {
      navigate('/admin-dashboard');
    } else if (roles.includes('ROLE_STUDENT')) {
      navigate('/student-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
