import React , {useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import "./App.css"
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {

  let [pageNumber, setPageNumber] = useState(1); 
  let [fetchedData,updateFetchData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  let {info, results} = fetchedData;

  // console.log(fetchedData)

  useEffect(()=> {

   (async function(){
    let data = await fetch(api)
    .then(res => res.json())
    updateFetchData(data)
  }) () 

  } ,[api])
  
  return (
    <div>
      <h1 className="text-center ubuntu my-4">Rick & <span className="text-primary">Morty</span></h1>
    
       <Search/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <Cards results={results}/>
             
           </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>

  );
}

export default App;
