
import React from 'react';
import { TextField, Button } from '@material-ui/core';

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <TextField
        label="Search company name"
        variant="outlined"
        value={searchQuery}
        onChange={handleChange}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearchClick}>Search</Button>
    </div>
  );
}

export default SearchBar;
