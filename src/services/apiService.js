import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api';

// Admin Moderation APIs
export const updateCourseStatus = (courseId, status) => {
    return axios.put(`${API_BASE_URL}/admin/moderation/course/${courseId}/status`, null, {
        params: { status },
    });
};

export const updateVideoStatus = (videoId, status) => {
    return axios.put(`${API_BASE_URL}/admin/moderation/video/${videoId}/status`, null, {
        params: { status },
    });
};

export const updateQuizStatus = (quizId, status) => {
    return axios.put(`${API_BASE_URL}/admin/moderation/quiz/${quizId}/status`, null, {
        params: { status },
    });
};

// Admin APIs
export const getAllUsers = () => {
    return axios.get(`${API_BASE_URL}/admin/users`);
};

export const activateUser = (userId) => {
    return axios.put(`${API_BASE_URL}/admin/users/${userId}/activate`);
};

export const deactivateUser = (userId) => {
    return axios.put(`${API_BASE_URL}/admin/users/${userId}/deactivate`);
};

export const updateUserRole = (userId, role) => {
    return axios.put(`${API_BASE_URL}/admin/users/${userId}/role`, null, {
        params: { role },
    });
};

// Auth APIs
export const registerUser = (userData) => {
    return axios.post(`${API_BASE_URL}/auth/register`, userData);
};

export const verifyEmail = (token) => {
    return axios.get(`${API_BASE_URL}/auth/verify`, {
        params: { token },
    });
};

export const loginUser = (credentials) => {
    return axios.post(`${API_BASE_URL}/auth/login`, credentials);
};

// Dashboard APIs
export const getDashboard = (userId) => {
    return axios.get(`${API_BASE_URL}/dashboard/${userId}`);
};

// Performance APIs
export const getPerformanceByUser = (userId) => {
    return axios.get(`${API_BASE_URL}/performance/user/${userId}`);
};

export const getPerformanceByQuiz = (quizId) => {
    return axios.get(`${API_BASE_URL}/performance/quiz/${quizId}`);
};

export const savePerformance = (performanceData) => {
    return axios.post(`${API_BASE_URL}/performance`, performanceData);
};

const apiService = {
    updateCourseStatus,
    updateVideoStatus,
    updateQuizStatus,
    getAllUsers,
    activateUser,
    deactivateUser,
    updateUserRole,
    getDashboard,
    getPerformanceByUser,
    getPerformanceByQuiz,
    savePerformance,
    registerUser,
    verifyEmail,
    loginUser
};

export default apiService;
