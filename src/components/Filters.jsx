import React from 'react';
import '../styles/Filters.scss';
const Filters = ({
  handleFilterChange,
  handleYearChange,
  searchText,
  selectedYear,
  years,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className='filters'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={searchText}
          onChange={handleFilterChange}
          placeholder='Buscar por título'
        />
        <select value={selectedYear} onChange={handleYearChange}>
          <option value='all'>Todos los años</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button type='submit' style={{ display: 'none' }} />
      </form>
    </div>
  );
};

export default Filters;
