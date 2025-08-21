import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      // Replace with backend URL
      const response = await axios.get('http://localhost:8082/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      // Replace with backend URL
      await axios.post('http://localhost:8082/api/courses', newCourse);
      fetchCourses();
      setNewCourse({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      // Replace with backend URL
      await axios.delete(`http://localhost:8082/api/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>

      <form onSubmit={handleAddCourse}>
        <h2>Add New Course</h2>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={newCourse.title}
            onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={newCourse.description}
            onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>

      <h2>Existing Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
