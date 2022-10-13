import React from 'react';

const SearchBar = ({value, onSearchChange, search}) => {
  return (
    <section className="search-bar">
      <input onChange={onSearchChange} type="text" placeholder={search} value={value} />
    </section>
  );
};

export default SearchBar;