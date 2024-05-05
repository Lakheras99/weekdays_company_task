// Filters.js
import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';

const Filters = ({ filters, handleFilterChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <TextField
        select
        label="Role"
        name="role"
        variant="outlined"
        value={filters.role}
        onChange={handleFilterChange}
        style={{ marginRight: '10px' }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Software Engineer">Software Engineer</MenuItem>
        {/* Add other role options */}
      </TextField>
      {/* Add other filter components */}
    </div>
  );
}

export default Filters;
