import React from 'react';

const FilterByTitle = ({ titleFilter, handleChangeInput }) => {
  const handleInput = (ev) => {
    handleChangeInput(ev.target.value);
  };

  return (
    <>
      <label className='label' htmlFor='title'>
        Movie:
      </label>
      <input
        className='input-text'
        type='text'
        name='title'
        id='title'
        placeholder='Busca una película...'
        onChange={handleInput}
        value={titleFilter}
      />
    </>
  );
};

export default FilterByTitle;
