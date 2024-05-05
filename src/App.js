import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './actions/jobActions';
import Filters from './components/Filters';
import JobList from './components/JobList'; // Import the JobList component
import SearchBar from './components/SearchBar'; // Import the SearchBar component

const App = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.jobs);
  const [filters, setFilters] = useState({
    role: '',
    numEmployees: '',
    experience: '',
    remote: '',
    minimumSalary: '',
    companyName: ''
  });

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Container>
      {/* Search Bar */}
      <SearchBar />

      {/* Filters Section */}
      <Filters filters={filters} handleFilterChange={handleFilterChange} />

      {/* Job List */}
      <JobList jobs={jobs} />

      {/* Job Card Container */}
      <Grid container spacing={3}>
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                {/* Job Card Content */}
                <img src={job.companyLogo} alt={job.companyName} />
                <Typography variant="h5" component="h2">
                  {job.companyName}
                </Typography>
                <Typography color="textSecondary">
                  {job.role}
                </Typography>
                <Typography color="textSecondary">
                  {job.location}
                </Typography>
                {/* Add other job details */}
                <Button variant="contained" color="primary">
                  Easy Apply
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
