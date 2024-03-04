import React from 'react'

import { useRouteError, useNavigate } from 'react-router-dom'

import { FaAngleLeft } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";

function Error() {
    const error = useRouteError()
    const navigate = useNavigate()
    
  return (
    <div className="padding-x padding-y flex flex-col items-center ">
      <h1 className="text-[100px] font-bold my-20">Oops!</h1>
      <p className="text-2xl">{error.message || error.statusText}</p>

      <div className="w-full max-w-[450px] flex flex-col gap-y-4 md:flex-row justify-evenly mt-10">
        <button 
          className="rounded-md bg-saturated-green text-white flex items-center px-8 py-4 justify-center hover:outline-dotted hover:outline-4 hover:outline-saturated-green hover:outline-offset-4"
          onClick={() => {navigate(-1)}}
          >
          <FaAngleLeft className='w-[24px] h-[24px] mr-2'/>
          <span className=''>Go Back</span>
        </button>
        <button 
          className="rounded-md bg-saturated-green text-white flex items-center px-8 py-4 justify-center hover:outline-dotted hover:outline-4 hover:outline-saturated-green hover:outline-offset-4"
          onClick={() => {navigate('/about')}}
          >
          <FaHouseChimney className='w-[24px] h-[24px] mr-2'/>
          <span className="">Go Home</span>
        </button>
      </div>
    </div>
  )
}

export default Error