import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import AuthContext from './AuthContext';

const Home = () => {
    const { logout } = useContext(AuthContext);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Learning Platform
                    </Typography>
                    <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                    <Button color="inherit" component={Link} to="/courses">Courses</Button>
                    <Button color="inherit" component={Link} to="/enrollment">Enrollment</Button>
                    <Button color="inherit" component={Link} to="/quiz">Quiz</Button>
                    <Button color="inherit" onClick={logout}>Logout</Button>
                </Toolbar>
            </AppBar>

            <Container style={{ marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>Welcome to the Learning Platform</Typography>
                <Typography variant="body1">
                    Our institute provides a variety of courses and resources to enhance your learning experience. Use the navigation bar above to explore.
                </Typography>
                <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Courses</Typography>
                                <Typography>Explore a variety of courses offered by our institute.</Typography>
                                <Button component={Link} to="/courses" variant="contained" color="primary" style={{ marginTop: '10px' }}>Go to Courses</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Dashboard</Typography>
                                <Typography>View your personalized dashboard.</Typography>
                                <Button component={Link} to="/dashboard" variant="contained" color="primary" style={{ marginTop: '10px' }}>Go to Dashboard</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Enrollment</Typography>
                                <Typography>Check your course enrollments.</Typography>
                                <Button component={Link} to="/enrollment" variant="contained" color="primary" style={{ marginTop: '10px' }}>Go to Enrollment</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Quiz</Typography>
                                <Typography>Participate in quizzes to test your knowledge.</Typography>
                                <Button component={Link} to="/quiz" variant="contained" color="primary" style={{ marginTop: '10px' }}>Go to Quiz</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
