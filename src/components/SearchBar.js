import React from 'react';
import PropTypes from 'prop-types';

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

const SearchBar = ({value, onSearchChange, search}) => {
  return (
    <section className="search-bar">
      <input onChange={onSearchChange} type="text" placeholder={search} value={value} />
    </section>
  );
};

export default SearchBar;
