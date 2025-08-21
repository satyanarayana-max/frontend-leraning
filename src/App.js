import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Enrollment from './components/Enrollment';
import Quiz from './components/Quiz';
import Home from './components/Home';
import Layout from './components/Layout';
import AdminDashboard from './components/AdminDashboard';
import ManageCourses from './components/ManageCourses';
import ManageQuiz from './components/ManageQuiz';
import './App.css';

function App() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; // Redirect to home page after logout
  };

  return (
    //   <div className="App">
    //      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f5f5f5' }}>
    //        <h2>Learning Platform</h2>
    //      <button onClick={handleLogout} style={{ padding: '5px 10px', cursor: 'pointer' }}>Logout</button>
    //  </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="enrollment" element={<Enrollment />} />
            <Route path="quiz" element={<Quiz />} />
            {/* Admin-specific routes */}
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="manage-courses" element={<ManageCourses />} />
            <Route path="manage-quiz" element={<ManageQuiz />} />
          </Route>
        </Routes>
      // </div>
   
  );
}

export default App;
