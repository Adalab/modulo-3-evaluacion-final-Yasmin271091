import React from 'react';

const Filters = ({ handleFilterChange, handleYearChange, searchText, selectedYear, years }) => {
  return (
    <form className="filters">
      <div className="filter-group">
        <label htmlFor="movieFilter">Buscar por película:</label>
        <input 
          type="text" 
          id="movieFilter" 
          value={searchText} 
          onChange={handleFilterChange} 
        />
      </div>
      <div className="filter-group">
        <label htmlFor="yearFilter">Filtrar por año:</label>
        <select 
          id="yearFilter" 
          value={selectedYear} 
          onChange={handleYearChange}
        >
          <option value="all">Todos</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default Filters;

