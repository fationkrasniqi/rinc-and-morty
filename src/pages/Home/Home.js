import React from 'react';
import { useNavigate } from 'react-router-dom';
import TabsSection from '../../components/Rick-morty/rickmorty';
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
              className="buton6"
              type="submit"
              onClick={() => navigate('/characters')}
            >Get Started</button>
             <button
             color='blue'
              className="buton6"
              type="submit"
              onClick={() => navigate('/about')}
            >Repository</button>
         

          </div>
      </section>
      </div>
      <div>
          <h1 className='randomtext'>Rick and Morty's adult animated </h1>
          <div className='random'>
            <img className='rickandmorty' src='https://c4.wallpaperflare.com/wallpaper/497/451/606/tv-show-rick-and-morty-morty-smith-rick-sanchez-hd-wallpaper-preview.jpg' alt='rick-and-morty'></img>
            <h4>
            Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's 
            nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Domestic Television. The series
             follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith,
              who split their time between domestic life and interdimensional adventures that take place across an infinite number 
              of realities, often travelling to other planets and dimensions through portals and on Rick's flying saucer. The general concept 
              of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into hijinks.
            </h4>
          </div>
          
        </div>
        <div className='test2'>
              <TabsSection/>
             
             <button className='buton6'
              type='submit'
             onClick={() => navigate('/characters')}>View all characters </button>
        </div>
        <div className='test2'>
            <div className='images'>
              <img className='image22' src='https://m.media-amazon.com/images/M/MV5BZmZhNWMyODgtMzA0OC00NWFhLTllODQtYmJkZjYxYWU4MGU1XkEyXkFqcGdeQWFybm8@._V1_.jpg'></img>
              <img className='image22' src='https://static01.nyt.com/images/2018/05/17/arts/18rickandmorty3/17rickandmorty-articleLarge.jpg?quality=75&auto=webp&disable=upscale'></img>
              <img className='image22' src='https://www.denofgeek.com/wp-content/uploads/2020/10/Rick-and-Morty-Season-4-HBO-Max-Hulu.jpg?fit=2400%2C1349'></img>
              </div>
              {/* Top cast */}
              <div>
            <h1>Top cast
           </h1>  
        </div>
        <div className='cast'>
          <div>
            <img className='justinimage' src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSHfBPwCFoBjHeWb5TdDVXnnOgmnXvzwpbC0dtwMaxgtyTfxn3ih5kyac5tEgXgOvCovqteyMWIQaUTHLw'></img>
            <h1>Justin Roiland</h1>
            <h1>Rick Sanches</h1>
            <h3>61 episodes ` 2013-2022</h3>
          </div>
          <div>
            <img className='justinimage' src='http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQqu6sbizVCs_rOvjY61SY26RUv5dcVBZ6fHMSRK0WHm5KleQM_hDrZhTHwkQlJq0dr_-d6FlSHUfUN6DY'></img>
            <h1>Chris Parnell</h1>
            <h1>Jerry Smith</h1>
            <h3>61 episodes ` 2013-2022</h3>
          </div>
          <div>
            <img className='justinimage' src='http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQo5eX9vFQJwS2jkIrLU3f-p5xAvRvllVfVggYHbOAwwO4RX0ZpGZYeHr6rnrmbALkmDRjJiIq8ON7twgU'></img>
            <h1>Spencer Grammer</h1>
            <h1>Summer Smith</h1>
            <h3>61 episodes ` 2013-2022</h3>
          </div>
          <div>
            <img className='justinimage' src='http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQo5eX9vFQJwS2jkIrLU3f-p5xAvRvllVfVggYHbOAwwO4RX0ZpGZYeHr6rnrmbALkmDRjJiIq8ON7twgU'></img>
            <h1>Spencer Grammer</h1>
            <h1>Summer Smith</h1>
            <h3>61 episodes ` 2013-2022</h3>
          </div>
          <div>
            <img className='justinimage' src='http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQo5eX9vFQJwS2jkIrLU3f-p5xAvRvllVfVggYHbOAwwO4RX0ZpGZYeHr6rnrmbALkmDRjJiIq8ON7twgU'></img>
            <h1>Spencer Grammer</h1>
            <h1>Summer Smith</h1>
            <h3>61 episodes ` 2013-2022</h3>
          </div>
          <div>
            <img className='justinimage' src='http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQo5eX9vFQJwS2jkIrLU3f-p5xAvRvllVfVggYHbOAwwO4RX0ZpGZYeHr6rnrmbALkmDRjJiIq8ON7twgU'></img>
            <h1>Spencer Grammer</h1>
            <h1>Summer Smith</h1>
            <h3>61 episodes ` 2013-2022</h3>
          </div>
        </div>
        <div>

        </div>
            <button className='buton6'
            type='submit'
            onClick={()=> navigate('/about')}
            >View more info </button>
        </div>
       
        <div className='test2'>
            <h1>Make a component  "footer"</h1>
        </div>
    </div>
    
  )
}

export default Home
