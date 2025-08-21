import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

function Performance() {
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const data = await apiService.getPerformance();
        setPerformanceData(data);
      } catch (err) {
        setError('Failed to fetch performance data.');
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Performance</h1>
      {performanceData ? (
        <div>
          <h2>Performance Details</h2>
          <p>Score: {performanceData.score}</p>
          <p>Rank: {performanceData.rank}</p>
        </div>
      ) : (
        <p>No performance data available.</p>
      )}
    </div>
  );
}

export default Performance;
