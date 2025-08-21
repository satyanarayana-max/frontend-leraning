import React, { useEffect, useState } from 'react';
import { getAllUsers, activateUser, deactivateUser, updateUserRole } from '../services/apiService';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    const handleActivate = async (userId) => {
        try {
            await activateUser(userId);
            alert('User activated successfully');
            fetchUsers();
        } catch (error) {
            console.error('Failed to activate user:', error);
        }
    };

    const handleDeactivate = async (userId) => {
        try {
            await deactivateUser(userId);
            alert('User deactivated successfully');
            fetchUsers();
        } catch (error) {
            console.error('Failed to deactivate user:', error);
        }
    };

    const handleUpdateRole = async (userId, role) => {
        try {
            await updateUserRole(userId, role);
            alert('User role updated successfully');
            fetchUsers();
        } catch (error) {
            console.error('Failed to update user role:', error);
        }
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleActivate(user.id)}>Activate</button>
                                <button onClick={() => handleDeactivate(user.id)}>Deactivate</button>
                                <button onClick={() => handleUpdateRole(user.id, 'ROLE_ADMIN')}>Make Admin</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
