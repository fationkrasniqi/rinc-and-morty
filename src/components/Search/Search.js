import React from 'react';
import './Search.css'

const Search = () => {
  return (
   <form className='container'>
    <input type="text" placeholder='Search for characters' className='input'></input>
    <button className='btn btn-primary '>Search</button>
   </form>
  )
}

export default Search
