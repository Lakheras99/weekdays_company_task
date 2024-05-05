import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../actions/jobActions';
import JobCard from './JobCard';

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector(state => state.job);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))
      )}
    </div>
  );
}

export default JobList;
