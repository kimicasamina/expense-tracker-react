import React from 'react'
import { Form, NavLink } from 'react-router-dom';

// hero icons imports
import { FaMoneyBill } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";


const Nav = ({username}) => {

  return (
    <>
      <nav className='flex flex-row justify-between items-center bg-white padding-y padding-x border-b-4 border-saturated-orange'>
        <NavLink to='/' aria-label='Go to home' className='flex items-center text-black rounded-md '>
          <FaMoneyBill className='text-saturated-orange w-[32px] h-[32px]' />
          <span className="ml-2 text-xl font-semibold">SAVE MONEY</span>
        </NavLink> 

        {username && (
          <Form method="post" action="/logout" onSubmit={(event) => {
            if (!confirm('Delete user and all data?')){
              event.preventDefault()
            } 
          }}>
            <button className="bg-saturated-orange rounded-md py-4 px-6 flex flex-row items-center gap-x-2 " type='submit'>
              <span className="font-semibold">DELETE USER</span>
              <FaRegTrashCan />
            </button>
          </Form>
        )}        
      </nav>
    </>
  )
}

export default Nav