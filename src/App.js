import React , {useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import "./App.css"
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Pagenotfound from './pages/Pagenotfound/Pagenotfound';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App(){
  return(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/characters' element={<Characters/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/*' element={<Pagenotfound/>}/>

  </Routes>
  <Footer/>

  </BrowserRouter>
  )
}

// function Home() {
//   return(
//     <h1>Hi</h1>
//   )
// };

function Characters() {

  let [pageNumber, setPageNumber] = useState(1); 
  let [search, setSearch] = useState("");
  let [fetchedData,updateFetchData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
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
      <h1 className="text-center ubuntu my-3">Rick & <span className="text-primary">Morty</span></h1>
      <h1 className='text-center ubuntu text-primary '>Characters</h1>
    
       <Search setSearch={setSearch}/>
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
