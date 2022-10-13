import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({value, onSearchChange, search}) => {
  return (
    <section className="search-bar">
      <input onChange={onSearchChange} type="text" placeholder={search} value={value} />
    </section>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default SearchBar;
