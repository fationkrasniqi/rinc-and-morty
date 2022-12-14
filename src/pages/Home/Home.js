import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


const Home = () => {
    const navigate = useNavigate();

  return (
    <div>
      <div className='header'>
      <section className="header_container">
        <div className="header_img ">
          <div className="header-1">Rick and Morty's animated</div>
          <div className="header-2">series information</div> 
         
        </div>
        <div className="getstartedbutton">
             <button
             color='blue'
              className="buton3"
              type="submit"
              onClick={() => navigate('/characters')}
            >Get Started</button>
          </div>
          <div className="repository">
             <button
              className="buton3"
              type="submit"
              onClick={() => navigate('/characters')}
            >Repository</button>
          </div>
      </section>
      </div>
      <div>
          <h1 className='randomtext'>Rick and Morty's animated series information</h1>
          <div className='random'>
            <img className='rickandmorty' src='https://static.cdn.turner.com/inline-images/RAM%20S6%20DDT%20Artwork.jpg' alt='rick-and-morty'></img>
            <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
             since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
             five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.
            </h4>
          </div>
          
        </div>
        <div className='test2'>
            <h1>Rick and morty plus 2 other characters clicked</h1>
            <h2>Images of four characters when they are clicled they will be appear. </h2>
             <h2>View more characters</h2>
             <button className='buton3'
              type='submit'
             onClick={() => navigate('/characters')}>View more characters</button>
        </div>
        <div className='test2'>
            <h1>Some fucking info about cast and about ..... </h1>
            <button className='buton3'
            type='submit'
            onClick={()=> navigate('/about')}
            >Go to about </button>
        </div>
        <div className='test2'>
            <h1>Make a component  "footer"</h1>
        </div>
    </div>
    
  )
}

export default Home
