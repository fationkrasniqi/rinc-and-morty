import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>

<div class="container">
  <footer class="mt-5 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-3 mb-0 text-muted">&copy; 2022 Rick and morty</p>
    

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/characters" class="nav-link px-2 text-muted">Characters</Link>
        </li>
      <li class="nav-item">
        <Link to="/about" class="nav-link px-2 text-muted">Cast</Link>
      </li>

 
    </ul>
    
  </footer>
</div>
    </div>
  )
}

export default Footer
