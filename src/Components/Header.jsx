import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <div className='bg-pink-300'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
           <Link to="/">
            <h1 className='font-bold'>Auth App</h1>
           </Link>
            <ul className='flex gap-4'>
                <Link to="/">
                <li>Home</li>

                </Link>
                <Link to="/about">
                <li>About</li>

                </Link>
                
                {currentUser ? (
                  <Link to="profiledetails">
                  <h1 className='font-bold text-2xl text-center'>{currentUser.username}</h1>
                  </Link>
                ):(
                  <Link to="/sign-in">
                <li>Sign In</li>
                  </Link>
                )}

        
            </ul>
        </div>
    </div>
  )
}

export default Header