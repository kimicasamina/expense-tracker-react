import React from 'react'
import { Form, NavLink } from 'react-router-dom';

// hero icons imports
import { home } from '../assets'


const Nav = () => {

  return (
    <>
      <nav className='flex flex-row justify-between bg-white padding-y padding-x'>
        <NavLink to='/' aria-label='Go to home' className='flex items-center py-4 '>
          <img src={home} alt="logo" className='h-8' />
          <span className="ml-2 text-2xl ">Expense Tracker</span>
        </NavLink> 

        {/* {username && (
          <Form method="post" actions="/logout" onSubmit={(event) => {
            if (!confirm('Delete user and all data?')){
              event.preventDefault()
            } 
          }}>
            <button className="btn border" type='submit'>
              <span className="">Delete User</span>
            </button>
          </Form>
        )}         */}
      </nav>
    </>
  )
}

export default Nav