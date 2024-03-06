import React from 'react'
import { calculateSpentbyBudget, formatCurrency } from '../helper'

const BudgetItem = ({key, budget}) => {
    const {id, name, createdAt, amount} = budget
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
                {/* {120} */}
            </progress>
            <div className="flex justify-between">
                <small className="">{formatCurrency(spent)} spent</small>
                <small className="">{formatCurrency(amount - spent)} remaining</small>
            </div>
        </div>
    </>
  )
}

export default BudgetItem