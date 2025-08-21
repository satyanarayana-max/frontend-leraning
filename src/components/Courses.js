import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await apiService.getCourses();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <Container style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>Courses</Typography>
            <Grid container spacing={3}>
                {courses.map((course, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{course.name}</Typography>
                                <Typography>{course.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Courses;
