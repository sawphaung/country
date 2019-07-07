import React from 'react';

function SearchBox({ searchChange }) {
  return (
    <div>
      <input
        type='text'
        className='search-bar'
        placeholder='Search for a country...'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
