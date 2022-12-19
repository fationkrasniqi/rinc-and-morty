import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate;
  return (
   <div>
    <div>
    <h1 className="text-center ubuntu my-3">Rick & <span className="text-primary">Morty</span></h1>
      <h1 className='text-center ubuntu text-primary '>Cast</h1>
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
            
        </div>
  )
}

export default About
