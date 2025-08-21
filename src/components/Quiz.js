import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await apiService.getQuizzes();
        setQuizzes(data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>Quizzes</Typography>
      <Grid container spacing={3}>
        {quizzes.map((quiz, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{quiz.title}</Typography>
                <Typography>{quiz.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Quiz;
