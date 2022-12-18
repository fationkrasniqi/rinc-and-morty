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
        <div className='wrapper'>
          <figure>
          <div className='hover-animation'>
           
              <img  className="img-back" src='https://progameguides.com/wp-content/uploads/2021/06/fortnite-outfit-Rick-Sanchez-768x803.jpg'></img>
              <img className='img-front' src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSHfBPwCFoBjHeWb5TdDVXnnOgmnXvzwpbC0dtwMaxgtyTfxn3ih5kyac5tEgXgOvCovqteyMWIQaUTHLw'></img>
          </div>
          <figurecaption>
             <h1>Justin Roiland</h1>
            <p>Rick Sanches</p>
            <p>61 episodes ` 2013-2022</p>
          </figurecaption>

          </figure>
         
          <figure>
          <div className='hover-animation'>
           
              <img  className="img-back" src='https://www.pngitem.com/pimgs/m/43-438554_jerry-smith-rick-e-morty-png-download-jerry.png'></img>
              <img className='img-front' src='http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQqu6sbizVCs_rOvjY61SY26RUv5dcVBZ6fHMSRK0WHm5KleQM_hDrZhTHwkQlJq0dr_-d6FlSHUfUN6DY'></img>
          </div>
          <figurecaption>
          <h1>Chris Parnell</h1>
            <p>Jerry Smith</p>
            <p>61 episodes ` 2013-2022</p>
          </figurecaption>

          </figure>
          <figure>
          <div className='hover-animation'>
           
              <img  className="img-back" src='https://comicvine.gamespot.com/a/uploads/scale_medium/6/66303/4472085-summer_in_ricksy_business.jpg'></img>
              <img className='img-front' src='http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQo5eX9vFQJwS2jkIrLU3f-p5xAvRvllVfVggYHbOAwwO4RX0ZpGZYeHr6rnrmbALkmDRjJiIq8ON7twgU'></img>
          </div>
          <figurecaption>
          <h1>Spencer Grammer</h1>
            <p>Summer Smith</p>
            <p>61 episodes ` 2013-2022</p>
          </figurecaption>

          </figure>
          
          <figure>
          <div className='hover-animation'>
           
              <img  className="img-back" src='https://www.kindpng.com/picc/m/43-438936_beth-smith-rick-and-morty-wine-hd-png.png'></img>
              <img className='img-front' src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQqog_xpIkjXRWxL9rNE2fLjGFm2FZHoOtZfzyBmOxlDDDs1DPVlVEWxRMldjXweMQrk-K4UwSky4DJi-w'></img>
          </div>
          <figurecaption>
          <h1>Sarah Chalke</h1>
            <p>Beth Smith</p>
            <p>61 episodes ` 2013-2022</p>
          </figurecaption>

          </figure>

          <figure>
          <div className='hover-animation'>
           
              <img  className="img-back" src='https://i.pinimg.com/474x/d9/15/8c/d9158ce24f1901a59be5db706730b55d.jpg'></img>
              <img className='img-front' src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTogD52zFSVexEGDdLmVvRr0Sd98PG8wnms5G4kJOZs91M1A-S4d_6S0DZudgCRLLtzU59GbMJmN3bIA_M'></img>
          </div>
          <figurecaption>
          <h1>Kari Wahlgren</h1>
            <p>Jessica</p>
            <p>36 episodes ` 2013-2022</p>
          </figurecaption>

          </figure>
         
          <figure>
          <div className='hover-animation'>
           
              <img  className="img-back" src='https://i1.sndcdn.com/avatars-000530476173-1wgpia-t500x500.jpg'></img>
              <img className='img-front' src='http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTY6VmMa4PAjDETyXnlRsPvQ6Kdv3-9tmhdEVy1fJkZYxol1rMbV7uRroWXIUPT-iUzLpxkSgSCMK6v_uA'></img>
          </div>
          <figurecaption>
          <h1>Maurice LaMarche</h1>
            <p>Abradoph Lindler</p>
            <p>29 episodes ` 2013-2022</p>
          </figurecaption>

          </figure>
        
        {/* End of Top cast */}

        </div>
        <div>

        </div>
            <button className='buton6'
            type='submit'
            onClick={()=> navigate('/about')}
            >View more info </button>
        </div>
        <h1 className='youtubetexting'>    First teaser trailer for Rick and morty live action starring Christopher Lloyd, Jaeden Martel.</h1>

       <div className='containervideosrc'>
        <iframe className='' width="420" height="315" src='https://www.youtube.com/embed/b57Weqj13e0' 
        frameborder="0"
       allowfullscreen
       ng-show="showvideo"
        title='Rick and morty'
        >
        
        </iframe>
        <h4 className='youtubetext'>
    
        After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's
         doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband,
          Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist,
           using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets,
            some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. 
            He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.
        </h4>
       </div>
        <div className='test2'>
        <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    </div>
    
  )
}

export default Home
