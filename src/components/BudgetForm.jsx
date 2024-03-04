import React from 'react'
import { Form } from 'react-router-dom'

import { FaCirclePlus } from "react-icons/fa6";

const BudgetForm = () => {
  return (
    <div className="rounded-md shadow-xl flex flex-col md:flex-row">
        <div className="flex-1 rounded-md outline-2 -outline-offset-4 outline-dashed m-2 flex flex-col gap-y-8 p-10">
            <Form method='post' className='flex flex-col gap-y-6'>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="newBudgetName" className="">Create Budget:</label>
                    <input 
                        type="text" 
                        className="outline-none border rounded-md p-2 focus:border-saturated-green focus:outline-saturated-green"
                        name="newBudgetName"
                        placeholder='e.g, Groceries'
                        required
                        />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="newBudgetAmount" className="">Amount:</label>
                    <input 
                        type="number" 
                        step='0.01'
                        className="outline-none border rounded-md p-2 focus:border-saturated-green focus:outline-saturated-green"
                        name="newBudgetAmount"
                        placeholder='e.g, 200'
                        required
                        inputMode='decimal'
                        
                    />
                </div>
                <input type="hidden" name="_action" value="budgetForm" />
                <button type="submit" className='rounded-md bg-saturated-green text-white flex items-center px-8 py-4 justify-center hover:bg-saturated-orange mt-6'>
                    <span className="mr-2">Create Budget</span>
                    <FaCirclePlus />
                </button>
            </Form>
        </div>


    </div>
  )
}

export default BudgetForm