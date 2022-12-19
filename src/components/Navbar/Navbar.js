import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.css";
import Logo from '../Navbar/Logo/rick-and-morty.png';
import '../../App.css'

const Navbar = () => {
  return (
    <div>
      <nav  className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand fs-4 px-3 " href="/"><img className='logo' src={Logo} alt='Site logo'/></a>
    <button className="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}

      <style jsx>
        {
          `
          button[aria-expanded="false"] > .close{
            display : none
          }
          button[aria-expanded="true"] > .open{
           display : none
          `
        }
      </style>

      <i class="fas fa-bars open text-dark"></i>
      <i class="fas fa-times close text-dark"></i>
    </button>
    <div className={`$styles.test} collapse navbar-collapse justify-content-end px-5 fs-4  `}  id="navbarNav">
    {/* className={`$styles.img} img-fluid`} /> */}
      <ul className="navbar-nav"  >
        <li className="nav-item">
          <a   className="nav-link" aria-current="page" href="characters">Characters</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="about">Cast</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
