import React , {useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import "./App.css"

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
      <div className="container">
        <div className="row">
          <div className="col-3"><Filters/></div>
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
             
           </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
