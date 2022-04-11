import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <div className='navbar'>
      <Link className='link' to='/'><p>All User</p></Link>
      <Link className='link' to='add-user'><p>Add User</p></Link>
  </div>
  )
};

export default Navbar;
