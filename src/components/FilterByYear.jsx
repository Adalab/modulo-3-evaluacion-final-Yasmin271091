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
      <label className='label' htmlFor='year'>
        Año de la película
        <select
          className='select'
          id='year'
          name='year'
          value={yearFilter}
          onChange={handleSelect}
        >
          <option value='all'>Todos</option>
          {renderYearOptions}
        </select>
      </label>
    </>
  );
};

export default FilterByYear;
