import React from 'react';
import './Search.css'

const Search = ({setSearch}) => {
  return (
   <form className='container my-5'>
    <input 
    onChange={(e) => {
        setSearch(e.target.value);
    }}
    type="text" placeholder='Search for characters' className='input'></input>
    <button onClick={(e)=>{
        e.preventDefault();
    }} className='btn btn-primary fs-5 '>Search</button>
   </form>
  )
}

export default Search
