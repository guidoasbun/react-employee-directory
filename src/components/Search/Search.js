import React from 'react';

const Search = (props) => {
  return (
    <div>
      <form>
        <div className='form-group'>
          <label>Search Category</label>
          <select className='form-control'>
            <option>Department</option>
            <option>Title</option>
            <option>Genter</option>
          </select>

          <label htmlFor='input'>Search</label>
          <input
            className='form-control'
            type='text'
            name='input'
            value={props.input}
            onChange={props.handleInputChange}
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
