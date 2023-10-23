import '../styles/FilterByYear.scss';
const FilterByYear = ({ yearFilter, handleChangeSelect, years }) => {
  const handleSelect = (ev) => {
    handleChangeSelect(ev.target.value);
  };

  const renderYearOptions = years.map((year, index) => (
    <option key={index} value={year}>
      {year}
    </option>
  ));

  return (
    <>
      <label className='search-year' htmlFor='year'>
        Año de la película
        <select
          className='search-year__select'
          id='year'
          name='year'
          value={yearFilter}
          onChange={handleSelect}
        >
          <option className='search-year__select--all' value='all'>
            Todos
          </option>
          {renderYearOptions()}
        </select>
      </label>
    </>
  );
};

export default FilterByYear;
