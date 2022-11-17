import React from 'react';
import '../App';
import { Link } from 'react-router-dom';

const Navebar = () => {
  return (

      <div className="navbar">
        <div className='navebar-container'>
          <h1 className='navebar-card'><i>Books World</i></h1>
        </div>
        <div>
          <Link to="/favorites">
          <h3 class="my-favarites-book" >My Favorite Book</h3>
          </Link>
        </div>
      </div>
  )
}

export default Navebar
