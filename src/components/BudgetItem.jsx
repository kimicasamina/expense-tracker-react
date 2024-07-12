import React from 'react'
import { Form, Link, redirect } from 'react-router-dom'
import { calculateSpentbyBudget, formatCurrency, formatPercentage } from '../helper'

const BudgetItem = ({budget, showDelete}) => {
    const { id, name, amount, createdAt } = budget 
    const spent = calculateSpentbyBudget(id)  
    
  return (
    <>
        <div className="flex flex-col gap-y-2 rounded-xl border-2 shadow-md p-4 mb-4">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl text-saturated-orange">{name}</h2>
                <p className="">
                    <span className="">{formatCurrency(amount)}</span>
                    {' '}Budgeted
                </p>
            </div>
            <progress max={amount} value={spent}>
                <span>
                    {formatPercentage(spent / amount)}
                </span>
            </progress>
            <div className="flex justify-between">
                <small className="">{formatCurrency(spent)} spent</small>
                <small className="">{formatCurrency(amount - spent)} remaining</small>
            </div>
            {showDelete ?
                <Form method="post" action='delete' onSubmit={(e) => {
                    if (!confirm('Delete all data?')){
                        e.preventDefault()
                      } 
                    redirect('/')
                }}>
                    <button type="submit" className='bg-saturated-green flex justify-center items-center py-4 text-white rounded-md w-full max-w-sm mx-auto'>DELETE</button>
                </Form>
                 :
                <Link to={`budgets/${id}`} className='bg-saturated-green flex justify-center items-center py-4 text-white rounded-md w-full max-w-sm mx-auto'>View Details</Link>
            }
            
        </div>
    </>
  )
}

export default BudgetItem