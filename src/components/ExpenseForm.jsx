import React, { useEffect, useRef } from 'react'
import { Form, useFetcher } from 'react-router-dom'

import { FaCirclePlus } from "react-icons/fa6";

const ExpenseForm = ({budgets}) => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === 'submitting'
    const formRef = useRef()
    const focusRef = useRef()

    useEffect(() => {
        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [isSubmitting])
  return (
    <div className="form">
        <h2 className="mb-2 text-2xl">Add New{' '}
            <span className='font-3xl text-red-300'>
                {budgets.length === 1 && budgets.map(budget => {
                    return budget.name
                })}
            </span>
            {' '}Expense
        </h2>
        <fetcher.Form method='post' className='flex flex-col gap-y-6' ref={formRef}>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="newExpenseName" className="">
                    Expense Name
                </label>
                <input 
                    type="text"
                    name="newExpenseName" 
                    className="outline-none border rounded-md p-2 focus:border-saturated-green focus:outline-saturated-green" 
                    placeholder='e.g, Coffee'
                    required
                    ref={focusRef}
                />
            </div>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="newExpenseAmount" className="">
                    Expense Amount
                </label>
                <input 
                    type="number"
                    step="0.01"
                    name="newExpenseAmount" 
                    className="outline-none border rounded-md p-2 focus:border-saturated-green focus:outline-saturated-green" 
                    placeholder='e.g, 3.10'
                    inputMode='decimal'
                    required
                />
            </div>
            <select 
            name="newExpenseCategory" 
            id="newExpenseCategory" 
            className='outline-none border rounded-md p-2 focus:border-saturated-green focus:outline-saturated-green'
            hidden={budgets.length === 1 }
            >
            {
                budgets.map((budget) => {
                    return(
                        <option value={budget.id} key={budget.id} className="">{budget.name}</option>
                    )
                }) 
            }
            </select>
            <input type="hidden" name="_action" value="expenseForm" />
            <button 
                className={`${isSubmitting ? 'opacity-50' : ''} rounded-md bg-saturated-green text-white flex items-center px-8 py-4 justify-center hover:bg-saturated-orange mt-6`}
                disabled={isSubmitting}
                >
                {
                    isSubmitting ? <span className=''>Submitting...</span> : (
                        <>
                            <span className="mr-2">Create Expense</span>
                            <FaCirclePlus />
                        </>
                    )
                }
                
            </button>
        </fetcher.Form>
    </div>
  )
}

export default ExpenseForm