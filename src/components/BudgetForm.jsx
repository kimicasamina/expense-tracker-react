import React, { useEffect, useRef } from 'react'
import { Form } from 'react-router-dom'
import { useFetcher } from 'react-router-dom';

import { FaCirclePlus } from "react-icons/fa6";

const BudgetForm = () => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === 'submitting'
    const formRef = useRef()
    const focusRef = useRef()

    useEffect(() => {
        if (!isSubmitting){
            // clear or resets form inputs
            formRef.current.reset()

            // bring the focus back to the createNewBudget input
            focusRef.current.focus()
        }
    }, [isSubmitting])

  return (
    // <div className="w-full mx-auto rounded-md shadow-ninja flex flex-col md:flex-row">
    // </div>
    <div className="form ">
        <fetcher.Form method='post' className='flex flex-col gap-y-6' ref={formRef}>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="newBudgetName" className="">Create Budget:</label>
                <input 
                    type="text" 
                    className="outline-none border rounded-md p-2 focus:border-saturated-green focus:outline-saturated-green"
                    name="newBudgetName"
                    placeholder='e.g, Groceries'
                    required
                    ref={focusRef}
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
            <button 
                type="submit" 
                className={`${isSubmitting ? 'opacity-50' : ''} rounded-md bg-saturated-green text-white flex items-center px-8 py-4 justify-center hover:bg-saturated-orange mt-6`}
                disabled={isSubmitting}
                >
                {
                    isSubmitting ? <span>Submitting...</span> : (
                        <>
                            <span className="mr-2">Create Budget</span>
                            <FaCirclePlus />
                        </>
                    )
                }
                
            </button>
        </fetcher.Form>
    </div>
  )
}

export default BudgetForm