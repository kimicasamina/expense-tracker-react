import React from 'react'

// rrd imports
import { Form } from 'react-router-dom'

// icons
import { FaCirclePlus } from "react-icons/fa6";
// illustration
// import {wallet_illustration as wallet} from '../assets/wallet_illustration.svg'
import wallet_illustration from '../assets/wallet_illustration.svg'

const Intro = () => {
  return (
    <div className='flex flex-row items-end'>
        <div className="flex-1 flex flex-col gap-y-10">
            <h1 className="">Take Control of <span className='text-saturated-orange'>Your Money</span></h1>
            <p className="">Personal budgeting is the secret to financial freedom. Start your journey today.</p>
            <Form method='post' >
                <input 
                    type="text" 
                    className="outline-none border rounded-md p-2 focus:border-saturated-green focus:outline-saturated-green"
                    name="username"
                    placeholder="What's your name?"
                    required
                    aria-label='Your Name'
                    autoComplete='given-name'
                    />
                <button type="submit" className='mt-4 flex flex-row items-center p-4 bg-saturated-green rounded-md text-white hover:bg-saturated-orange'>
                    <span className="mr-2">CREATE ACCOUNT</span>
                    <FaCirclePlus className='w-4 h-4'/>
                </button>
            </Form>
        </div>
        <img src={wallet_illustration} alt="girl" className='flex-1 h-[500px]' />
        
    </div>
  )
}

export default Intro