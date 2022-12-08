import React from 'react';
import styles from './Card.css';


const Cards = ({results}) => {
     let display;
    console.log(results)

    if(results){
       display = results.map(x=>{
        let {id, name, image,status,location} = x;

        return(<div key = {id }className='col-3'>
          <div className='cards'>
            <img src={image} alt='' className={`$styles.img} img-fluid`} />
            <div className='content'>
            <div className='fs-5 fw-bold mb-3'>{name}</div>
            {(() => {
              if(status === "Dead"){
                return(               
                   <div className='badge bg-danger'>{status}</div>
                )
              }
              else if(status === "Alive"){
                return(               
                  <div className='badge bg-success'>{status}</div>
               )
              }
              else{
                return(               
                  <div className='badge bg-secondary'>{status}</div>
               )
              }
            })()}
            {/* <div className='badge bg-primary'>{status}</div> */}
            <div>Last Location:  <br></br>{location.name}</div>
            </div>
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
