import React from 'react';
import './Card.css'

const Cards = ({results}) => {
     let display;
    console.log(results)

    if(results){
       display = results.map(x=>{
        let {id, name, image,status,location} = x;

        return(<div key = {id }className='col-4'>
            <img src={image} alt='' className='img-fluid' />
            <div className='content'>
            <div className='fs-4 fw-bold mb-3'>{name}</div>
            <div className='badge bg-primary'>{status}</div>
            <div>Last Location:  <br></br>{location.name}</div>
            </div>
        </div>
        
        )
       })
    }
    else{
      display = "No charachters found"
    }

    return (
    <>
      {display}
    </>
  )
}

export default Cards
