import React from 'react';

const Search = (props) => {
  return (
    <div>
      <form>
        <div className='form-group'>
          <label>Search Category</label>
          <select 
            className='form-control'
            onChange={props.handleSelect}>
            <option>Department</option>
            <option>Title</option>
            <option>Gender</option>
          </select>

          <label htmlFor='input'>Search</label>
          <input
            className='form-control'
            onChange={props.handleInputChange}
            type='text'
            name='input'
            value={props.input}
          />

          <br />
          <button 
          type='button' 
          className='btn btn-primary'
          onClick={props.handleSubmitSearch}
          >
          Search
          </button>
          

        </div>
      </form>
    </div>
  );
};

export default Search;
