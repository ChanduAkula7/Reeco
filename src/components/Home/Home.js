import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import './Home.css'

const Home = () => {
  return (
    <>
    <header className='header'>
      <div>
        <p>Orders <spna className="span1">Order 3278742</spna></p>
      </div>
      <div className='sub'>
        <h2>Order 3278742</h2>
        <div className='h-buttons'>
          <button  className='bt1'>Back</button>
          <button className='bt'>Appproved order</button>   
        </div>
      </div>
    </header>

    </>
  )
}

export default Home
