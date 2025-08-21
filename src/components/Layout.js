import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import AuthContext from './AuthContext';


const Layout = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Learning Platform
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/courses">Courses</Button>
                    {user?.roles?.includes('ROLE_ADMIN') && (
                        <>
                            <Button color="inherit" component={Link} to="/admin-dashboard">Admin Dashboard</Button>
                            <Button color="inherit" component={Link} to="/manage-courses">Manage Courses</Button>
                        </>
                    )}
                    {user?.roles?.includes('ROLE_STUDENT') && (
                        <>
                            <Button color="inherit" component={Link} to="/student-dashboard">Student Dashboard</Button>
                            <Button color="inherit" component={Link} to="/enroll-courses">Enroll Courses</Button>
                        </>
                    )}
                    <Button color="inherit" onClick={logout}>Logout</Button>
                </Toolbar>
            </AppBar>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
